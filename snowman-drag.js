document.addEventListener("DOMContentLoaded", () => {
  const snowman = document.getElementById("magicSnowman");
  if (!snowman) return;

  let isDragging = false;
  let startX = 0, startY = 0;
  let snowX = 0, snowY = 0;

  const rect = snowman.getBoundingClientRect();
  snowX = rect.left;
  snowY = rect.top;

  snowman.style.left = snowX + "px";
  snowman.style.top = snowY + "px";
  snowman.style.right = "auto";
  snowman.style.bottom = "auto";

  function dragStart(e) {
    e.preventDefault();
    isDragging = true;
    snowman.classList.add("dragging");

    const touch = e.touches ? e.touches[0] : e;
    startX = touch.clientX;
    startY = touch.clientY;
  }

  function dragMove(e) {
    if (!isDragging) return;

    const touch = e.touches ? e.touches[0] : e;
    const dx = touch.clientX - startX;
    const dy = touch.clientY - startY;

    let newX = snowX + dx;
    let newY = snowY + dy;

    newX = Math.max(0, Math.min(newX, window.innerWidth - snowman.offsetWidth));
    newY = Math.max(0, Math.min(newY, window.innerHeight - snowman.offsetHeight));

    snowman.style.left = newX + "px";
    snowman.style.top = newY + "px";
  }

  function dragEnd() {
    if (!isDragging) return;
    isDragging = false;
    snowman.classList.remove("dragging");

    const rect = snowman.getBoundingClientRect();
    snowX = rect.left;
    snowY = rect.top;
  }

  snowman.addEventListener("mousedown", dragStart);
  snowman.addEventListener("touchstart", dragStart, { passive: false });

  document.addEventListener("mousemove", dragMove);
  document.addEventListener("touchmove", dragMove, { passive: false });

  document.addEventListener("mouseup", dragEnd);
  document.addEventListener("touchend", dragEnd);
});

