document.getElementById("search").addEventListener("input", function() {
    let value = this.value.toLowerCase();
    let items = document.querySelectorAll("li");

    items.forEach(li => {
        li.style.display = li.textContent.toLowerCase().includes(value) 
            ? "list-item" 
            : "none";
    });
});