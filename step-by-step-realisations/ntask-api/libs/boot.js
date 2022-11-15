module.exports = app => {
  const syncObj = app.db.sequelize.sync();

  syncObj
  .then(() => {
    const PORT = app.get('port');
    app.listen(PORT, () => {
      console.log(`NTask API - Port ${PORT}`);
    });
  })

};