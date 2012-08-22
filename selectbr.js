/*
 * SelectBr v0.1 2012-08-22 18:24:32 -0300
 * by Arthur Corenzan <arthur@corenzan.com>
 * licensed under http://creativecommons.org/licenses/by/3.0
 * more on http://haggen.github.com/selectbr
 */
(function($, undefined) {

  var SelectBr;

  SelectBr = function(stateField, jsonPath) {
    this.state = { field: $(stateField) };
    this.city = {};
    this.jsonPath = jsonPath || '/brazil.json';

    this.findCityField();
    this.replaceFieldsBySelect();
    this.buildStateOptions();
    this.bindEvents();
  };

  SelectBr.cache = null;

  SelectBr.prototype = {
    findCityField: function() {
      var id = this.state.field.attr('data-brazil-state');
      this.city.field = $('input[data-brazil-city="' + id + '"]');
    },

    replaceFieldsBySelect: function() {
      var index, attrs = ['class', 'style', 'name', 'id'];

      this.state.select = $('<select></select>');
      this.city.select = $('<select></select>');

      for(index in attrs) {
        if(attrs.hasOwnProperty(index)) {
          this.state.select.attr(attrs[index], this.state.field.attr(attrs[index]));
          this.city.select.attr(attrs[index], this.city.field.attr(attrs[index]));
        }
      }

      this.state.field.after(this.state.select).remove();
      this.city.field.after(this.city.select).remove();
    },

    buildStateOptions: function() {
      var that = this;

      this.getJsonData(function(brazil) {
        that.state.select.html(
          '<option></option>' +
          $.map(brazil['Brasil'], function(m, n) {
            return '<option value="' + n + '">' + n + '</option>';
          }).join('')
        );

        that.state.select.val(that.state.field.val());
        that.state.select.trigger('change');
      });
    },

    bindEvents: function() {
      var that = this;

      this.state.select.on('change', function() {
        var select = this;

        that.getJsonData(function(brazil) {
          that.city.select.html(
            '<option></option>' +
            $.map(brazil['Brasil'][select.value], function(n) {
              return '<option value="' + n + '">' + n + '</option>';
            }).join('')
          );

          that.city.select.val(that.city.field.val());
        });
      });
    },

    getJsonData: function(callback) {
      if(SelectBr.cache !== null) {
        callback(SelectBr.cache);
      } else {
        $.getJSON(this.jsonPath, function(response) {
          SelectBr.cache = response;
          callback(response);
        });
      }
    }
  };

  $.selectbr = function(jsonPath) {
    $('input[data-brazil-state]').each(function() {
      new SelectBr(this, jsonPath);
    });
  };

})(window.jQuery);
