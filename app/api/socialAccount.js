import Resource from './../utils/resource';
export default new Resource('/socialaccounts', {
  findOne: {
    url: 'findOne',
    method: 'get',
  },
});
