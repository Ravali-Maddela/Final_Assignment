//Hospital simulator

let patient_states = ["F", "H", "D", "T", "X"];
let drugs = ["As", "An", "I", "P"];
let result = { F: 0, H: 0, D: 0, T: 0, X: 0 };

function findRepeat(original) {
  var compressed = {};
  // make a copy of the input array
  var copy = original.slice(0);
  // first loop goes over every element
  for (var i = 0; i < original.length; i++) {
    var myCount = 0;
    // loop over every element in the copy and see if it's the same
    for (var w = 0; w < copy.length; w++) {
      if (original[i] == copy[w]) {
        // increase amount of times duplicate is found
        myCount++;
        // sets item to undefined
        delete copy[w];
      }
    }
    if (myCount > 0) {
      compressed[original[i]] = myCount;
    }
  }
  return compressed;
}

function H_simulator(arg1, arg2) {

  if (
    arg1.includes("F") &&
    !arg2.includes("As") &&
    arg1.includes("F") &&
    arg2.includes("P")
  ) {
    return { ...result, H: result.H + 1 };
  } else if (
    arg1.includes("F") &&
    arg2.includes("As") &&
    arg1.includes("F") &&
    arg2.includes("P")
  ) {
    return { ...result, X: findRepeat(arg1).F };
  } else if (arg1.includes("T") && arg2.includes("An"))
    return { ...result, H: result.H + 1 };
  else if (
    arg1.includes("D") &&
    arg2.includes("I") &&
    arg1.includes("D") &&
    !arg2.includes("An")
  )
    return { ...result, H: result.H + 1 };
  else if (
    arg1.includes("D") &&
    !arg2.includes("I") &&
    arg1.includes("D") &&
    arg2.includes("An")
  )
    return { ...result, H: result.H + 1 };
  else if (arg1.includes("D") && !arg2.includes("I")) {
    // console.log(findRepeat(arg1))
    return { ...result, X: findRepeat(arg1).D };
  } else if (
    arg1.includes("D") &&
    arg2.includes("An") &&
    arg1.includes("D") &&
    arg2.includes("I")
  )
    return { ...result, F: findRepeat(arg1).D };
}

console.log(H_simulator(["D",'D'], []));
console.log(H_simulator(['F'], ['P']));
