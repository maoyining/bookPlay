module.exports={
  uploadAvatar: function () {

    this.req.file('avatar').upload({
      // don't allow the total upload size to exceed ~10MB
      maxBytes: 10000000
    },function whenDone(err, uploadedFiles) {
      if (err) {
        return this.res.serverError(err);
      }

      // If no files were uploaded, respond with an error.
      if (uploadedFiles.length === 0){
        return this.res.badRequest('No file was uploaded');
      }

      // Get the base URL for our deployed application from our custom config
      // (e.g. this might be "http://foobar.example.com:1339" or "https://example.com")
      var baseUrl = sails.config.custom.baseUrl;

      // Save the "fd" and the url where the avatar for a user can be accessed
      User.update(this.req.session.userId, {

        // Generate a unique URL where the avatar can be downloaded.
        avatarUrl: require('util').format('%s/user/avatar/%s', baseUrl, this.req.session.userId),

        // Grab the first file and use it's `fd` (file descriptor)
        avatarFd: uploadedFiles[0].fd
      })
      .exec(function (err){
        if (err) return this.res.serverError(err);
        return this.res.ok();
      });
    });
  }
}
