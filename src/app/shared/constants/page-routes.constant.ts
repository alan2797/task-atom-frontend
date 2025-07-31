export const PAGE_ROUTE = {
  HOME_ROOT: '',
  HOME: '/',
  AUTH: {
    ROOT: 'auth',
    LOGIN_ROOT: 'login',
    get LOGIN() {
      return `${this.ROOT}/${this.LOGIN_ROOT}`;
    },
  },
  MEETING: {
    //Juntas
    ROOT: 'meeting',
    LIST_ROOT: '',
    CREATE_ROOT: 'create',
    get LIST() {
      return `/${this.ROOT}/${this.LIST_ROOT}`;
    },
    get CREATE() {
      return `/${this.ROOT}/${this.CREATE_ROOT}`;
    },
  },
  TASK: {
    //Juntas
    ROOT: 'task',
    LIST_ROOT: '',
    CREATE_ROOT: 'create',
    EDIT_ROOT: 'edit',
    get LIST() {
      return `/${this.ROOT}/${this.LIST_ROOT}`;
    },
    get CREATE() {
      return `/${this.ROOT}/${this.CREATE_ROOT}`;
    },
    get EDIT() {
      return `/${this.ROOT}/${this.EDIT_ROOT}`;
    },
  },
};
