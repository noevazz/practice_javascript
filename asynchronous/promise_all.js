const noe = {
  friendName: "noe",
  free: false,
};
const andrea = {
  friendName: "andrea",
  free: true,
};
const bruce = {
  friendName: "bruce",
  free: true,
};

function checkAvailability(obj) {
  return new Promise((resolve, reject) => {
    if (obj.free) resolve(obj.friendName + " is available");
    else reject(obj.friendName + " is BUSY");
  });
}

/*
If one of the input promise rejects, the Promise.all()
method immediately returns a promise that rejects
with an error of the first rejected promise:
*/
Promise.all([
  checkAvailability(andrea),
  checkAvailability(bruce),
  checkAvailability(noe),
])
  .then((resolvedValue) => {
    console.log(resolvedValue);
  })
  .catch((rejectedValue) => {
    console.log(rejectedValue);
  });
