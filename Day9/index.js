$(function () {
  let all_numbers = [];
  let all_selected_numbers = [];

  for (let count = 1; count < 77; count++) {
    $("#table").append(
      `<span style="animation-delay:0.${count}s;" class="animated zoomIn"> ${count} </span>`
    );
    all_numbers.push(count);

    $(".random-number").click(function () {
      $(".extracted-number")(function () {
        let selected_numbers =
          all_selected_numbers[Math.floor(Math.random() * all_numbers.length)];
        $(".extracted-number").text(selected_numbers);
        console.log(selected_numbers);
      });
    });
  }
});
