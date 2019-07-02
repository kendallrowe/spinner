const cursor = ["|", "/", "-", "\\", "|", "/", "-", "\\", "|"];

const animation = function(arr) {
  let i = 0; 

  setTimeout(function spin() {
    process.stdout.write("\r" + arr[i] + "  ");
    if (i < (arr.length - 1)) {
      setTimeout(spin, 200);
    } else {
      process.stdout.write("\r" + arr[0] + "\n  ");
    }
    i++;
  }, 200);
};

animation(cursor);