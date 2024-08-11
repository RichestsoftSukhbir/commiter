import jsonfile from 'jsonfile';
import moment from 'moment';
import simpleGit from 'simple-git';

const path = './data.json';

const markCommit = (x, y) => {
    const date = moment().subtract(1, "y").add(1, "d").add(x, "w").add(y, "d").format();
    const data = {
        date: date
    }

    jsonfile.writeFile(path, data, () => {
        simpleGit().add('.').commit(date, { '--date': date }).push()
    })
}

markCommit(2, 3);
// const data = { date };

// async function run() {
//   try {
//     await jsonfile.writeFile(path, data, () => {
        
//     });

//     const git = simpleGit();

//     await git.add('.'); // ← this adds ALL changes
//     await git.commit(date, { '--date': date });
//     await git.push();

//     console.log('✅ Everything pushed!');
//   } catch (err) {
//     console.error('❌ Git push failed:', err);
//   }
// }

// run();