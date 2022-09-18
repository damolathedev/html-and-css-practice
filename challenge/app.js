function Circle(radius) {
  console.log("this", this);
  (this.radius = radius),
    (this.draw = () => {
      console.log("draw");
    });
}

// Circle.apply({}, [1]);

let salam = new Circle(1);

// salam.damola = "amola";
salam["damola"] = "simbi";
// delete salam["damola"];

for (const key in salam) {
  console.log(key, ":", salam[key]);
}

console.log(Object.keys(salam));
