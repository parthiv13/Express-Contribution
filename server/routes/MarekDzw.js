exports.profile = function(req, res) {
  res.send(
    `
    <link rel="stylesheet" type="text/css" href="style.css" />
    <div class="link-to-repo">
     <a target="_blank" href="https://github.com/MarekDzw">Marek Dzwonnik</a>
     <div>
     `
  );
};
