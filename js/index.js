function text_box() {
    const button = document.querySelector("button");
    const container = document.querySelector(".container");
    const container_top = container.getBoundingClientRect().top;
    const container_bottom = container.getBoundingClientRect().bottom;
    const container_left = container.getBoundingClientRect().left;
    const container_right = container.getBoundingClientRect().right;

    const text_input = document.createElement("input");
    container.append(text_input);

    const drag = (event) => {
        if(event.pageY - text_input.getBoundingClientRect().height / 2 > container_top & event.pageY + text_input.getBoundingClientRect().height / 2 < container_bottom & event.pageX + text_input.getBoundingClientRect().width / 2 < container_right & event.pageX > container_left + text_input.getBoundingClientRect().width / 2) {
            text_input.style.top = event.pageY + "px";
            text_input.style.left = event.pageX + "px";
        }
    };

    text_input.addEventListener(
        "mousedown",
        () => {
            window.addEventListener(
                "mousemove",
                drag
            )
        }
    );

    window.addEventListener(
        "mouseup",
        () => {
            window.removeEventListener(
                "mousemove",
                drag
            )
        }
    );

    // Element positional values
    const container_center_y = container.getBoundingClientRect().top + container.getBoundingClientRect().height / 2 - text_input.getBoundingClientRect().height / 2;
    const container_center_x = container.getBoundingClientRect().left + container.getBoundingClientRect().width / 2 - text_input.getBoundingClientRect().width / 2;
    
    text_input.style.position = "absolute";
    text_input.style.top = container_center_y + "px";
    text_input.style.left = container_center_x + "px";
}
