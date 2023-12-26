$(document).ready(function () {
  var currentSlide = 0;
  var slides = $(".image-container");
  var dotsContainer = $(".dots-container");

  // Hàm tạo dots
  function createDots() {
    for (var i = 0; i < slides.length; i++) {
      dotsContainer.append('<span class="dot" data-index="' + i + '"></span>');
    }
  }

  // Hàm cập nhật trạng thái dots
  function updateDots() {
    var dots = $(".dot");
    dots.removeClass("active");
    dots.eq(currentSlide).addClass("active");
  }

  function showSlide(index) {
    slides.hide();
    slides.eq(index).show();
  }

  function nextSlide() {
    currentSlide = (currentSlide + 1) % slides.length;
    showSlide(currentSlide);
    updateDots();
  }

  // Hiển thị slide đầu tiên và tạo dots
  showSlide(currentSlide);
  createDots();
  updateDots();

  setInterval(function () {
    nextSlide();
  }, 2000);

  // Xử lý sự kiện click trên dot để chuyển đến slide tương ứng
  $(".dot").click(function () {
    var dotIndex = $(this).data("index");
    showSlide(dotIndex);
    currentSlide = dotIndex;
    updateDots();
  });
});
