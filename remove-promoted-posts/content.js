function removePromotedPosts() {
  const posts = document.querySelectorAll('.sc-ygwnwk-6');
  posts.forEach(post => {
    if (post.innerHTML.includes('promoted by')) {
      post.closest('.post-item').remove();
    }
  });
}

// Run the function initially
removePromotedPosts();

// Optionally, observe changes to the DOM and remove promoted posts dynamically
const observer = new MutationObserver(removePromotedPosts);
observer.observe(document.body, { childList: true, subtree: true });
