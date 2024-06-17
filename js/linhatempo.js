
    // Espere ate que o DOM esteja pronto
    document.addEventListener("DOMContentLoaded", function() {
        // Pega todos os itens da timeline li
        var timelineItems = document.querySelectorAll('.timeline li');

        // Função para checar se o elemento está na viewport
        function isInViewport(element) {
            var rect = element.getBoundingClientRect();
            return (
                rect.top >= 0 &&
                rect.left >= 0 &&
                rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
                rect.right <= (window.innerWidth || document.documentElement.clientWidth)
            );
        }

        // Funão para lidar com o evento de scroll
        function handleScroll() {
            timelineItems.forEach(function(item) {
                if (isInViewport(item)) {
                    item.classList.add('show');
                }
            });
        }

        window.addEventListener('scroll', handleScroll);

        // Ativa a função de scroll uma vez que checou que os itens estão disponiveis
        handleScroll();
    });
