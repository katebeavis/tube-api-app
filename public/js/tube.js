// $(document).ready(function() {
//   $.ajax({
//     dataType: 'json',
//     url: "http://transportapi.com/v3/uk/tube/lines.json?api_key=8ffc3fa2097e12ebc6d4939d74f746cd&app_id=7d46342d",
//   }).done(function(data) {
//     $.each(data.lines, function(name) {
//       $('.lines').append($('<option></option>').val(name).html(name));
//     });
//   });

//   $('.lines').change(function() {
//     var name = $("select option:selected").val();
//     var url =
//       "http://transportapi.com/v3/uk/tube/lines.json?api_key=8ffc3fa2097e12ebc6d4939d74f746cd&app_id=7d46342d";
//     $.ajax({
//       url: url,
//       dataType: 'json',
//     }).done(function(data) {
//       $.each(data.lines, function(index, name) {
//         $('.status').html(name.status);
//       });
//     });
//   });

//   $('.lines').change(function() {
//     var name = $("select option:selected").val();
//     var url = "http://transportapi.com/v3/uk/tube/" + name +
//       ".json?api_key=8ffc3fa2097e12ebc6d4939d74f746cd&app_id=7d46342d";
//     $.ajax({
//       url: url,
//       dataType: 'json',
//       beforeSend: function() {
//         $('.start').empty();
//       }
//     }).done(function(data) {
//       $.each(data.stations, function(index, title) {
//         $('.start').append($('<option></option>').val(title.name)
//           .html(title.name));
//         console.log(data.stations)
//       });
//     })
//   });

//   $('.lines').change(function() {
//     var name = $("select option:selected").val();
//     var url = "http://transportapi.com/v3/uk/tube/" + name +
//       ".json?api_key=8ffc3fa2097e12ebc6d4939d74f746cd&app_id=7d46342d";
//     $.ajax({
//       url: url,
//       dataType: 'json',
//       beforeSend: function() {
//         $('.destination').empty();
//       }
//     }).done(function(data) {
//       $.each(data.stations, function(index, title) {
//         $('.destination').append($('<option></option>').val(title.name)
//           .html(title.name));
//         console.log(data.stations)
//       });
//     })
//   });
// });