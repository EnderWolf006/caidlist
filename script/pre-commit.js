import { simpleGit } from 'simple-git';

const Restrictions = [
    {
        files: [
            /^output\/([^/]+)\/dev\//,
            /^version\/dev\//
        ],
        pass: ({ current }) => current === 'nda-restricted',
        message: 'Commit nda-restricted content to master is not allowed.'
    },
    {
        except: [
            /^output\/([^/]+)\/dev\//,
            /^version\/dev\//
        ],
        pass: ({ current }) => current !== 'nda-restricted',
        message: 'No need to commit non-nda-restricted content to nda-restricted.'
    }
];

async function main() {
    const git = simpleGit();
    const status = await git.status();
    let failed = false;
    status.files.forEach((file) => {
        if (!'MTADRC'.includes(file.index)) return;
        Restrictions.forEach((restriction) => {
            if (restriction.files && !restriction.files.some((pattern) => pattern.test(file.path))) {
                return;
            }
            if (restriction.except && restriction.except.some((pattern) => pattern.test(file.path))) {
                return;
            }
            if (!restriction.pass(status)) {
                failed = true;
                console.error(`[${file.path}] ${restriction.message}`);
            }
        });
    });
    if (failed) {
        process.exit(1);
    }
}

main().catch((err) => {
    console.error(err);
    process.exit(1);
});
