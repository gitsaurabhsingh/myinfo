$(function () {
  $("a[href*=#]:not([href=#])").click(function () {
    if (
      location.pathname.replace(/^\//, "") ==
        this.pathname.replace(/^\//, "") &&
      location.hostname == this.hostname
    ) {
      var target = $(this.hash);
      target = target.length ? target : $("[name=" + this.hash.slice(1) + "]");
      if (target.length) {
        $("html,body").animate(
          {
            scrollTop: target.offset().top,
          },
          1000
        );
        return false;
      }
    }
  });
});

function updateTimer() {
  const future = Date.parse("june 30, 2024 11:30:00");
  const now = new Date();
  const diff = future - now;

  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor(diff / (1000 * 60 * 60));
  const mins = Math.floor(diff / (1000 * 60));
  const secs = Math.floor(diff / 1000);

  const d = days;
  const h = hours - days * 24;
  const m = mins - hours * 60;
  const s = secs - mins * 60;

  document.getElementById("days").innerHTML = d + "<br/><h2>Days</h2> ";
  document.getElementById("hours").innerHTML = h + "<br/><h2>Hours</h2>";
  document.getElementById("minutes").innerHTML = m + "<br/><h2>Minutes</h2>";
  document.getElementById("seconds").innerHTML = s + "<br/><h2>Seconds</h2>";
}
setInterval("updateTimer()", 1000);
