'use strict';
const secCon = document.querySelector('.sec-con');
const secConUl = document.querySelector('.sec-con>ul');
const secConUlLi = document.querySelectorAll('.sec-con>ul>li');

//방법2
/*
secConUlLi.forEach((el, idx) => {
  el.addEventListener('click', (e) => {
    // console.log(e.target)
    // console.log(e.target.parentElement);
    // console.log(e.currentTarget)

    const eTarget = e.target;
    const eParent = e.target.parentElement;
    console.log(eParent, idx);

  });
});
*/

//방법3: 이벤트 위임
secConUl.addEventListener('click', (e) => {
  // console.log(e.currentTarget)
  // console.log(e.target)
  // console.log(e.target.parentElement); //li

  const eTarget = e.target;
  const liTag = eTarget.parentElement;

  console.log(eTarget, liTag);

  secConUlLi.forEach((el,idx)=>{
    if(liTag===el){
      el.classList.add('on');
    }else{
      el.classList.remove('on');
    }
  });

});
