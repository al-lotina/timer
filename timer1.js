const arr = process.argv.slice(2)

for (const elem of arr) {
  if (elem > 0 && elem !== ' ' && elem !== NaN) {
    setTimeout(() => {
      process.stdout.write('\x07');
    }, elem * 1000);
  }
};