exports.profile = function(req, res) {
  res.send(
    `
    <link rel="stylesheet" type="text/css" href="style.css" />
    <div class="link-to-repo">
    <a target="_blank" href="Your_GitHub_Link">Your_GitHub_Name</a>
    <div>
  `
  );
};
