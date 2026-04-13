import { createMMKV } from 'react-native-mmkv';

const storage = createMMKV();

const reduxStorage = {
  setItem: (key: string, value: any) => {
    try {
      storage.set(key, JSON.stringify(value));
      return Promise.resolve(true);
    } catch (e) {
      return Promise.reject(e);
    }
  },

  getItem: (key: string) => {
    try {
      const value = storage.getString(key);
      return Promise.resolve(value ? JSON.parse(value) : null);
    } catch (e) {
      return Promise.reject(e);
    }
  },

  removeItem: (key: string) => {
    try {
      storage.remove(key); // ✅ correct method
      return Promise.resolve();
    } catch (e) {
      return Promise.reject(e);
    }
  },
};

export default reduxStorage;
