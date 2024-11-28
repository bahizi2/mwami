(function () {
    [...document.querySelectorAll(".control")].forEach(button => {
        button.addEventListener("click", function() {
            document.querySelector(".active-btn").classList.remove("active-btn");
            this.classList.add("active-btn");
            document.querySelector(".active").classList.remove("active");
            document.getElementById(button.dataset.id).classList.add("active");
        })
    });
    document.querySelector(".theme-btn").addEventListener("click", () => {
        document.body.classList.toggle("light-mode");
    })
})();
// import axios from "axios"
// import download from "downloadjs"

// export const downloadCV = async () => {
//     const url = `https://www.googleapis.com/drive/v3/files/${import.meta.env.VITE_DOCUMENT_ID}/export?key=${import.meta.env.VITE_API_KEY}`
//     const response = await axios.get(url, { responseType: 'blob', params: { 'mimeType': 'application/pdf' } })
//     try {
//         download(response.data, 'mwami_1.pdf', 'application/pdf')
//     } catch (error) {
//         console.debug(`Error getting file: ${error}`)
//     }
// }

// export const visitCV = () => {
//     window.location.assign('https://docs.google.com/document/d/e/2PACX-1vQQIoKBCnvROqoJim2UhQBFMtlKCyyIHPxY7fsbXj7xnhRR_l1hmzKMA2bQksqfhDGsrCw6d7ccvtmS/pub')
// }