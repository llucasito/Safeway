
    // Função de Pesquisa
    const searchBar = document.getElementById('search-bar');
    const tableRows = document.querySelectorAll('#horarios-table tr');
    searchBar.addEventListener('input', function () {
        const query = this.value.toLowerCase();
        tableRows.forEach(row => {
            const text = row.textContent.toLowerCase();
            row.style.display = text.includes(query) ? '' : 'none';
        });
    });

    //parte da aba de pesquisa//

function filtrarTabela() {
  const input = document.getElementById('pesquisa').value.toLowerCase();
  const linhas = document.querySelectorAll('#tabela tr:not(:first-child)');
  linhas.forEach(linha => {
    const nome = linha.cells[0].textContent.toLowerCase();
    linha.style.display = nome.includes(input) ? '' : 'none';
  });
}


/*parte brilhosa */


    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
          behavior: 'smooth'
        });
      });
    });

   
    window.addEventListener("scroll", () => {
      const header = document.getElementById("navbar");
      if (window.scrollY > 50) {
        header.classList.add("scrolled");
      } else {
        header.classList.remove("scrolled");
      }
    });