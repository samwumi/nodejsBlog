// const loadCommentsBtnElement = document.getElementById('load-comments-btn')
// const commentSectionElement = document.getElementById('comments')


// function createCommentlist(comments){
//     const commentListElement = document.createElement('ol')

//     for(const comment of comments){
//         const commentElement = document.createElement('li')
//         commentElement.innerHTML = ` 
//         <article class="comment-item">
//         <h2>${comment.title}</h2>
//         <p>${comment.comment}</p>
//     </article>

//     `;

//         commentListElement.appendChild(commentElement)
//     }

//     return commentListElement
// }

// async function fetchCommentsForPost(){
//     const postId =loadCommentsBtnElement.dataset.postid;
//     const response = await fetch(`/posts/${postId}/comments`)
//     const responseData = await response.json()
//     console.log(responseData)

// //   const commentsListElement = createCommentlist(responseData)
// //   commentSectionElement.innerHTML = '';
// //   commentSectionElement.appendChild(commentsListElement)
// }


// loadCommentsBtnElement.addEventListener('click', fetchCommentsForPost)