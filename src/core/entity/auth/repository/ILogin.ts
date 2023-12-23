export default interface ILogin<T> {
  login(body: T): Promise<T>
}
