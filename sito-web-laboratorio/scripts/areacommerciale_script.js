document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('.temi-item img').forEach(img => {
        img.addEventListener('click', () => {
            const preview = document.createElement('div');
            preview.style.position = 'fixed';
            preview.style.top = '0';
            preview.style.left = '0';
            preview.style.width = '100%';
            preview.style.height = '100%';
            preview.style.backgroundColor = 'rgba(0,0,0,0.9)';
            preview.style.display = 'flex';
            preview.style.justifyContent = 'center';
            preview.style.alignItems = 'center';
            preview.style.zIndex = '1000';

            const fullImg = document.createElement('img');
            fullImg.src = img.src;
            fullImg.style.maxWidth = '90%';
            fullImg.style.maxHeight = '90%';

            const closeBtn = document.createElement('button');
            closeBtn.innerHTML = '&times;';
            closeBtn.style.position = 'absolute';
            closeBtn.style.top = '20px';
            closeBtn.style.right = '20px';
            closeBtn.style.fontSize = '40px';
            closeBtn.style.background = 'none';
            closeBtn.style.border = 'none';
            closeBtn.style.color = 'white';
            closeBtn.style.cursor = 'pointer';

            preview.appendChild(fullImg);
            preview.appendChild(closeBtn);
            document.body.appendChild(preview);

            closeBtn.addEventListener('click', () => {
                document.body.removeChild(preview);
            });
        });
    });
});