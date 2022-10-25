const swiper = new Swiper('.swiper', {
    pagination: {
        el: '.swiper-pagination',
        type: 'bullets',
      },
  
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });

const likeButton = document.querySelector(".likeButton");

likeButton.addEventListener("click", () => {
  if (likeButton.classList.contains("liked")) {
    likeButton.classList.remove("liked");
  } else {
    likeButton.classList.add("liked");
  }
});
let createCommentButton = document.getElementById("createNewComment");
createCommentButton.addEventListener("click", addComment);

function addComment() {
    function Information(comment) {
        this.comment = comment;
    }

    let newComment = document.getElementById("createCommentDescription");
    if (newComment && newComment.value){
      addingComment = new Information(newComment.value);
      newData();
      let commentsContainer = document.getElementById("commentsContainer");
      commentsContainer.scrollTop = commentsContainer.scrollHeight ;
      newComment.value = "";
    }
    
}
let newInformation = [];

function newData() {
  newInformation.push(addingComment);
    document.getElementById("commentsContainer").innerHTML +=
    `<div>` +
    `<p style="font-weight: 600">` + "Comment " + `</p>` +
    `<p style="font-weight: 400" >` + addingComment.comment + `</style>` + `</p>` +
    `</div>`;
}
