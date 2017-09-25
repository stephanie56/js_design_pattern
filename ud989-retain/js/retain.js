$(function(){

  /** MODEL **

  **/

    var model = {
        init: function() {
            if (!localStorage.notes) {
                localStorage.notes = JSON.stringify([]);
            }
        },
        add: function(obj) {
            var data = JSON.parse(localStorage.notes);
            data.push(obj);
            localStorage.notes = JSON.stringify(data);
        },
        getAllNotes: function() {
            return JSON.parse(localStorage.notes);
        }
    };

    /** OCTOPUS **

    **/

    var octopus = {
        addNewNote: function(noteStr) {
            model.add({
                content: noteStr
            });
            view.render();
        },

        getNotes: function() {
            return model.getAllNotes();
        },

        init: function() {
            model.init();
            view.init();
        }
    };

    /** VIEW IN JS **

    **/

    var view = {
        init: function() {
            this.noteList = $('#notes');
            var newNoteForm = $('#new-note-form');
            var newNoteContent = $('#new-note-content');
            newNoteForm.submit(function(e){
                octopus.addNewNote(newNoteContent.val());
                newNoteContent.val('');
                e.preventDefault();
            });
            view.render();
        },
        render: function(){
            var htmlStr = '';
            octopus.getNotes().forEach(function(note){
                htmlStr += '<li class="note">'+
                        note.content +
                    '</li>';
            });
            this.noteList.html( htmlStr );
        }
    };

    octopus.init();
});

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
// window onload: run octopus.init()
// => model.init() => if localStorage.note doesn't exist, add localStorage.notes = JSON.stringify([]);
// => view.init()

//
