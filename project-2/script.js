const throttleFunction = (func, delay) => {
 
    // Previously called time of the function
    let prev = 0;
    return (...args) => {
        let now = new Date().getTime();
        // console.log(now - prev, delay);
        if (now - prev > delay) {
            prev = now;
            return func(...args);
        }
    }
}


document.querySelector("#center")
.addEventListener("mousemove", throttleFunction((dets) => {
    // your less repetition code
    var div = document.createElement("div");
    div.classList.add("imagediv");
    div.style.left = dets.clientX+"px";
    div.style.top = dets.clientY+"px";
    let images = ["https://plus.unsplash.com/premium_photo-1669562732451-e37bc19bf6bf?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8OHxFNnRGT2xCWWVfQXx8ZW58MHx8fHx8", "https://images.unsplash.com/photo-1714212494809-555606435baa?q=80&w=1888&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", "https://plus.unsplash.com/premium_photo-1667126445419-4c8870bf9597?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8MTF8RTZ0Rk9sQlllX0F8fGVufDB8fHx8fA%3D%3D", "https://plus.unsplash.com/premium_photo-1706626270683-96ce29b74b6d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8MjB8RTZ0Rk9sQlllX0F8fGVufDB8fHx8fA%3D%3D", "https://images.unsplash.com/photo-1714419991045-4e962ae2b1fb?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDUwfDZzTVZqVExTa2VRfHxlbnwwfHx8fHw%3D", "https://images.unsplash.com/photo-1714285477685-9913dbb6be4c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDEwNnw2c01WalRMU2tlUXx8ZW58MHx8fHx8", "https://plus.unsplash.com/premium_photo-1669689974101-55f9aea22158?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDExOXw2c01WalRMU2tlUXx8ZW58MHx8fHx8", "https://plus.unsplash.com/premium_photo-1669689974101-55f9aea22158?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDExOXw2c01WalRMU2tlUXx8ZW58MHx8fHx8", "https://plus.unsplash.com/premium_photo-1669689974101-55f9aea22158?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDExOXw2c01WalRMU2tlUXx8ZW58MHx8fHx8"]
    var img = document.createElement("img");
    img.setAttribute("src", images[Math.floor(Math.random() * images.length)])
    div.appendChild(img);
    document.body.appendChild(div);

    gsap.to(img, {
        y: 0,
        ease: Power1,
        duration: .6
    });
    gsap.to(img, {
        y: "100%",
        delay: .6,
        ease: Power2
    });

    setTimeout(() => {
        div.remove();
    }, 1000);
}, 400))
