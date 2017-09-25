/** architecture **/
// model: data object
// - lastId (Number) and pizzas (Array)
// view:
// - html layout and the view function
//  view function
//    - view.init() to set up the view
//    - view.render() to update the view
//  HTML Layout
//    - .addPizza btn
//    - .pizzaList ul
//    - pizza template li



/** Logic flow **/
// window onload: run `octopus.init()` => view.init()
// view.init() => 1. add method octopus.addPizza() to addPizzaBtn
//                2. add method octoppus.removePizza(pizza) to $pizzaList
//                3. run this.render() (render the view) ===> view.render() =>
//                4. get list of visible pizzas from octopus.getVisiblePizzas()
//                5. replace template markers with data
//                6. append pizza template to the pizzaList


$(function() {

    var data = {
        lastID: 0,
        pizzas: []
    };


    var octopus = {
        addPizza: function() {
            var thisID = ++data.lastID;

            data.pizzas.push({
                id: thisID,
                visible: true
            });
            view.render();
        },

        removePizza: function(pizza) {
            var clickedPizza = data.pizzas[ pizza.id - 1 ];
            clickedPizza.visible = false;
            view.render();
        },

        getVisiblePizzas: function() {
            var visiblePizzas = data.pizzas.filter(function(pizza) {
                return pizza.visible;
            });
            return visiblePizzas;
        },

        init: function() {
            view.init();
        }
    };


    var view = {
        init: function() {
            var addPizzaBtn = $('.add-pizza');
            addPizzaBtn.click(function() {
                octopus.addPizza();
            });

            // grab elements and html for using in the render function
            this.$pizzaList = $('.pizza-list');
            this.pizzaTemplate = $('script[data-template="pizza"]').html();

            // Delegated event to listen for removal clicks
            this.$pizzaList.on('click', '.remove-pizza', function(e) {
                var pizza = $(this).parents('.pizza').data();
                octopus.removePizza(pizza);
                return false;
            });

            this.render();
        },

        render: function() {
            // Cache vars for use in forEach() callback (performance)
            var $pizzaList = this.$pizzaList,
                pizzaTemplate = this.pizzaTemplate;

            // Clear and render
            $pizzaList.html('');
            octopus.getVisiblePizzas().forEach(function(pizza) {
                // Replace template markers with data
                var thisTemplate = pizzaTemplate.replace(/{{id}}/g, pizza.id);
                $pizzaList.append(thisTemplate);
            });
        }
    };

    octopus.init();
}());
