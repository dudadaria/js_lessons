const goldenClass = 'golden';
const stars = document.querySelectorAll('i');
stars.forEach(function (star, index, arr) {
  star.addEventListener('mouseover', function () {
      for (let i=0; i<=index; i++) {
        arr[i].classList.add(goldenClass);
      }
  })
  star.addEventListener('mouseout', function () {
    for (let i=0; i<=index; i++) {
      arr[i].classList.remove(goldenClass);
    }
  })
})
