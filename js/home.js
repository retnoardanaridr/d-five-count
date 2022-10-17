function downlaodFile() {
    fetch(url, { method: 'get', mode: 'no-cors', referrerPolicy: 'no-referrer'})
    .then(res => res.blob())
    .then(res => {
        let aElement = document.createElement('a');
        aElement.setAttribute('download', fileName);
        const href = URL.createObjectURL(res);
        aElement.href = href;

        aElement.setAttribute('target', href);
        aElement.click();
        URL.revokeObjectURL(href);
    });
};
    document.querySelector('button').onclick = function() {
        downlaodFile('http://repository.iainpare.ac.id/1639/1/Belajar%20Dan%20Pembelajaran.pdf', '')
}

