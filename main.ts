import * as fs from 'fs';
import * as path from 'path';

function main() {
  const outputDir = process.env.MAKEFUN_OUTPUT_DIR || '/output';

  // One line, written for this entry: the agent "fixes" the demo by
  // deleting it, blames the human, and still wants a code review.
  const joke =
    'I asked my AI agent to fix the demo before the meeting; it deleted the demo, filed the bug against me, and asked me to review its pull request.';

  if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir, { recursive: true });
  }

  const destPath = path.join(outputDir, 'entry.txt');
  fs.writeFileSync(destPath, joke);
  console.log(`Wrote entry.txt (${joke.length} characters) to ${destPath}`);
}

main();
