$(function () {
  let all_numbers = [];
  let all_selected_numbers = [];

  for (let count = 1; count < 77; count++) {
    $("#tabella").append(
      `<span style="animation-delay:0.${count}s;" class="animated zoomIn"> ${count} </span>`
    );
    all_numbers.push(count);

    $(".estrai-numero").click(function () {
      $(".extracted-number").fadeOut(1000, function () {
        let selected_numbers =
          all_selected_numbers[Math.floor(Math.random() * all_numbers.length)];
        $(".extracted-number").text(selected_numbers);
        console.log(selected_numbers);
      });
    });
  }
});
