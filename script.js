const content = document.getElementById('content');

async function fetchcontent() {
    const res = await.fetch('https://api.github.com/repos/username/repository/contents/path/to/file.md');
    const count = res.json();
}

count.addeventListener('click', async () => {
    if(count > content) {
        console.log('Content already fetched');
        return
    }
}