function hidePromotedPosts() {
  // Select all elements that match the class where "promoted by" might appear
  const posts = document.querySelectorAll('.sc-ygwnwk-6');
  posts.forEach(post => {
    try {
      // Check if the text content includes "promoted by"
      if (post.textContent.includes('promoted by')) {
        // Find the closest parent with the class 'post-item' and hide it
        const postItem = post.closest('.post-item');
        if (postItem) {
          postItem.style.display = 'none';
        }
      }
    } catch (error) {
      console.error("Error hiding promoted post:", error);
    }
  });
}

// Run the function initially
hidePromotedPosts();

// Observe changes to the DOM and hide promoted posts dynamically
const observer = new MutationObserver((mutations) => {
  mutations.forEach(mutation => {
    if (mutation.addedNodes.length) {
      hidePromotedPosts();
    }
  });
});

observer.observe(document.body, { childList: true, subtree: true });
