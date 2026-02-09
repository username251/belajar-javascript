tombol1 = document.getElementById("tombol1");
tombol1.addEventListener("click", function() {
    jawaban = confirm("Apakah Anda yakin?");
    // if (jawaban)
    // {
    //     alert("Anda menekan tombol OK");
    // }
    // else
    // {
    //     tombol1.style.backgroundColor = "red";
    // }
    jawaban ? alert("Anda menekan tombol OK") : (tombol1.style.backgroundColor = "red");
});

input1 = document.getElementById("input1");
input1.addEventListener("change", function() {
    alert("Isi input telah diubah menjadi: " + input1.value);
});

select1 = document.querySelector("#select1");
select1.addEventListener("change", (e) => alert("Pilihan telah diubah menjadi: " + e.target.value))

input2 = document.querySelector(".input2")
input2.addEventListener("keypress", (e) => console.log("Tombol yang ditekan: " + e.key))

window.addEventListener('load', () => {
    hasilJawab = confirm("apakah ingin masuk?")
    hasilJawab ? alert("Selamat datang!") : window.close()
})

tombol2 = document.getElementById("tombol2")
input3 = document.getElementById("input3")
nilaiInput = ""
input3.addEventListener("change", (e) => {
    nilaiInput = e.target.value
})
tombol2.addEventListener("click", () => {
    newElement = document.createElement("p")
    newText = document.createTextNode(nilaiInput)
    newElement.append(newText)
    document.body.append(newElement)
})