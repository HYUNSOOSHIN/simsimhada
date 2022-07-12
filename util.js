// file object download function
export const fileDownload = () =>{
    const fileReader = new FileReader();
    fileReader.onloadend = function (e) {
        const arrayBuffer = e.target.result;
        const blob = new Blob([arrayBuffer], { type: file.type });
        const url = window.URL.createObjectURL(blob);
        const link = document.createElement("a");
        link.href = url;
        link.setAttribute("download", file.name);
        link.click();
        link.remove();
        window.URL.revokeObjectURL(url);
    };
    fileReader.readAsArrayBuffer(file);
}