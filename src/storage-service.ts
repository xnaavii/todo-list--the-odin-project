class StorageService {
  save(key: string, data: string) {
    localStorage.setItem(key, data);
  }

  load(key: string) {
    return localStorage.getItem(key);
  }
}

export default StorageService;
