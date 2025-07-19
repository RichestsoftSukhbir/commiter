import jsonfile from 'jsonfile';
import moment from 'moment';
import simpleGit from 'simple-git';

const path = './data.json';
const date = moment().subtract(5, 'd').format();

const data = { date };

async function run() {
  try {
    await jsonfile.writeFile(path, data, { spaces: 2 });

    const git = simpleGit();

    await git.add('.'); // ← this adds ALL changes
    await git.commit(date, { '--date': date });
    await git.push();

    console.log('✅ Everything pushed!');
  } catch (err) {
    console.error('❌ Git push failed:', err);
  }
}

run();