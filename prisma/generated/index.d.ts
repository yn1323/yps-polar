
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model ShopUserBelonging
 * 
 */
export type ShopUserBelonging = $Result.DefaultSelection<Prisma.$ShopUserBelongingPayload>
/**
 * Model OrganizationShopBelonging
 * 
 */
export type OrganizationShopBelonging = $Result.DefaultSelection<Prisma.$OrganizationShopBelongingPayload>
/**
 * Model Organization
 * 
 */
export type Organization = $Result.DefaultSelection<Prisma.$OrganizationPayload>
/**
 * Model Shop
 * 
 */
export type Shop = $Result.DefaultSelection<Prisma.$ShopPayload>
/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model Invitation
 * 
 */
export type Invitation = $Result.DefaultSelection<Prisma.$InvitationPayload>
/**
 * Model Operation
 * 
 */
export type Operation = $Result.DefaultSelection<Prisma.$OperationPayload>
/**
 * Model StableShift
 * 
 */
export type StableShift = $Result.DefaultSelection<Prisma.$StableShiftPayload>
/**
 * Model UnstableShift
 * 
 */
export type UnstableShift = $Result.DefaultSelection<Prisma.$UnstableShiftPayload>
/**
 * Model Request
 * 
 */
export type Request = $Result.DefaultSelection<Prisma.$RequestPayload>
/**
 * Model TimeCard
 * 
 */
export type TimeCard = $Result.DefaultSelection<Prisma.$TimeCardPayload>
/**
 * Model TemporaryClosed
 * 
 */
export type TemporaryClosed = $Result.DefaultSelection<Prisma.$TemporaryClosedPayload>
/**
 * Model Announce
 * 
 */
export type Announce = $Result.DefaultSelection<Prisma.$AnnouncePayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more ShopUserBelongings
 * const shopUserBelongings = await prisma.shopUserBelonging.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more ShopUserBelongings
   * const shopUserBelongings = await prisma.shopUserBelonging.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.shopUserBelonging`: Exposes CRUD operations for the **ShopUserBelonging** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ShopUserBelongings
    * const shopUserBelongings = await prisma.shopUserBelonging.findMany()
    * ```
    */
  get shopUserBelonging(): Prisma.ShopUserBelongingDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.organizationShopBelonging`: Exposes CRUD operations for the **OrganizationShopBelonging** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more OrganizationShopBelongings
    * const organizationShopBelongings = await prisma.organizationShopBelonging.findMany()
    * ```
    */
  get organizationShopBelonging(): Prisma.OrganizationShopBelongingDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.organization`: Exposes CRUD operations for the **Organization** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Organizations
    * const organizations = await prisma.organization.findMany()
    * ```
    */
  get organization(): Prisma.OrganizationDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.shop`: Exposes CRUD operations for the **Shop** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Shops
    * const shops = await prisma.shop.findMany()
    * ```
    */
  get shop(): Prisma.ShopDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.invitation`: Exposes CRUD operations for the **Invitation** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Invitations
    * const invitations = await prisma.invitation.findMany()
    * ```
    */
  get invitation(): Prisma.InvitationDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.operation`: Exposes CRUD operations for the **Operation** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Operations
    * const operations = await prisma.operation.findMany()
    * ```
    */
  get operation(): Prisma.OperationDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.stableShift`: Exposes CRUD operations for the **StableShift** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more StableShifts
    * const stableShifts = await prisma.stableShift.findMany()
    * ```
    */
  get stableShift(): Prisma.StableShiftDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.unstableShift`: Exposes CRUD operations for the **UnstableShift** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more UnstableShifts
    * const unstableShifts = await prisma.unstableShift.findMany()
    * ```
    */
  get unstableShift(): Prisma.UnstableShiftDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.request`: Exposes CRUD operations for the **Request** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Requests
    * const requests = await prisma.request.findMany()
    * ```
    */
  get request(): Prisma.RequestDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.timeCard`: Exposes CRUD operations for the **TimeCard** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more TimeCards
    * const timeCards = await prisma.timeCard.findMany()
    * ```
    */
  get timeCard(): Prisma.TimeCardDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.temporaryClosed`: Exposes CRUD operations for the **TemporaryClosed** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more TemporaryCloseds
    * const temporaryCloseds = await prisma.temporaryClosed.findMany()
    * ```
    */
  get temporaryClosed(): Prisma.TemporaryClosedDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.announce`: Exposes CRUD operations for the **Announce** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Announces
    * const announces = await prisma.announce.findMany()
    * ```
    */
  get announce(): Prisma.AnnounceDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.6.0
   * Query Engine version: f676762280b54cd07c770017ed3711ddde35f37a
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    ShopUserBelonging: 'ShopUserBelonging',
    OrganizationShopBelonging: 'OrganizationShopBelonging',
    Organization: 'Organization',
    Shop: 'Shop',
    User: 'User',
    Invitation: 'Invitation',
    Operation: 'Operation',
    StableShift: 'StableShift',
    UnstableShift: 'UnstableShift',
    Request: 'Request',
    TimeCard: 'TimeCard',
    TemporaryClosed: 'TemporaryClosed',
    Announce: 'Announce'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "shopUserBelonging" | "organizationShopBelonging" | "organization" | "shop" | "user" | "invitation" | "operation" | "stableShift" | "unstableShift" | "request" | "timeCard" | "temporaryClosed" | "announce"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      ShopUserBelonging: {
        payload: Prisma.$ShopUserBelongingPayload<ExtArgs>
        fields: Prisma.ShopUserBelongingFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ShopUserBelongingFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShopUserBelongingPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ShopUserBelongingFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShopUserBelongingPayload>
          }
          findFirst: {
            args: Prisma.ShopUserBelongingFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShopUserBelongingPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ShopUserBelongingFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShopUserBelongingPayload>
          }
          findMany: {
            args: Prisma.ShopUserBelongingFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShopUserBelongingPayload>[]
          }
          create: {
            args: Prisma.ShopUserBelongingCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShopUserBelongingPayload>
          }
          createMany: {
            args: Prisma.ShopUserBelongingCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ShopUserBelongingCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShopUserBelongingPayload>[]
          }
          delete: {
            args: Prisma.ShopUserBelongingDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShopUserBelongingPayload>
          }
          update: {
            args: Prisma.ShopUserBelongingUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShopUserBelongingPayload>
          }
          deleteMany: {
            args: Prisma.ShopUserBelongingDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ShopUserBelongingUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ShopUserBelongingUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShopUserBelongingPayload>[]
          }
          upsert: {
            args: Prisma.ShopUserBelongingUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShopUserBelongingPayload>
          }
          aggregate: {
            args: Prisma.ShopUserBelongingAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateShopUserBelonging>
          }
          groupBy: {
            args: Prisma.ShopUserBelongingGroupByArgs<ExtArgs>
            result: $Utils.Optional<ShopUserBelongingGroupByOutputType>[]
          }
          count: {
            args: Prisma.ShopUserBelongingCountArgs<ExtArgs>
            result: $Utils.Optional<ShopUserBelongingCountAggregateOutputType> | number
          }
        }
      }
      OrganizationShopBelonging: {
        payload: Prisma.$OrganizationShopBelongingPayload<ExtArgs>
        fields: Prisma.OrganizationShopBelongingFieldRefs
        operations: {
          findUnique: {
            args: Prisma.OrganizationShopBelongingFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrganizationShopBelongingPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.OrganizationShopBelongingFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrganizationShopBelongingPayload>
          }
          findFirst: {
            args: Prisma.OrganizationShopBelongingFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrganizationShopBelongingPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.OrganizationShopBelongingFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrganizationShopBelongingPayload>
          }
          findMany: {
            args: Prisma.OrganizationShopBelongingFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrganizationShopBelongingPayload>[]
          }
          create: {
            args: Prisma.OrganizationShopBelongingCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrganizationShopBelongingPayload>
          }
          createMany: {
            args: Prisma.OrganizationShopBelongingCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.OrganizationShopBelongingCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrganizationShopBelongingPayload>[]
          }
          delete: {
            args: Prisma.OrganizationShopBelongingDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrganizationShopBelongingPayload>
          }
          update: {
            args: Prisma.OrganizationShopBelongingUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrganizationShopBelongingPayload>
          }
          deleteMany: {
            args: Prisma.OrganizationShopBelongingDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.OrganizationShopBelongingUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.OrganizationShopBelongingUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrganizationShopBelongingPayload>[]
          }
          upsert: {
            args: Prisma.OrganizationShopBelongingUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrganizationShopBelongingPayload>
          }
          aggregate: {
            args: Prisma.OrganizationShopBelongingAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateOrganizationShopBelonging>
          }
          groupBy: {
            args: Prisma.OrganizationShopBelongingGroupByArgs<ExtArgs>
            result: $Utils.Optional<OrganizationShopBelongingGroupByOutputType>[]
          }
          count: {
            args: Prisma.OrganizationShopBelongingCountArgs<ExtArgs>
            result: $Utils.Optional<OrganizationShopBelongingCountAggregateOutputType> | number
          }
        }
      }
      Organization: {
        payload: Prisma.$OrganizationPayload<ExtArgs>
        fields: Prisma.OrganizationFieldRefs
        operations: {
          findUnique: {
            args: Prisma.OrganizationFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrganizationPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.OrganizationFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrganizationPayload>
          }
          findFirst: {
            args: Prisma.OrganizationFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrganizationPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.OrganizationFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrganizationPayload>
          }
          findMany: {
            args: Prisma.OrganizationFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrganizationPayload>[]
          }
          create: {
            args: Prisma.OrganizationCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrganizationPayload>
          }
          createMany: {
            args: Prisma.OrganizationCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.OrganizationCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrganizationPayload>[]
          }
          delete: {
            args: Prisma.OrganizationDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrganizationPayload>
          }
          update: {
            args: Prisma.OrganizationUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrganizationPayload>
          }
          deleteMany: {
            args: Prisma.OrganizationDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.OrganizationUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.OrganizationUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrganizationPayload>[]
          }
          upsert: {
            args: Prisma.OrganizationUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrganizationPayload>
          }
          aggregate: {
            args: Prisma.OrganizationAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateOrganization>
          }
          groupBy: {
            args: Prisma.OrganizationGroupByArgs<ExtArgs>
            result: $Utils.Optional<OrganizationGroupByOutputType>[]
          }
          count: {
            args: Prisma.OrganizationCountArgs<ExtArgs>
            result: $Utils.Optional<OrganizationCountAggregateOutputType> | number
          }
        }
      }
      Shop: {
        payload: Prisma.$ShopPayload<ExtArgs>
        fields: Prisma.ShopFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ShopFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShopPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ShopFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShopPayload>
          }
          findFirst: {
            args: Prisma.ShopFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShopPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ShopFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShopPayload>
          }
          findMany: {
            args: Prisma.ShopFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShopPayload>[]
          }
          create: {
            args: Prisma.ShopCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShopPayload>
          }
          createMany: {
            args: Prisma.ShopCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ShopCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShopPayload>[]
          }
          delete: {
            args: Prisma.ShopDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShopPayload>
          }
          update: {
            args: Prisma.ShopUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShopPayload>
          }
          deleteMany: {
            args: Prisma.ShopDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ShopUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ShopUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShopPayload>[]
          }
          upsert: {
            args: Prisma.ShopUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShopPayload>
          }
          aggregate: {
            args: Prisma.ShopAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateShop>
          }
          groupBy: {
            args: Prisma.ShopGroupByArgs<ExtArgs>
            result: $Utils.Optional<ShopGroupByOutputType>[]
          }
          count: {
            args: Prisma.ShopCountArgs<ExtArgs>
            result: $Utils.Optional<ShopCountAggregateOutputType> | number
          }
        }
      }
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      Invitation: {
        payload: Prisma.$InvitationPayload<ExtArgs>
        fields: Prisma.InvitationFieldRefs
        operations: {
          findUnique: {
            args: Prisma.InvitationFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InvitationPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.InvitationFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InvitationPayload>
          }
          findFirst: {
            args: Prisma.InvitationFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InvitationPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.InvitationFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InvitationPayload>
          }
          findMany: {
            args: Prisma.InvitationFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InvitationPayload>[]
          }
          create: {
            args: Prisma.InvitationCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InvitationPayload>
          }
          createMany: {
            args: Prisma.InvitationCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.InvitationCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InvitationPayload>[]
          }
          delete: {
            args: Prisma.InvitationDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InvitationPayload>
          }
          update: {
            args: Prisma.InvitationUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InvitationPayload>
          }
          deleteMany: {
            args: Prisma.InvitationDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.InvitationUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.InvitationUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InvitationPayload>[]
          }
          upsert: {
            args: Prisma.InvitationUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InvitationPayload>
          }
          aggregate: {
            args: Prisma.InvitationAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateInvitation>
          }
          groupBy: {
            args: Prisma.InvitationGroupByArgs<ExtArgs>
            result: $Utils.Optional<InvitationGroupByOutputType>[]
          }
          count: {
            args: Prisma.InvitationCountArgs<ExtArgs>
            result: $Utils.Optional<InvitationCountAggregateOutputType> | number
          }
        }
      }
      Operation: {
        payload: Prisma.$OperationPayload<ExtArgs>
        fields: Prisma.OperationFieldRefs
        operations: {
          findUnique: {
            args: Prisma.OperationFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OperationPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.OperationFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OperationPayload>
          }
          findFirst: {
            args: Prisma.OperationFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OperationPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.OperationFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OperationPayload>
          }
          findMany: {
            args: Prisma.OperationFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OperationPayload>[]
          }
          create: {
            args: Prisma.OperationCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OperationPayload>
          }
          createMany: {
            args: Prisma.OperationCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.OperationCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OperationPayload>[]
          }
          delete: {
            args: Prisma.OperationDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OperationPayload>
          }
          update: {
            args: Prisma.OperationUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OperationPayload>
          }
          deleteMany: {
            args: Prisma.OperationDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.OperationUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.OperationUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OperationPayload>[]
          }
          upsert: {
            args: Prisma.OperationUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OperationPayload>
          }
          aggregate: {
            args: Prisma.OperationAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateOperation>
          }
          groupBy: {
            args: Prisma.OperationGroupByArgs<ExtArgs>
            result: $Utils.Optional<OperationGroupByOutputType>[]
          }
          count: {
            args: Prisma.OperationCountArgs<ExtArgs>
            result: $Utils.Optional<OperationCountAggregateOutputType> | number
          }
        }
      }
      StableShift: {
        payload: Prisma.$StableShiftPayload<ExtArgs>
        fields: Prisma.StableShiftFieldRefs
        operations: {
          findUnique: {
            args: Prisma.StableShiftFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StableShiftPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.StableShiftFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StableShiftPayload>
          }
          findFirst: {
            args: Prisma.StableShiftFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StableShiftPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.StableShiftFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StableShiftPayload>
          }
          findMany: {
            args: Prisma.StableShiftFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StableShiftPayload>[]
          }
          create: {
            args: Prisma.StableShiftCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StableShiftPayload>
          }
          createMany: {
            args: Prisma.StableShiftCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.StableShiftCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StableShiftPayload>[]
          }
          delete: {
            args: Prisma.StableShiftDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StableShiftPayload>
          }
          update: {
            args: Prisma.StableShiftUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StableShiftPayload>
          }
          deleteMany: {
            args: Prisma.StableShiftDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.StableShiftUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.StableShiftUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StableShiftPayload>[]
          }
          upsert: {
            args: Prisma.StableShiftUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StableShiftPayload>
          }
          aggregate: {
            args: Prisma.StableShiftAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateStableShift>
          }
          groupBy: {
            args: Prisma.StableShiftGroupByArgs<ExtArgs>
            result: $Utils.Optional<StableShiftGroupByOutputType>[]
          }
          count: {
            args: Prisma.StableShiftCountArgs<ExtArgs>
            result: $Utils.Optional<StableShiftCountAggregateOutputType> | number
          }
        }
      }
      UnstableShift: {
        payload: Prisma.$UnstableShiftPayload<ExtArgs>
        fields: Prisma.UnstableShiftFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UnstableShiftFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UnstableShiftPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UnstableShiftFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UnstableShiftPayload>
          }
          findFirst: {
            args: Prisma.UnstableShiftFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UnstableShiftPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UnstableShiftFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UnstableShiftPayload>
          }
          findMany: {
            args: Prisma.UnstableShiftFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UnstableShiftPayload>[]
          }
          create: {
            args: Prisma.UnstableShiftCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UnstableShiftPayload>
          }
          createMany: {
            args: Prisma.UnstableShiftCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UnstableShiftCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UnstableShiftPayload>[]
          }
          delete: {
            args: Prisma.UnstableShiftDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UnstableShiftPayload>
          }
          update: {
            args: Prisma.UnstableShiftUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UnstableShiftPayload>
          }
          deleteMany: {
            args: Prisma.UnstableShiftDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UnstableShiftUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UnstableShiftUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UnstableShiftPayload>[]
          }
          upsert: {
            args: Prisma.UnstableShiftUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UnstableShiftPayload>
          }
          aggregate: {
            args: Prisma.UnstableShiftAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUnstableShift>
          }
          groupBy: {
            args: Prisma.UnstableShiftGroupByArgs<ExtArgs>
            result: $Utils.Optional<UnstableShiftGroupByOutputType>[]
          }
          count: {
            args: Prisma.UnstableShiftCountArgs<ExtArgs>
            result: $Utils.Optional<UnstableShiftCountAggregateOutputType> | number
          }
        }
      }
      Request: {
        payload: Prisma.$RequestPayload<ExtArgs>
        fields: Prisma.RequestFieldRefs
        operations: {
          findUnique: {
            args: Prisma.RequestFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RequestPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.RequestFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RequestPayload>
          }
          findFirst: {
            args: Prisma.RequestFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RequestPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.RequestFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RequestPayload>
          }
          findMany: {
            args: Prisma.RequestFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RequestPayload>[]
          }
          create: {
            args: Prisma.RequestCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RequestPayload>
          }
          createMany: {
            args: Prisma.RequestCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.RequestCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RequestPayload>[]
          }
          delete: {
            args: Prisma.RequestDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RequestPayload>
          }
          update: {
            args: Prisma.RequestUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RequestPayload>
          }
          deleteMany: {
            args: Prisma.RequestDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.RequestUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.RequestUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RequestPayload>[]
          }
          upsert: {
            args: Prisma.RequestUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RequestPayload>
          }
          aggregate: {
            args: Prisma.RequestAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateRequest>
          }
          groupBy: {
            args: Prisma.RequestGroupByArgs<ExtArgs>
            result: $Utils.Optional<RequestGroupByOutputType>[]
          }
          count: {
            args: Prisma.RequestCountArgs<ExtArgs>
            result: $Utils.Optional<RequestCountAggregateOutputType> | number
          }
        }
      }
      TimeCard: {
        payload: Prisma.$TimeCardPayload<ExtArgs>
        fields: Prisma.TimeCardFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TimeCardFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TimeCardPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TimeCardFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TimeCardPayload>
          }
          findFirst: {
            args: Prisma.TimeCardFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TimeCardPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TimeCardFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TimeCardPayload>
          }
          findMany: {
            args: Prisma.TimeCardFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TimeCardPayload>[]
          }
          create: {
            args: Prisma.TimeCardCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TimeCardPayload>
          }
          createMany: {
            args: Prisma.TimeCardCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.TimeCardCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TimeCardPayload>[]
          }
          delete: {
            args: Prisma.TimeCardDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TimeCardPayload>
          }
          update: {
            args: Prisma.TimeCardUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TimeCardPayload>
          }
          deleteMany: {
            args: Prisma.TimeCardDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TimeCardUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.TimeCardUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TimeCardPayload>[]
          }
          upsert: {
            args: Prisma.TimeCardUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TimeCardPayload>
          }
          aggregate: {
            args: Prisma.TimeCardAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTimeCard>
          }
          groupBy: {
            args: Prisma.TimeCardGroupByArgs<ExtArgs>
            result: $Utils.Optional<TimeCardGroupByOutputType>[]
          }
          count: {
            args: Prisma.TimeCardCountArgs<ExtArgs>
            result: $Utils.Optional<TimeCardCountAggregateOutputType> | number
          }
        }
      }
      TemporaryClosed: {
        payload: Prisma.$TemporaryClosedPayload<ExtArgs>
        fields: Prisma.TemporaryClosedFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TemporaryClosedFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TemporaryClosedPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TemporaryClosedFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TemporaryClosedPayload>
          }
          findFirst: {
            args: Prisma.TemporaryClosedFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TemporaryClosedPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TemporaryClosedFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TemporaryClosedPayload>
          }
          findMany: {
            args: Prisma.TemporaryClosedFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TemporaryClosedPayload>[]
          }
          create: {
            args: Prisma.TemporaryClosedCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TemporaryClosedPayload>
          }
          createMany: {
            args: Prisma.TemporaryClosedCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.TemporaryClosedCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TemporaryClosedPayload>[]
          }
          delete: {
            args: Prisma.TemporaryClosedDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TemporaryClosedPayload>
          }
          update: {
            args: Prisma.TemporaryClosedUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TemporaryClosedPayload>
          }
          deleteMany: {
            args: Prisma.TemporaryClosedDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TemporaryClosedUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.TemporaryClosedUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TemporaryClosedPayload>[]
          }
          upsert: {
            args: Prisma.TemporaryClosedUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TemporaryClosedPayload>
          }
          aggregate: {
            args: Prisma.TemporaryClosedAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTemporaryClosed>
          }
          groupBy: {
            args: Prisma.TemporaryClosedGroupByArgs<ExtArgs>
            result: $Utils.Optional<TemporaryClosedGroupByOutputType>[]
          }
          count: {
            args: Prisma.TemporaryClosedCountArgs<ExtArgs>
            result: $Utils.Optional<TemporaryClosedCountAggregateOutputType> | number
          }
        }
      }
      Announce: {
        payload: Prisma.$AnnouncePayload<ExtArgs>
        fields: Prisma.AnnounceFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AnnounceFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnnouncePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AnnounceFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnnouncePayload>
          }
          findFirst: {
            args: Prisma.AnnounceFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnnouncePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AnnounceFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnnouncePayload>
          }
          findMany: {
            args: Prisma.AnnounceFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnnouncePayload>[]
          }
          create: {
            args: Prisma.AnnounceCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnnouncePayload>
          }
          createMany: {
            args: Prisma.AnnounceCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AnnounceCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnnouncePayload>[]
          }
          delete: {
            args: Prisma.AnnounceDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnnouncePayload>
          }
          update: {
            args: Prisma.AnnounceUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnnouncePayload>
          }
          deleteMany: {
            args: Prisma.AnnounceDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AnnounceUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.AnnounceUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnnouncePayload>[]
          }
          upsert: {
            args: Prisma.AnnounceUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnnouncePayload>
          }
          aggregate: {
            args: Prisma.AnnounceAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAnnounce>
          }
          groupBy: {
            args: Prisma.AnnounceGroupByArgs<ExtArgs>
            result: $Utils.Optional<AnnounceGroupByOutputType>[]
          }
          count: {
            args: Prisma.AnnounceCountArgs<ExtArgs>
            result: $Utils.Optional<AnnounceCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    shopUserBelonging?: ShopUserBelongingOmit
    organizationShopBelonging?: OrganizationShopBelongingOmit
    organization?: OrganizationOmit
    shop?: ShopOmit
    user?: UserOmit
    invitation?: InvitationOmit
    operation?: OperationOmit
    stableShift?: StableShiftOmit
    unstableShift?: UnstableShiftOmit
    request?: RequestOmit
    timeCard?: TimeCardOmit
    temporaryClosed?: TemporaryClosedOmit
    announce?: AnnounceOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type OrganizationCountOutputType
   */

  export type OrganizationCountOutputType = {
    shop: number
    temporaryClosed: number
    announce: number
  }

  export type OrganizationCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    shop?: boolean | OrganizationCountOutputTypeCountShopArgs
    temporaryClosed?: boolean | OrganizationCountOutputTypeCountTemporaryClosedArgs
    announce?: boolean | OrganizationCountOutputTypeCountAnnounceArgs
  }

  // Custom InputTypes
  /**
   * OrganizationCountOutputType without action
   */
  export type OrganizationCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrganizationCountOutputType
     */
    select?: OrganizationCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * OrganizationCountOutputType without action
   */
  export type OrganizationCountOutputTypeCountShopArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: OrganizationShopBelongingWhereInput
  }

  /**
   * OrganizationCountOutputType without action
   */
  export type OrganizationCountOutputTypeCountTemporaryClosedArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TemporaryClosedWhereInput
  }

  /**
   * OrganizationCountOutputType without action
   */
  export type OrganizationCountOutputTypeCountAnnounceArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AnnounceWhereInput
  }


  /**
   * Count Type ShopCountOutputType
   */

  export type ShopCountOutputType = {
    organization: number
    user: number
    operation: number
    stableShift: number
    unstableShift: number
    request: number
    timeCard: number
    temporaryClosed: number
    announce: number
    Invitation: number
  }

  export type ShopCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    organization?: boolean | ShopCountOutputTypeCountOrganizationArgs
    user?: boolean | ShopCountOutputTypeCountUserArgs
    operation?: boolean | ShopCountOutputTypeCountOperationArgs
    stableShift?: boolean | ShopCountOutputTypeCountStableShiftArgs
    unstableShift?: boolean | ShopCountOutputTypeCountUnstableShiftArgs
    request?: boolean | ShopCountOutputTypeCountRequestArgs
    timeCard?: boolean | ShopCountOutputTypeCountTimeCardArgs
    temporaryClosed?: boolean | ShopCountOutputTypeCountTemporaryClosedArgs
    announce?: boolean | ShopCountOutputTypeCountAnnounceArgs
    Invitation?: boolean | ShopCountOutputTypeCountInvitationArgs
  }

  // Custom InputTypes
  /**
   * ShopCountOutputType without action
   */
  export type ShopCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShopCountOutputType
     */
    select?: ShopCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ShopCountOutputType without action
   */
  export type ShopCountOutputTypeCountOrganizationArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: OrganizationShopBelongingWhereInput
  }

  /**
   * ShopCountOutputType without action
   */
  export type ShopCountOutputTypeCountUserArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ShopUserBelongingWhereInput
  }

  /**
   * ShopCountOutputType without action
   */
  export type ShopCountOutputTypeCountOperationArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: OperationWhereInput
  }

  /**
   * ShopCountOutputType without action
   */
  export type ShopCountOutputTypeCountStableShiftArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: StableShiftWhereInput
  }

  /**
   * ShopCountOutputType without action
   */
  export type ShopCountOutputTypeCountUnstableShiftArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UnstableShiftWhereInput
  }

  /**
   * ShopCountOutputType without action
   */
  export type ShopCountOutputTypeCountRequestArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RequestWhereInput
  }

  /**
   * ShopCountOutputType without action
   */
  export type ShopCountOutputTypeCountTimeCardArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TimeCardWhereInput
  }

  /**
   * ShopCountOutputType without action
   */
  export type ShopCountOutputTypeCountTemporaryClosedArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TemporaryClosedWhereInput
  }

  /**
   * ShopCountOutputType without action
   */
  export type ShopCountOutputTypeCountAnnounceArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AnnounceWhereInput
  }

  /**
   * ShopCountOutputType without action
   */
  export type ShopCountOutputTypeCountInvitationArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: InvitationWhereInput
  }


  /**
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    shop: number
    stableShift: number
    unstableShift: number
    request: number
    timeCard: number
    Invitation: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    shop?: boolean | UserCountOutputTypeCountShopArgs
    stableShift?: boolean | UserCountOutputTypeCountStableShiftArgs
    unstableShift?: boolean | UserCountOutputTypeCountUnstableShiftArgs
    request?: boolean | UserCountOutputTypeCountRequestArgs
    timeCard?: boolean | UserCountOutputTypeCountTimeCardArgs
    Invitation?: boolean | UserCountOutputTypeCountInvitationArgs
  }

  // Custom InputTypes
  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountShopArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ShopUserBelongingWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountStableShiftArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: StableShiftWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountUnstableShiftArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UnstableShiftWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountRequestArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RequestWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountTimeCardArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TimeCardWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountInvitationArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: InvitationWhereInput
  }


  /**
   * Models
   */

  /**
   * Model ShopUserBelonging
   */

  export type AggregateShopUserBelonging = {
    _count: ShopUserBelongingCountAggregateOutputType | null
    _min: ShopUserBelongingMinAggregateOutputType | null
    _max: ShopUserBelongingMaxAggregateOutputType | null
  }

  export type ShopUserBelongingMinAggregateOutputType = {
    id: string | null
    shopId: string | null
    userId: string | null
    isDeleted: boolean | null
    createdAt: Date | null
  }

  export type ShopUserBelongingMaxAggregateOutputType = {
    id: string | null
    shopId: string | null
    userId: string | null
    isDeleted: boolean | null
    createdAt: Date | null
  }

  export type ShopUserBelongingCountAggregateOutputType = {
    id: number
    shopId: number
    userId: number
    isDeleted: number
    createdAt: number
    _all: number
  }


  export type ShopUserBelongingMinAggregateInputType = {
    id?: true
    shopId?: true
    userId?: true
    isDeleted?: true
    createdAt?: true
  }

  export type ShopUserBelongingMaxAggregateInputType = {
    id?: true
    shopId?: true
    userId?: true
    isDeleted?: true
    createdAt?: true
  }

  export type ShopUserBelongingCountAggregateInputType = {
    id?: true
    shopId?: true
    userId?: true
    isDeleted?: true
    createdAt?: true
    _all?: true
  }

  export type ShopUserBelongingAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ShopUserBelonging to aggregate.
     */
    where?: ShopUserBelongingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ShopUserBelongings to fetch.
     */
    orderBy?: ShopUserBelongingOrderByWithRelationInput | ShopUserBelongingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ShopUserBelongingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ShopUserBelongings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ShopUserBelongings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ShopUserBelongings
    **/
    _count?: true | ShopUserBelongingCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ShopUserBelongingMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ShopUserBelongingMaxAggregateInputType
  }

  export type GetShopUserBelongingAggregateType<T extends ShopUserBelongingAggregateArgs> = {
        [P in keyof T & keyof AggregateShopUserBelonging]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateShopUserBelonging[P]>
      : GetScalarType<T[P], AggregateShopUserBelonging[P]>
  }




  export type ShopUserBelongingGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ShopUserBelongingWhereInput
    orderBy?: ShopUserBelongingOrderByWithAggregationInput | ShopUserBelongingOrderByWithAggregationInput[]
    by: ShopUserBelongingScalarFieldEnum[] | ShopUserBelongingScalarFieldEnum
    having?: ShopUserBelongingScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ShopUserBelongingCountAggregateInputType | true
    _min?: ShopUserBelongingMinAggregateInputType
    _max?: ShopUserBelongingMaxAggregateInputType
  }

  export type ShopUserBelongingGroupByOutputType = {
    id: string
    shopId: string
    userId: string
    isDeleted: boolean
    createdAt: Date
    _count: ShopUserBelongingCountAggregateOutputType | null
    _min: ShopUserBelongingMinAggregateOutputType | null
    _max: ShopUserBelongingMaxAggregateOutputType | null
  }

  type GetShopUserBelongingGroupByPayload<T extends ShopUserBelongingGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ShopUserBelongingGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ShopUserBelongingGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ShopUserBelongingGroupByOutputType[P]>
            : GetScalarType<T[P], ShopUserBelongingGroupByOutputType[P]>
        }
      >
    >


  export type ShopUserBelongingSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    shopId?: boolean
    userId?: boolean
    isDeleted?: boolean
    createdAt?: boolean
    shop?: boolean | ShopDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["shopUserBelonging"]>

  export type ShopUserBelongingSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    shopId?: boolean
    userId?: boolean
    isDeleted?: boolean
    createdAt?: boolean
    shop?: boolean | ShopDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["shopUserBelonging"]>

  export type ShopUserBelongingSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    shopId?: boolean
    userId?: boolean
    isDeleted?: boolean
    createdAt?: boolean
    shop?: boolean | ShopDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["shopUserBelonging"]>

  export type ShopUserBelongingSelectScalar = {
    id?: boolean
    shopId?: boolean
    userId?: boolean
    isDeleted?: boolean
    createdAt?: boolean
  }

  export type ShopUserBelongingOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "shopId" | "userId" | "isDeleted" | "createdAt", ExtArgs["result"]["shopUserBelonging"]>
  export type ShopUserBelongingInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    shop?: boolean | ShopDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type ShopUserBelongingIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    shop?: boolean | ShopDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type ShopUserBelongingIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    shop?: boolean | ShopDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $ShopUserBelongingPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ShopUserBelonging"
    objects: {
      shop: Prisma.$ShopPayload<ExtArgs>
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      shopId: string
      userId: string
      isDeleted: boolean
      createdAt: Date
    }, ExtArgs["result"]["shopUserBelonging"]>
    composites: {}
  }

  type ShopUserBelongingGetPayload<S extends boolean | null | undefined | ShopUserBelongingDefaultArgs> = $Result.GetResult<Prisma.$ShopUserBelongingPayload, S>

  type ShopUserBelongingCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ShopUserBelongingFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ShopUserBelongingCountAggregateInputType | true
    }

  export interface ShopUserBelongingDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ShopUserBelonging'], meta: { name: 'ShopUserBelonging' } }
    /**
     * Find zero or one ShopUserBelonging that matches the filter.
     * @param {ShopUserBelongingFindUniqueArgs} args - Arguments to find a ShopUserBelonging
     * @example
     * // Get one ShopUserBelonging
     * const shopUserBelonging = await prisma.shopUserBelonging.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ShopUserBelongingFindUniqueArgs>(args: SelectSubset<T, ShopUserBelongingFindUniqueArgs<ExtArgs>>): Prisma__ShopUserBelongingClient<$Result.GetResult<Prisma.$ShopUserBelongingPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ShopUserBelonging that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ShopUserBelongingFindUniqueOrThrowArgs} args - Arguments to find a ShopUserBelonging
     * @example
     * // Get one ShopUserBelonging
     * const shopUserBelonging = await prisma.shopUserBelonging.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ShopUserBelongingFindUniqueOrThrowArgs>(args: SelectSubset<T, ShopUserBelongingFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ShopUserBelongingClient<$Result.GetResult<Prisma.$ShopUserBelongingPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ShopUserBelonging that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ShopUserBelongingFindFirstArgs} args - Arguments to find a ShopUserBelonging
     * @example
     * // Get one ShopUserBelonging
     * const shopUserBelonging = await prisma.shopUserBelonging.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ShopUserBelongingFindFirstArgs>(args?: SelectSubset<T, ShopUserBelongingFindFirstArgs<ExtArgs>>): Prisma__ShopUserBelongingClient<$Result.GetResult<Prisma.$ShopUserBelongingPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ShopUserBelonging that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ShopUserBelongingFindFirstOrThrowArgs} args - Arguments to find a ShopUserBelonging
     * @example
     * // Get one ShopUserBelonging
     * const shopUserBelonging = await prisma.shopUserBelonging.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ShopUserBelongingFindFirstOrThrowArgs>(args?: SelectSubset<T, ShopUserBelongingFindFirstOrThrowArgs<ExtArgs>>): Prisma__ShopUserBelongingClient<$Result.GetResult<Prisma.$ShopUserBelongingPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ShopUserBelongings that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ShopUserBelongingFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ShopUserBelongings
     * const shopUserBelongings = await prisma.shopUserBelonging.findMany()
     * 
     * // Get first 10 ShopUserBelongings
     * const shopUserBelongings = await prisma.shopUserBelonging.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const shopUserBelongingWithIdOnly = await prisma.shopUserBelonging.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ShopUserBelongingFindManyArgs>(args?: SelectSubset<T, ShopUserBelongingFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ShopUserBelongingPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ShopUserBelonging.
     * @param {ShopUserBelongingCreateArgs} args - Arguments to create a ShopUserBelonging.
     * @example
     * // Create one ShopUserBelonging
     * const ShopUserBelonging = await prisma.shopUserBelonging.create({
     *   data: {
     *     // ... data to create a ShopUserBelonging
     *   }
     * })
     * 
     */
    create<T extends ShopUserBelongingCreateArgs>(args: SelectSubset<T, ShopUserBelongingCreateArgs<ExtArgs>>): Prisma__ShopUserBelongingClient<$Result.GetResult<Prisma.$ShopUserBelongingPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ShopUserBelongings.
     * @param {ShopUserBelongingCreateManyArgs} args - Arguments to create many ShopUserBelongings.
     * @example
     * // Create many ShopUserBelongings
     * const shopUserBelonging = await prisma.shopUserBelonging.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ShopUserBelongingCreateManyArgs>(args?: SelectSubset<T, ShopUserBelongingCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ShopUserBelongings and returns the data saved in the database.
     * @param {ShopUserBelongingCreateManyAndReturnArgs} args - Arguments to create many ShopUserBelongings.
     * @example
     * // Create many ShopUserBelongings
     * const shopUserBelonging = await prisma.shopUserBelonging.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ShopUserBelongings and only return the `id`
     * const shopUserBelongingWithIdOnly = await prisma.shopUserBelonging.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ShopUserBelongingCreateManyAndReturnArgs>(args?: SelectSubset<T, ShopUserBelongingCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ShopUserBelongingPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a ShopUserBelonging.
     * @param {ShopUserBelongingDeleteArgs} args - Arguments to delete one ShopUserBelonging.
     * @example
     * // Delete one ShopUserBelonging
     * const ShopUserBelonging = await prisma.shopUserBelonging.delete({
     *   where: {
     *     // ... filter to delete one ShopUserBelonging
     *   }
     * })
     * 
     */
    delete<T extends ShopUserBelongingDeleteArgs>(args: SelectSubset<T, ShopUserBelongingDeleteArgs<ExtArgs>>): Prisma__ShopUserBelongingClient<$Result.GetResult<Prisma.$ShopUserBelongingPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ShopUserBelonging.
     * @param {ShopUserBelongingUpdateArgs} args - Arguments to update one ShopUserBelonging.
     * @example
     * // Update one ShopUserBelonging
     * const shopUserBelonging = await prisma.shopUserBelonging.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ShopUserBelongingUpdateArgs>(args: SelectSubset<T, ShopUserBelongingUpdateArgs<ExtArgs>>): Prisma__ShopUserBelongingClient<$Result.GetResult<Prisma.$ShopUserBelongingPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ShopUserBelongings.
     * @param {ShopUserBelongingDeleteManyArgs} args - Arguments to filter ShopUserBelongings to delete.
     * @example
     * // Delete a few ShopUserBelongings
     * const { count } = await prisma.shopUserBelonging.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ShopUserBelongingDeleteManyArgs>(args?: SelectSubset<T, ShopUserBelongingDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ShopUserBelongings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ShopUserBelongingUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ShopUserBelongings
     * const shopUserBelonging = await prisma.shopUserBelonging.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ShopUserBelongingUpdateManyArgs>(args: SelectSubset<T, ShopUserBelongingUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ShopUserBelongings and returns the data updated in the database.
     * @param {ShopUserBelongingUpdateManyAndReturnArgs} args - Arguments to update many ShopUserBelongings.
     * @example
     * // Update many ShopUserBelongings
     * const shopUserBelonging = await prisma.shopUserBelonging.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more ShopUserBelongings and only return the `id`
     * const shopUserBelongingWithIdOnly = await prisma.shopUserBelonging.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ShopUserBelongingUpdateManyAndReturnArgs>(args: SelectSubset<T, ShopUserBelongingUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ShopUserBelongingPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one ShopUserBelonging.
     * @param {ShopUserBelongingUpsertArgs} args - Arguments to update or create a ShopUserBelonging.
     * @example
     * // Update or create a ShopUserBelonging
     * const shopUserBelonging = await prisma.shopUserBelonging.upsert({
     *   create: {
     *     // ... data to create a ShopUserBelonging
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ShopUserBelonging we want to update
     *   }
     * })
     */
    upsert<T extends ShopUserBelongingUpsertArgs>(args: SelectSubset<T, ShopUserBelongingUpsertArgs<ExtArgs>>): Prisma__ShopUserBelongingClient<$Result.GetResult<Prisma.$ShopUserBelongingPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ShopUserBelongings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ShopUserBelongingCountArgs} args - Arguments to filter ShopUserBelongings to count.
     * @example
     * // Count the number of ShopUserBelongings
     * const count = await prisma.shopUserBelonging.count({
     *   where: {
     *     // ... the filter for the ShopUserBelongings we want to count
     *   }
     * })
    **/
    count<T extends ShopUserBelongingCountArgs>(
      args?: Subset<T, ShopUserBelongingCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ShopUserBelongingCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ShopUserBelonging.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ShopUserBelongingAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ShopUserBelongingAggregateArgs>(args: Subset<T, ShopUserBelongingAggregateArgs>): Prisma.PrismaPromise<GetShopUserBelongingAggregateType<T>>

    /**
     * Group by ShopUserBelonging.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ShopUserBelongingGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ShopUserBelongingGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ShopUserBelongingGroupByArgs['orderBy'] }
        : { orderBy?: ShopUserBelongingGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ShopUserBelongingGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetShopUserBelongingGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ShopUserBelonging model
   */
  readonly fields: ShopUserBelongingFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ShopUserBelonging.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ShopUserBelongingClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    shop<T extends ShopDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ShopDefaultArgs<ExtArgs>>): Prisma__ShopClient<$Result.GetResult<Prisma.$ShopPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the ShopUserBelonging model
   */
  interface ShopUserBelongingFieldRefs {
    readonly id: FieldRef<"ShopUserBelonging", 'String'>
    readonly shopId: FieldRef<"ShopUserBelonging", 'String'>
    readonly userId: FieldRef<"ShopUserBelonging", 'String'>
    readonly isDeleted: FieldRef<"ShopUserBelonging", 'Boolean'>
    readonly createdAt: FieldRef<"ShopUserBelonging", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * ShopUserBelonging findUnique
   */
  export type ShopUserBelongingFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShopUserBelonging
     */
    select?: ShopUserBelongingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ShopUserBelonging
     */
    omit?: ShopUserBelongingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShopUserBelongingInclude<ExtArgs> | null
    /**
     * Filter, which ShopUserBelonging to fetch.
     */
    where: ShopUserBelongingWhereUniqueInput
  }

  /**
   * ShopUserBelonging findUniqueOrThrow
   */
  export type ShopUserBelongingFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShopUserBelonging
     */
    select?: ShopUserBelongingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ShopUserBelonging
     */
    omit?: ShopUserBelongingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShopUserBelongingInclude<ExtArgs> | null
    /**
     * Filter, which ShopUserBelonging to fetch.
     */
    where: ShopUserBelongingWhereUniqueInput
  }

  /**
   * ShopUserBelonging findFirst
   */
  export type ShopUserBelongingFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShopUserBelonging
     */
    select?: ShopUserBelongingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ShopUserBelonging
     */
    omit?: ShopUserBelongingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShopUserBelongingInclude<ExtArgs> | null
    /**
     * Filter, which ShopUserBelonging to fetch.
     */
    where?: ShopUserBelongingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ShopUserBelongings to fetch.
     */
    orderBy?: ShopUserBelongingOrderByWithRelationInput | ShopUserBelongingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ShopUserBelongings.
     */
    cursor?: ShopUserBelongingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ShopUserBelongings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ShopUserBelongings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ShopUserBelongings.
     */
    distinct?: ShopUserBelongingScalarFieldEnum | ShopUserBelongingScalarFieldEnum[]
  }

  /**
   * ShopUserBelonging findFirstOrThrow
   */
  export type ShopUserBelongingFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShopUserBelonging
     */
    select?: ShopUserBelongingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ShopUserBelonging
     */
    omit?: ShopUserBelongingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShopUserBelongingInclude<ExtArgs> | null
    /**
     * Filter, which ShopUserBelonging to fetch.
     */
    where?: ShopUserBelongingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ShopUserBelongings to fetch.
     */
    orderBy?: ShopUserBelongingOrderByWithRelationInput | ShopUserBelongingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ShopUserBelongings.
     */
    cursor?: ShopUserBelongingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ShopUserBelongings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ShopUserBelongings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ShopUserBelongings.
     */
    distinct?: ShopUserBelongingScalarFieldEnum | ShopUserBelongingScalarFieldEnum[]
  }

  /**
   * ShopUserBelonging findMany
   */
  export type ShopUserBelongingFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShopUserBelonging
     */
    select?: ShopUserBelongingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ShopUserBelonging
     */
    omit?: ShopUserBelongingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShopUserBelongingInclude<ExtArgs> | null
    /**
     * Filter, which ShopUserBelongings to fetch.
     */
    where?: ShopUserBelongingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ShopUserBelongings to fetch.
     */
    orderBy?: ShopUserBelongingOrderByWithRelationInput | ShopUserBelongingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ShopUserBelongings.
     */
    cursor?: ShopUserBelongingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ShopUserBelongings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ShopUserBelongings.
     */
    skip?: number
    distinct?: ShopUserBelongingScalarFieldEnum | ShopUserBelongingScalarFieldEnum[]
  }

  /**
   * ShopUserBelonging create
   */
  export type ShopUserBelongingCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShopUserBelonging
     */
    select?: ShopUserBelongingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ShopUserBelonging
     */
    omit?: ShopUserBelongingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShopUserBelongingInclude<ExtArgs> | null
    /**
     * The data needed to create a ShopUserBelonging.
     */
    data: XOR<ShopUserBelongingCreateInput, ShopUserBelongingUncheckedCreateInput>
  }

  /**
   * ShopUserBelonging createMany
   */
  export type ShopUserBelongingCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ShopUserBelongings.
     */
    data: ShopUserBelongingCreateManyInput | ShopUserBelongingCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ShopUserBelonging createManyAndReturn
   */
  export type ShopUserBelongingCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShopUserBelonging
     */
    select?: ShopUserBelongingSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ShopUserBelonging
     */
    omit?: ShopUserBelongingOmit<ExtArgs> | null
    /**
     * The data used to create many ShopUserBelongings.
     */
    data: ShopUserBelongingCreateManyInput | ShopUserBelongingCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShopUserBelongingIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * ShopUserBelonging update
   */
  export type ShopUserBelongingUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShopUserBelonging
     */
    select?: ShopUserBelongingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ShopUserBelonging
     */
    omit?: ShopUserBelongingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShopUserBelongingInclude<ExtArgs> | null
    /**
     * The data needed to update a ShopUserBelonging.
     */
    data: XOR<ShopUserBelongingUpdateInput, ShopUserBelongingUncheckedUpdateInput>
    /**
     * Choose, which ShopUserBelonging to update.
     */
    where: ShopUserBelongingWhereUniqueInput
  }

  /**
   * ShopUserBelonging updateMany
   */
  export type ShopUserBelongingUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ShopUserBelongings.
     */
    data: XOR<ShopUserBelongingUpdateManyMutationInput, ShopUserBelongingUncheckedUpdateManyInput>
    /**
     * Filter which ShopUserBelongings to update
     */
    where?: ShopUserBelongingWhereInput
    /**
     * Limit how many ShopUserBelongings to update.
     */
    limit?: number
  }

  /**
   * ShopUserBelonging updateManyAndReturn
   */
  export type ShopUserBelongingUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShopUserBelonging
     */
    select?: ShopUserBelongingSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ShopUserBelonging
     */
    omit?: ShopUserBelongingOmit<ExtArgs> | null
    /**
     * The data used to update ShopUserBelongings.
     */
    data: XOR<ShopUserBelongingUpdateManyMutationInput, ShopUserBelongingUncheckedUpdateManyInput>
    /**
     * Filter which ShopUserBelongings to update
     */
    where?: ShopUserBelongingWhereInput
    /**
     * Limit how many ShopUserBelongings to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShopUserBelongingIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * ShopUserBelonging upsert
   */
  export type ShopUserBelongingUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShopUserBelonging
     */
    select?: ShopUserBelongingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ShopUserBelonging
     */
    omit?: ShopUserBelongingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShopUserBelongingInclude<ExtArgs> | null
    /**
     * The filter to search for the ShopUserBelonging to update in case it exists.
     */
    where: ShopUserBelongingWhereUniqueInput
    /**
     * In case the ShopUserBelonging found by the `where` argument doesn't exist, create a new ShopUserBelonging with this data.
     */
    create: XOR<ShopUserBelongingCreateInput, ShopUserBelongingUncheckedCreateInput>
    /**
     * In case the ShopUserBelonging was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ShopUserBelongingUpdateInput, ShopUserBelongingUncheckedUpdateInput>
  }

  /**
   * ShopUserBelonging delete
   */
  export type ShopUserBelongingDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShopUserBelonging
     */
    select?: ShopUserBelongingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ShopUserBelonging
     */
    omit?: ShopUserBelongingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShopUserBelongingInclude<ExtArgs> | null
    /**
     * Filter which ShopUserBelonging to delete.
     */
    where: ShopUserBelongingWhereUniqueInput
  }

  /**
   * ShopUserBelonging deleteMany
   */
  export type ShopUserBelongingDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ShopUserBelongings to delete
     */
    where?: ShopUserBelongingWhereInput
    /**
     * Limit how many ShopUserBelongings to delete.
     */
    limit?: number
  }

  /**
   * ShopUserBelonging without action
   */
  export type ShopUserBelongingDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShopUserBelonging
     */
    select?: ShopUserBelongingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ShopUserBelonging
     */
    omit?: ShopUserBelongingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShopUserBelongingInclude<ExtArgs> | null
  }


  /**
   * Model OrganizationShopBelonging
   */

  export type AggregateOrganizationShopBelonging = {
    _count: OrganizationShopBelongingCountAggregateOutputType | null
    _min: OrganizationShopBelongingMinAggregateOutputType | null
    _max: OrganizationShopBelongingMaxAggregateOutputType | null
  }

  export type OrganizationShopBelongingMinAggregateOutputType = {
    id: string | null
    organizationId: string | null
    shopId: string | null
    isDeleted: boolean | null
    createdAt: Date | null
  }

  export type OrganizationShopBelongingMaxAggregateOutputType = {
    id: string | null
    organizationId: string | null
    shopId: string | null
    isDeleted: boolean | null
    createdAt: Date | null
  }

  export type OrganizationShopBelongingCountAggregateOutputType = {
    id: number
    organizationId: number
    shopId: number
    isDeleted: number
    createdAt: number
    _all: number
  }


  export type OrganizationShopBelongingMinAggregateInputType = {
    id?: true
    organizationId?: true
    shopId?: true
    isDeleted?: true
    createdAt?: true
  }

  export type OrganizationShopBelongingMaxAggregateInputType = {
    id?: true
    organizationId?: true
    shopId?: true
    isDeleted?: true
    createdAt?: true
  }

  export type OrganizationShopBelongingCountAggregateInputType = {
    id?: true
    organizationId?: true
    shopId?: true
    isDeleted?: true
    createdAt?: true
    _all?: true
  }

  export type OrganizationShopBelongingAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which OrganizationShopBelonging to aggregate.
     */
    where?: OrganizationShopBelongingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of OrganizationShopBelongings to fetch.
     */
    orderBy?: OrganizationShopBelongingOrderByWithRelationInput | OrganizationShopBelongingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: OrganizationShopBelongingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` OrganizationShopBelongings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` OrganizationShopBelongings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned OrganizationShopBelongings
    **/
    _count?: true | OrganizationShopBelongingCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: OrganizationShopBelongingMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: OrganizationShopBelongingMaxAggregateInputType
  }

  export type GetOrganizationShopBelongingAggregateType<T extends OrganizationShopBelongingAggregateArgs> = {
        [P in keyof T & keyof AggregateOrganizationShopBelonging]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateOrganizationShopBelonging[P]>
      : GetScalarType<T[P], AggregateOrganizationShopBelonging[P]>
  }




  export type OrganizationShopBelongingGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: OrganizationShopBelongingWhereInput
    orderBy?: OrganizationShopBelongingOrderByWithAggregationInput | OrganizationShopBelongingOrderByWithAggregationInput[]
    by: OrganizationShopBelongingScalarFieldEnum[] | OrganizationShopBelongingScalarFieldEnum
    having?: OrganizationShopBelongingScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: OrganizationShopBelongingCountAggregateInputType | true
    _min?: OrganizationShopBelongingMinAggregateInputType
    _max?: OrganizationShopBelongingMaxAggregateInputType
  }

  export type OrganizationShopBelongingGroupByOutputType = {
    id: string
    organizationId: string
    shopId: string
    isDeleted: boolean
    createdAt: Date
    _count: OrganizationShopBelongingCountAggregateOutputType | null
    _min: OrganizationShopBelongingMinAggregateOutputType | null
    _max: OrganizationShopBelongingMaxAggregateOutputType | null
  }

  type GetOrganizationShopBelongingGroupByPayload<T extends OrganizationShopBelongingGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<OrganizationShopBelongingGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof OrganizationShopBelongingGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], OrganizationShopBelongingGroupByOutputType[P]>
            : GetScalarType<T[P], OrganizationShopBelongingGroupByOutputType[P]>
        }
      >
    >


  export type OrganizationShopBelongingSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    organizationId?: boolean
    shopId?: boolean
    isDeleted?: boolean
    createdAt?: boolean
    shop?: boolean | ShopDefaultArgs<ExtArgs>
    organization?: boolean | OrganizationDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["organizationShopBelonging"]>

  export type OrganizationShopBelongingSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    organizationId?: boolean
    shopId?: boolean
    isDeleted?: boolean
    createdAt?: boolean
    shop?: boolean | ShopDefaultArgs<ExtArgs>
    organization?: boolean | OrganizationDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["organizationShopBelonging"]>

  export type OrganizationShopBelongingSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    organizationId?: boolean
    shopId?: boolean
    isDeleted?: boolean
    createdAt?: boolean
    shop?: boolean | ShopDefaultArgs<ExtArgs>
    organization?: boolean | OrganizationDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["organizationShopBelonging"]>

  export type OrganizationShopBelongingSelectScalar = {
    id?: boolean
    organizationId?: boolean
    shopId?: boolean
    isDeleted?: boolean
    createdAt?: boolean
  }

  export type OrganizationShopBelongingOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "organizationId" | "shopId" | "isDeleted" | "createdAt", ExtArgs["result"]["organizationShopBelonging"]>
  export type OrganizationShopBelongingInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    shop?: boolean | ShopDefaultArgs<ExtArgs>
    organization?: boolean | OrganizationDefaultArgs<ExtArgs>
  }
  export type OrganizationShopBelongingIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    shop?: boolean | ShopDefaultArgs<ExtArgs>
    organization?: boolean | OrganizationDefaultArgs<ExtArgs>
  }
  export type OrganizationShopBelongingIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    shop?: boolean | ShopDefaultArgs<ExtArgs>
    organization?: boolean | OrganizationDefaultArgs<ExtArgs>
  }

  export type $OrganizationShopBelongingPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "OrganizationShopBelonging"
    objects: {
      shop: Prisma.$ShopPayload<ExtArgs>
      organization: Prisma.$OrganizationPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      organizationId: string
      shopId: string
      isDeleted: boolean
      createdAt: Date
    }, ExtArgs["result"]["organizationShopBelonging"]>
    composites: {}
  }

  type OrganizationShopBelongingGetPayload<S extends boolean | null | undefined | OrganizationShopBelongingDefaultArgs> = $Result.GetResult<Prisma.$OrganizationShopBelongingPayload, S>

  type OrganizationShopBelongingCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<OrganizationShopBelongingFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: OrganizationShopBelongingCountAggregateInputType | true
    }

  export interface OrganizationShopBelongingDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['OrganizationShopBelonging'], meta: { name: 'OrganizationShopBelonging' } }
    /**
     * Find zero or one OrganizationShopBelonging that matches the filter.
     * @param {OrganizationShopBelongingFindUniqueArgs} args - Arguments to find a OrganizationShopBelonging
     * @example
     * // Get one OrganizationShopBelonging
     * const organizationShopBelonging = await prisma.organizationShopBelonging.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends OrganizationShopBelongingFindUniqueArgs>(args: SelectSubset<T, OrganizationShopBelongingFindUniqueArgs<ExtArgs>>): Prisma__OrganizationShopBelongingClient<$Result.GetResult<Prisma.$OrganizationShopBelongingPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one OrganizationShopBelonging that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {OrganizationShopBelongingFindUniqueOrThrowArgs} args - Arguments to find a OrganizationShopBelonging
     * @example
     * // Get one OrganizationShopBelonging
     * const organizationShopBelonging = await prisma.organizationShopBelonging.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends OrganizationShopBelongingFindUniqueOrThrowArgs>(args: SelectSubset<T, OrganizationShopBelongingFindUniqueOrThrowArgs<ExtArgs>>): Prisma__OrganizationShopBelongingClient<$Result.GetResult<Prisma.$OrganizationShopBelongingPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first OrganizationShopBelonging that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrganizationShopBelongingFindFirstArgs} args - Arguments to find a OrganizationShopBelonging
     * @example
     * // Get one OrganizationShopBelonging
     * const organizationShopBelonging = await prisma.organizationShopBelonging.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends OrganizationShopBelongingFindFirstArgs>(args?: SelectSubset<T, OrganizationShopBelongingFindFirstArgs<ExtArgs>>): Prisma__OrganizationShopBelongingClient<$Result.GetResult<Prisma.$OrganizationShopBelongingPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first OrganizationShopBelonging that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrganizationShopBelongingFindFirstOrThrowArgs} args - Arguments to find a OrganizationShopBelonging
     * @example
     * // Get one OrganizationShopBelonging
     * const organizationShopBelonging = await prisma.organizationShopBelonging.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends OrganizationShopBelongingFindFirstOrThrowArgs>(args?: SelectSubset<T, OrganizationShopBelongingFindFirstOrThrowArgs<ExtArgs>>): Prisma__OrganizationShopBelongingClient<$Result.GetResult<Prisma.$OrganizationShopBelongingPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more OrganizationShopBelongings that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrganizationShopBelongingFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all OrganizationShopBelongings
     * const organizationShopBelongings = await prisma.organizationShopBelonging.findMany()
     * 
     * // Get first 10 OrganizationShopBelongings
     * const organizationShopBelongings = await prisma.organizationShopBelonging.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const organizationShopBelongingWithIdOnly = await prisma.organizationShopBelonging.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends OrganizationShopBelongingFindManyArgs>(args?: SelectSubset<T, OrganizationShopBelongingFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OrganizationShopBelongingPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a OrganizationShopBelonging.
     * @param {OrganizationShopBelongingCreateArgs} args - Arguments to create a OrganizationShopBelonging.
     * @example
     * // Create one OrganizationShopBelonging
     * const OrganizationShopBelonging = await prisma.organizationShopBelonging.create({
     *   data: {
     *     // ... data to create a OrganizationShopBelonging
     *   }
     * })
     * 
     */
    create<T extends OrganizationShopBelongingCreateArgs>(args: SelectSubset<T, OrganizationShopBelongingCreateArgs<ExtArgs>>): Prisma__OrganizationShopBelongingClient<$Result.GetResult<Prisma.$OrganizationShopBelongingPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many OrganizationShopBelongings.
     * @param {OrganizationShopBelongingCreateManyArgs} args - Arguments to create many OrganizationShopBelongings.
     * @example
     * // Create many OrganizationShopBelongings
     * const organizationShopBelonging = await prisma.organizationShopBelonging.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends OrganizationShopBelongingCreateManyArgs>(args?: SelectSubset<T, OrganizationShopBelongingCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many OrganizationShopBelongings and returns the data saved in the database.
     * @param {OrganizationShopBelongingCreateManyAndReturnArgs} args - Arguments to create many OrganizationShopBelongings.
     * @example
     * // Create many OrganizationShopBelongings
     * const organizationShopBelonging = await prisma.organizationShopBelonging.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many OrganizationShopBelongings and only return the `id`
     * const organizationShopBelongingWithIdOnly = await prisma.organizationShopBelonging.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends OrganizationShopBelongingCreateManyAndReturnArgs>(args?: SelectSubset<T, OrganizationShopBelongingCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OrganizationShopBelongingPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a OrganizationShopBelonging.
     * @param {OrganizationShopBelongingDeleteArgs} args - Arguments to delete one OrganizationShopBelonging.
     * @example
     * // Delete one OrganizationShopBelonging
     * const OrganizationShopBelonging = await prisma.organizationShopBelonging.delete({
     *   where: {
     *     // ... filter to delete one OrganizationShopBelonging
     *   }
     * })
     * 
     */
    delete<T extends OrganizationShopBelongingDeleteArgs>(args: SelectSubset<T, OrganizationShopBelongingDeleteArgs<ExtArgs>>): Prisma__OrganizationShopBelongingClient<$Result.GetResult<Prisma.$OrganizationShopBelongingPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one OrganizationShopBelonging.
     * @param {OrganizationShopBelongingUpdateArgs} args - Arguments to update one OrganizationShopBelonging.
     * @example
     * // Update one OrganizationShopBelonging
     * const organizationShopBelonging = await prisma.organizationShopBelonging.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends OrganizationShopBelongingUpdateArgs>(args: SelectSubset<T, OrganizationShopBelongingUpdateArgs<ExtArgs>>): Prisma__OrganizationShopBelongingClient<$Result.GetResult<Prisma.$OrganizationShopBelongingPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more OrganizationShopBelongings.
     * @param {OrganizationShopBelongingDeleteManyArgs} args - Arguments to filter OrganizationShopBelongings to delete.
     * @example
     * // Delete a few OrganizationShopBelongings
     * const { count } = await prisma.organizationShopBelonging.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends OrganizationShopBelongingDeleteManyArgs>(args?: SelectSubset<T, OrganizationShopBelongingDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more OrganizationShopBelongings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrganizationShopBelongingUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many OrganizationShopBelongings
     * const organizationShopBelonging = await prisma.organizationShopBelonging.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends OrganizationShopBelongingUpdateManyArgs>(args: SelectSubset<T, OrganizationShopBelongingUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more OrganizationShopBelongings and returns the data updated in the database.
     * @param {OrganizationShopBelongingUpdateManyAndReturnArgs} args - Arguments to update many OrganizationShopBelongings.
     * @example
     * // Update many OrganizationShopBelongings
     * const organizationShopBelonging = await prisma.organizationShopBelonging.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more OrganizationShopBelongings and only return the `id`
     * const organizationShopBelongingWithIdOnly = await prisma.organizationShopBelonging.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends OrganizationShopBelongingUpdateManyAndReturnArgs>(args: SelectSubset<T, OrganizationShopBelongingUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OrganizationShopBelongingPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one OrganizationShopBelonging.
     * @param {OrganizationShopBelongingUpsertArgs} args - Arguments to update or create a OrganizationShopBelonging.
     * @example
     * // Update or create a OrganizationShopBelonging
     * const organizationShopBelonging = await prisma.organizationShopBelonging.upsert({
     *   create: {
     *     // ... data to create a OrganizationShopBelonging
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the OrganizationShopBelonging we want to update
     *   }
     * })
     */
    upsert<T extends OrganizationShopBelongingUpsertArgs>(args: SelectSubset<T, OrganizationShopBelongingUpsertArgs<ExtArgs>>): Prisma__OrganizationShopBelongingClient<$Result.GetResult<Prisma.$OrganizationShopBelongingPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of OrganizationShopBelongings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrganizationShopBelongingCountArgs} args - Arguments to filter OrganizationShopBelongings to count.
     * @example
     * // Count the number of OrganizationShopBelongings
     * const count = await prisma.organizationShopBelonging.count({
     *   where: {
     *     // ... the filter for the OrganizationShopBelongings we want to count
     *   }
     * })
    **/
    count<T extends OrganizationShopBelongingCountArgs>(
      args?: Subset<T, OrganizationShopBelongingCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], OrganizationShopBelongingCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a OrganizationShopBelonging.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrganizationShopBelongingAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends OrganizationShopBelongingAggregateArgs>(args: Subset<T, OrganizationShopBelongingAggregateArgs>): Prisma.PrismaPromise<GetOrganizationShopBelongingAggregateType<T>>

    /**
     * Group by OrganizationShopBelonging.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrganizationShopBelongingGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends OrganizationShopBelongingGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: OrganizationShopBelongingGroupByArgs['orderBy'] }
        : { orderBy?: OrganizationShopBelongingGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, OrganizationShopBelongingGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetOrganizationShopBelongingGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the OrganizationShopBelonging model
   */
  readonly fields: OrganizationShopBelongingFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for OrganizationShopBelonging.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__OrganizationShopBelongingClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    shop<T extends ShopDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ShopDefaultArgs<ExtArgs>>): Prisma__ShopClient<$Result.GetResult<Prisma.$ShopPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    organization<T extends OrganizationDefaultArgs<ExtArgs> = {}>(args?: Subset<T, OrganizationDefaultArgs<ExtArgs>>): Prisma__OrganizationClient<$Result.GetResult<Prisma.$OrganizationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the OrganizationShopBelonging model
   */
  interface OrganizationShopBelongingFieldRefs {
    readonly id: FieldRef<"OrganizationShopBelonging", 'String'>
    readonly organizationId: FieldRef<"OrganizationShopBelonging", 'String'>
    readonly shopId: FieldRef<"OrganizationShopBelonging", 'String'>
    readonly isDeleted: FieldRef<"OrganizationShopBelonging", 'Boolean'>
    readonly createdAt: FieldRef<"OrganizationShopBelonging", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * OrganizationShopBelonging findUnique
   */
  export type OrganizationShopBelongingFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrganizationShopBelonging
     */
    select?: OrganizationShopBelongingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OrganizationShopBelonging
     */
    omit?: OrganizationShopBelongingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrganizationShopBelongingInclude<ExtArgs> | null
    /**
     * Filter, which OrganizationShopBelonging to fetch.
     */
    where: OrganizationShopBelongingWhereUniqueInput
  }

  /**
   * OrganizationShopBelonging findUniqueOrThrow
   */
  export type OrganizationShopBelongingFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrganizationShopBelonging
     */
    select?: OrganizationShopBelongingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OrganizationShopBelonging
     */
    omit?: OrganizationShopBelongingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrganizationShopBelongingInclude<ExtArgs> | null
    /**
     * Filter, which OrganizationShopBelonging to fetch.
     */
    where: OrganizationShopBelongingWhereUniqueInput
  }

  /**
   * OrganizationShopBelonging findFirst
   */
  export type OrganizationShopBelongingFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrganizationShopBelonging
     */
    select?: OrganizationShopBelongingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OrganizationShopBelonging
     */
    omit?: OrganizationShopBelongingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrganizationShopBelongingInclude<ExtArgs> | null
    /**
     * Filter, which OrganizationShopBelonging to fetch.
     */
    where?: OrganizationShopBelongingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of OrganizationShopBelongings to fetch.
     */
    orderBy?: OrganizationShopBelongingOrderByWithRelationInput | OrganizationShopBelongingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for OrganizationShopBelongings.
     */
    cursor?: OrganizationShopBelongingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` OrganizationShopBelongings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` OrganizationShopBelongings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of OrganizationShopBelongings.
     */
    distinct?: OrganizationShopBelongingScalarFieldEnum | OrganizationShopBelongingScalarFieldEnum[]
  }

  /**
   * OrganizationShopBelonging findFirstOrThrow
   */
  export type OrganizationShopBelongingFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrganizationShopBelonging
     */
    select?: OrganizationShopBelongingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OrganizationShopBelonging
     */
    omit?: OrganizationShopBelongingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrganizationShopBelongingInclude<ExtArgs> | null
    /**
     * Filter, which OrganizationShopBelonging to fetch.
     */
    where?: OrganizationShopBelongingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of OrganizationShopBelongings to fetch.
     */
    orderBy?: OrganizationShopBelongingOrderByWithRelationInput | OrganizationShopBelongingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for OrganizationShopBelongings.
     */
    cursor?: OrganizationShopBelongingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` OrganizationShopBelongings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` OrganizationShopBelongings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of OrganizationShopBelongings.
     */
    distinct?: OrganizationShopBelongingScalarFieldEnum | OrganizationShopBelongingScalarFieldEnum[]
  }

  /**
   * OrganizationShopBelonging findMany
   */
  export type OrganizationShopBelongingFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrganizationShopBelonging
     */
    select?: OrganizationShopBelongingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OrganizationShopBelonging
     */
    omit?: OrganizationShopBelongingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrganizationShopBelongingInclude<ExtArgs> | null
    /**
     * Filter, which OrganizationShopBelongings to fetch.
     */
    where?: OrganizationShopBelongingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of OrganizationShopBelongings to fetch.
     */
    orderBy?: OrganizationShopBelongingOrderByWithRelationInput | OrganizationShopBelongingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing OrganizationShopBelongings.
     */
    cursor?: OrganizationShopBelongingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` OrganizationShopBelongings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` OrganizationShopBelongings.
     */
    skip?: number
    distinct?: OrganizationShopBelongingScalarFieldEnum | OrganizationShopBelongingScalarFieldEnum[]
  }

  /**
   * OrganizationShopBelonging create
   */
  export type OrganizationShopBelongingCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrganizationShopBelonging
     */
    select?: OrganizationShopBelongingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OrganizationShopBelonging
     */
    omit?: OrganizationShopBelongingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrganizationShopBelongingInclude<ExtArgs> | null
    /**
     * The data needed to create a OrganizationShopBelonging.
     */
    data: XOR<OrganizationShopBelongingCreateInput, OrganizationShopBelongingUncheckedCreateInput>
  }

  /**
   * OrganizationShopBelonging createMany
   */
  export type OrganizationShopBelongingCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many OrganizationShopBelongings.
     */
    data: OrganizationShopBelongingCreateManyInput | OrganizationShopBelongingCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * OrganizationShopBelonging createManyAndReturn
   */
  export type OrganizationShopBelongingCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrganizationShopBelonging
     */
    select?: OrganizationShopBelongingSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the OrganizationShopBelonging
     */
    omit?: OrganizationShopBelongingOmit<ExtArgs> | null
    /**
     * The data used to create many OrganizationShopBelongings.
     */
    data: OrganizationShopBelongingCreateManyInput | OrganizationShopBelongingCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrganizationShopBelongingIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * OrganizationShopBelonging update
   */
  export type OrganizationShopBelongingUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrganizationShopBelonging
     */
    select?: OrganizationShopBelongingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OrganizationShopBelonging
     */
    omit?: OrganizationShopBelongingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrganizationShopBelongingInclude<ExtArgs> | null
    /**
     * The data needed to update a OrganizationShopBelonging.
     */
    data: XOR<OrganizationShopBelongingUpdateInput, OrganizationShopBelongingUncheckedUpdateInput>
    /**
     * Choose, which OrganizationShopBelonging to update.
     */
    where: OrganizationShopBelongingWhereUniqueInput
  }

  /**
   * OrganizationShopBelonging updateMany
   */
  export type OrganizationShopBelongingUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update OrganizationShopBelongings.
     */
    data: XOR<OrganizationShopBelongingUpdateManyMutationInput, OrganizationShopBelongingUncheckedUpdateManyInput>
    /**
     * Filter which OrganizationShopBelongings to update
     */
    where?: OrganizationShopBelongingWhereInput
    /**
     * Limit how many OrganizationShopBelongings to update.
     */
    limit?: number
  }

  /**
   * OrganizationShopBelonging updateManyAndReturn
   */
  export type OrganizationShopBelongingUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrganizationShopBelonging
     */
    select?: OrganizationShopBelongingSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the OrganizationShopBelonging
     */
    omit?: OrganizationShopBelongingOmit<ExtArgs> | null
    /**
     * The data used to update OrganizationShopBelongings.
     */
    data: XOR<OrganizationShopBelongingUpdateManyMutationInput, OrganizationShopBelongingUncheckedUpdateManyInput>
    /**
     * Filter which OrganizationShopBelongings to update
     */
    where?: OrganizationShopBelongingWhereInput
    /**
     * Limit how many OrganizationShopBelongings to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrganizationShopBelongingIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * OrganizationShopBelonging upsert
   */
  export type OrganizationShopBelongingUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrganizationShopBelonging
     */
    select?: OrganizationShopBelongingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OrganizationShopBelonging
     */
    omit?: OrganizationShopBelongingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrganizationShopBelongingInclude<ExtArgs> | null
    /**
     * The filter to search for the OrganizationShopBelonging to update in case it exists.
     */
    where: OrganizationShopBelongingWhereUniqueInput
    /**
     * In case the OrganizationShopBelonging found by the `where` argument doesn't exist, create a new OrganizationShopBelonging with this data.
     */
    create: XOR<OrganizationShopBelongingCreateInput, OrganizationShopBelongingUncheckedCreateInput>
    /**
     * In case the OrganizationShopBelonging was found with the provided `where` argument, update it with this data.
     */
    update: XOR<OrganizationShopBelongingUpdateInput, OrganizationShopBelongingUncheckedUpdateInput>
  }

  /**
   * OrganizationShopBelonging delete
   */
  export type OrganizationShopBelongingDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrganizationShopBelonging
     */
    select?: OrganizationShopBelongingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OrganizationShopBelonging
     */
    omit?: OrganizationShopBelongingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrganizationShopBelongingInclude<ExtArgs> | null
    /**
     * Filter which OrganizationShopBelonging to delete.
     */
    where: OrganizationShopBelongingWhereUniqueInput
  }

  /**
   * OrganizationShopBelonging deleteMany
   */
  export type OrganizationShopBelongingDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which OrganizationShopBelongings to delete
     */
    where?: OrganizationShopBelongingWhereInput
    /**
     * Limit how many OrganizationShopBelongings to delete.
     */
    limit?: number
  }

  /**
   * OrganizationShopBelonging without action
   */
  export type OrganizationShopBelongingDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrganizationShopBelonging
     */
    select?: OrganizationShopBelongingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OrganizationShopBelonging
     */
    omit?: OrganizationShopBelongingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrganizationShopBelongingInclude<ExtArgs> | null
  }


  /**
   * Model Organization
   */

  export type AggregateOrganization = {
    _count: OrganizationCountAggregateOutputType | null
    _min: OrganizationMinAggregateOutputType | null
    _max: OrganizationMaxAggregateOutputType | null
  }

  export type OrganizationMinAggregateOutputType = {
    id: string | null
    organizationName: string | null
    isDeleted: boolean | null
    createdAt: Date | null
  }

  export type OrganizationMaxAggregateOutputType = {
    id: string | null
    organizationName: string | null
    isDeleted: boolean | null
    createdAt: Date | null
  }

  export type OrganizationCountAggregateOutputType = {
    id: number
    organizationName: number
    isDeleted: number
    createdAt: number
    _all: number
  }


  export type OrganizationMinAggregateInputType = {
    id?: true
    organizationName?: true
    isDeleted?: true
    createdAt?: true
  }

  export type OrganizationMaxAggregateInputType = {
    id?: true
    organizationName?: true
    isDeleted?: true
    createdAt?: true
  }

  export type OrganizationCountAggregateInputType = {
    id?: true
    organizationName?: true
    isDeleted?: true
    createdAt?: true
    _all?: true
  }

  export type OrganizationAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Organization to aggregate.
     */
    where?: OrganizationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Organizations to fetch.
     */
    orderBy?: OrganizationOrderByWithRelationInput | OrganizationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: OrganizationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Organizations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Organizations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Organizations
    **/
    _count?: true | OrganizationCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: OrganizationMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: OrganizationMaxAggregateInputType
  }

  export type GetOrganizationAggregateType<T extends OrganizationAggregateArgs> = {
        [P in keyof T & keyof AggregateOrganization]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateOrganization[P]>
      : GetScalarType<T[P], AggregateOrganization[P]>
  }




  export type OrganizationGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: OrganizationWhereInput
    orderBy?: OrganizationOrderByWithAggregationInput | OrganizationOrderByWithAggregationInput[]
    by: OrganizationScalarFieldEnum[] | OrganizationScalarFieldEnum
    having?: OrganizationScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: OrganizationCountAggregateInputType | true
    _min?: OrganizationMinAggregateInputType
    _max?: OrganizationMaxAggregateInputType
  }

  export type OrganizationGroupByOutputType = {
    id: string
    organizationName: string
    isDeleted: boolean
    createdAt: Date
    _count: OrganizationCountAggregateOutputType | null
    _min: OrganizationMinAggregateOutputType | null
    _max: OrganizationMaxAggregateOutputType | null
  }

  type GetOrganizationGroupByPayload<T extends OrganizationGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<OrganizationGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof OrganizationGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], OrganizationGroupByOutputType[P]>
            : GetScalarType<T[P], OrganizationGroupByOutputType[P]>
        }
      >
    >


  export type OrganizationSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    organizationName?: boolean
    isDeleted?: boolean
    createdAt?: boolean
    shop?: boolean | Organization$shopArgs<ExtArgs>
    temporaryClosed?: boolean | Organization$temporaryClosedArgs<ExtArgs>
    announce?: boolean | Organization$announceArgs<ExtArgs>
    _count?: boolean | OrganizationCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["organization"]>

  export type OrganizationSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    organizationName?: boolean
    isDeleted?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["organization"]>

  export type OrganizationSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    organizationName?: boolean
    isDeleted?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["organization"]>

  export type OrganizationSelectScalar = {
    id?: boolean
    organizationName?: boolean
    isDeleted?: boolean
    createdAt?: boolean
  }

  export type OrganizationOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "organizationName" | "isDeleted" | "createdAt", ExtArgs["result"]["organization"]>
  export type OrganizationInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    shop?: boolean | Organization$shopArgs<ExtArgs>
    temporaryClosed?: boolean | Organization$temporaryClosedArgs<ExtArgs>
    announce?: boolean | Organization$announceArgs<ExtArgs>
    _count?: boolean | OrganizationCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type OrganizationIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type OrganizationIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $OrganizationPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Organization"
    objects: {
      shop: Prisma.$OrganizationShopBelongingPayload<ExtArgs>[]
      temporaryClosed: Prisma.$TemporaryClosedPayload<ExtArgs>[]
      announce: Prisma.$AnnouncePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      organizationName: string
      isDeleted: boolean
      createdAt: Date
    }, ExtArgs["result"]["organization"]>
    composites: {}
  }

  type OrganizationGetPayload<S extends boolean | null | undefined | OrganizationDefaultArgs> = $Result.GetResult<Prisma.$OrganizationPayload, S>

  type OrganizationCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<OrganizationFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: OrganizationCountAggregateInputType | true
    }

  export interface OrganizationDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Organization'], meta: { name: 'Organization' } }
    /**
     * Find zero or one Organization that matches the filter.
     * @param {OrganizationFindUniqueArgs} args - Arguments to find a Organization
     * @example
     * // Get one Organization
     * const organization = await prisma.organization.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends OrganizationFindUniqueArgs>(args: SelectSubset<T, OrganizationFindUniqueArgs<ExtArgs>>): Prisma__OrganizationClient<$Result.GetResult<Prisma.$OrganizationPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Organization that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {OrganizationFindUniqueOrThrowArgs} args - Arguments to find a Organization
     * @example
     * // Get one Organization
     * const organization = await prisma.organization.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends OrganizationFindUniqueOrThrowArgs>(args: SelectSubset<T, OrganizationFindUniqueOrThrowArgs<ExtArgs>>): Prisma__OrganizationClient<$Result.GetResult<Prisma.$OrganizationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Organization that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrganizationFindFirstArgs} args - Arguments to find a Organization
     * @example
     * // Get one Organization
     * const organization = await prisma.organization.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends OrganizationFindFirstArgs>(args?: SelectSubset<T, OrganizationFindFirstArgs<ExtArgs>>): Prisma__OrganizationClient<$Result.GetResult<Prisma.$OrganizationPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Organization that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrganizationFindFirstOrThrowArgs} args - Arguments to find a Organization
     * @example
     * // Get one Organization
     * const organization = await prisma.organization.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends OrganizationFindFirstOrThrowArgs>(args?: SelectSubset<T, OrganizationFindFirstOrThrowArgs<ExtArgs>>): Prisma__OrganizationClient<$Result.GetResult<Prisma.$OrganizationPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Organizations that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrganizationFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Organizations
     * const organizations = await prisma.organization.findMany()
     * 
     * // Get first 10 Organizations
     * const organizations = await prisma.organization.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const organizationWithIdOnly = await prisma.organization.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends OrganizationFindManyArgs>(args?: SelectSubset<T, OrganizationFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OrganizationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Organization.
     * @param {OrganizationCreateArgs} args - Arguments to create a Organization.
     * @example
     * // Create one Organization
     * const Organization = await prisma.organization.create({
     *   data: {
     *     // ... data to create a Organization
     *   }
     * })
     * 
     */
    create<T extends OrganizationCreateArgs>(args: SelectSubset<T, OrganizationCreateArgs<ExtArgs>>): Prisma__OrganizationClient<$Result.GetResult<Prisma.$OrganizationPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Organizations.
     * @param {OrganizationCreateManyArgs} args - Arguments to create many Organizations.
     * @example
     * // Create many Organizations
     * const organization = await prisma.organization.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends OrganizationCreateManyArgs>(args?: SelectSubset<T, OrganizationCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Organizations and returns the data saved in the database.
     * @param {OrganizationCreateManyAndReturnArgs} args - Arguments to create many Organizations.
     * @example
     * // Create many Organizations
     * const organization = await prisma.organization.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Organizations and only return the `id`
     * const organizationWithIdOnly = await prisma.organization.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends OrganizationCreateManyAndReturnArgs>(args?: SelectSubset<T, OrganizationCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OrganizationPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Organization.
     * @param {OrganizationDeleteArgs} args - Arguments to delete one Organization.
     * @example
     * // Delete one Organization
     * const Organization = await prisma.organization.delete({
     *   where: {
     *     // ... filter to delete one Organization
     *   }
     * })
     * 
     */
    delete<T extends OrganizationDeleteArgs>(args: SelectSubset<T, OrganizationDeleteArgs<ExtArgs>>): Prisma__OrganizationClient<$Result.GetResult<Prisma.$OrganizationPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Organization.
     * @param {OrganizationUpdateArgs} args - Arguments to update one Organization.
     * @example
     * // Update one Organization
     * const organization = await prisma.organization.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends OrganizationUpdateArgs>(args: SelectSubset<T, OrganizationUpdateArgs<ExtArgs>>): Prisma__OrganizationClient<$Result.GetResult<Prisma.$OrganizationPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Organizations.
     * @param {OrganizationDeleteManyArgs} args - Arguments to filter Organizations to delete.
     * @example
     * // Delete a few Organizations
     * const { count } = await prisma.organization.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends OrganizationDeleteManyArgs>(args?: SelectSubset<T, OrganizationDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Organizations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrganizationUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Organizations
     * const organization = await prisma.organization.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends OrganizationUpdateManyArgs>(args: SelectSubset<T, OrganizationUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Organizations and returns the data updated in the database.
     * @param {OrganizationUpdateManyAndReturnArgs} args - Arguments to update many Organizations.
     * @example
     * // Update many Organizations
     * const organization = await prisma.organization.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Organizations and only return the `id`
     * const organizationWithIdOnly = await prisma.organization.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends OrganizationUpdateManyAndReturnArgs>(args: SelectSubset<T, OrganizationUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OrganizationPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Organization.
     * @param {OrganizationUpsertArgs} args - Arguments to update or create a Organization.
     * @example
     * // Update or create a Organization
     * const organization = await prisma.organization.upsert({
     *   create: {
     *     // ... data to create a Organization
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Organization we want to update
     *   }
     * })
     */
    upsert<T extends OrganizationUpsertArgs>(args: SelectSubset<T, OrganizationUpsertArgs<ExtArgs>>): Prisma__OrganizationClient<$Result.GetResult<Prisma.$OrganizationPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Organizations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrganizationCountArgs} args - Arguments to filter Organizations to count.
     * @example
     * // Count the number of Organizations
     * const count = await prisma.organization.count({
     *   where: {
     *     // ... the filter for the Organizations we want to count
     *   }
     * })
    **/
    count<T extends OrganizationCountArgs>(
      args?: Subset<T, OrganizationCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], OrganizationCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Organization.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrganizationAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends OrganizationAggregateArgs>(args: Subset<T, OrganizationAggregateArgs>): Prisma.PrismaPromise<GetOrganizationAggregateType<T>>

    /**
     * Group by Organization.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrganizationGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends OrganizationGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: OrganizationGroupByArgs['orderBy'] }
        : { orderBy?: OrganizationGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, OrganizationGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetOrganizationGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Organization model
   */
  readonly fields: OrganizationFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Organization.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__OrganizationClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    shop<T extends Organization$shopArgs<ExtArgs> = {}>(args?: Subset<T, Organization$shopArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OrganizationShopBelongingPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    temporaryClosed<T extends Organization$temporaryClosedArgs<ExtArgs> = {}>(args?: Subset<T, Organization$temporaryClosedArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TemporaryClosedPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    announce<T extends Organization$announceArgs<ExtArgs> = {}>(args?: Subset<T, Organization$announceArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AnnouncePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Organization model
   */
  interface OrganizationFieldRefs {
    readonly id: FieldRef<"Organization", 'String'>
    readonly organizationName: FieldRef<"Organization", 'String'>
    readonly isDeleted: FieldRef<"Organization", 'Boolean'>
    readonly createdAt: FieldRef<"Organization", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Organization findUnique
   */
  export type OrganizationFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Organization
     */
    select?: OrganizationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Organization
     */
    omit?: OrganizationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrganizationInclude<ExtArgs> | null
    /**
     * Filter, which Organization to fetch.
     */
    where: OrganizationWhereUniqueInput
  }

  /**
   * Organization findUniqueOrThrow
   */
  export type OrganizationFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Organization
     */
    select?: OrganizationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Organization
     */
    omit?: OrganizationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrganizationInclude<ExtArgs> | null
    /**
     * Filter, which Organization to fetch.
     */
    where: OrganizationWhereUniqueInput
  }

  /**
   * Organization findFirst
   */
  export type OrganizationFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Organization
     */
    select?: OrganizationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Organization
     */
    omit?: OrganizationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrganizationInclude<ExtArgs> | null
    /**
     * Filter, which Organization to fetch.
     */
    where?: OrganizationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Organizations to fetch.
     */
    orderBy?: OrganizationOrderByWithRelationInput | OrganizationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Organizations.
     */
    cursor?: OrganizationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Organizations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Organizations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Organizations.
     */
    distinct?: OrganizationScalarFieldEnum | OrganizationScalarFieldEnum[]
  }

  /**
   * Organization findFirstOrThrow
   */
  export type OrganizationFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Organization
     */
    select?: OrganizationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Organization
     */
    omit?: OrganizationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrganizationInclude<ExtArgs> | null
    /**
     * Filter, which Organization to fetch.
     */
    where?: OrganizationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Organizations to fetch.
     */
    orderBy?: OrganizationOrderByWithRelationInput | OrganizationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Organizations.
     */
    cursor?: OrganizationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Organizations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Organizations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Organizations.
     */
    distinct?: OrganizationScalarFieldEnum | OrganizationScalarFieldEnum[]
  }

  /**
   * Organization findMany
   */
  export type OrganizationFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Organization
     */
    select?: OrganizationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Organization
     */
    omit?: OrganizationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrganizationInclude<ExtArgs> | null
    /**
     * Filter, which Organizations to fetch.
     */
    where?: OrganizationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Organizations to fetch.
     */
    orderBy?: OrganizationOrderByWithRelationInput | OrganizationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Organizations.
     */
    cursor?: OrganizationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Organizations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Organizations.
     */
    skip?: number
    distinct?: OrganizationScalarFieldEnum | OrganizationScalarFieldEnum[]
  }

  /**
   * Organization create
   */
  export type OrganizationCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Organization
     */
    select?: OrganizationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Organization
     */
    omit?: OrganizationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrganizationInclude<ExtArgs> | null
    /**
     * The data needed to create a Organization.
     */
    data: XOR<OrganizationCreateInput, OrganizationUncheckedCreateInput>
  }

  /**
   * Organization createMany
   */
  export type OrganizationCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Organizations.
     */
    data: OrganizationCreateManyInput | OrganizationCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Organization createManyAndReturn
   */
  export type OrganizationCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Organization
     */
    select?: OrganizationSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Organization
     */
    omit?: OrganizationOmit<ExtArgs> | null
    /**
     * The data used to create many Organizations.
     */
    data: OrganizationCreateManyInput | OrganizationCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Organization update
   */
  export type OrganizationUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Organization
     */
    select?: OrganizationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Organization
     */
    omit?: OrganizationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrganizationInclude<ExtArgs> | null
    /**
     * The data needed to update a Organization.
     */
    data: XOR<OrganizationUpdateInput, OrganizationUncheckedUpdateInput>
    /**
     * Choose, which Organization to update.
     */
    where: OrganizationWhereUniqueInput
  }

  /**
   * Organization updateMany
   */
  export type OrganizationUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Organizations.
     */
    data: XOR<OrganizationUpdateManyMutationInput, OrganizationUncheckedUpdateManyInput>
    /**
     * Filter which Organizations to update
     */
    where?: OrganizationWhereInput
    /**
     * Limit how many Organizations to update.
     */
    limit?: number
  }

  /**
   * Organization updateManyAndReturn
   */
  export type OrganizationUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Organization
     */
    select?: OrganizationSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Organization
     */
    omit?: OrganizationOmit<ExtArgs> | null
    /**
     * The data used to update Organizations.
     */
    data: XOR<OrganizationUpdateManyMutationInput, OrganizationUncheckedUpdateManyInput>
    /**
     * Filter which Organizations to update
     */
    where?: OrganizationWhereInput
    /**
     * Limit how many Organizations to update.
     */
    limit?: number
  }

  /**
   * Organization upsert
   */
  export type OrganizationUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Organization
     */
    select?: OrganizationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Organization
     */
    omit?: OrganizationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrganizationInclude<ExtArgs> | null
    /**
     * The filter to search for the Organization to update in case it exists.
     */
    where: OrganizationWhereUniqueInput
    /**
     * In case the Organization found by the `where` argument doesn't exist, create a new Organization with this data.
     */
    create: XOR<OrganizationCreateInput, OrganizationUncheckedCreateInput>
    /**
     * In case the Organization was found with the provided `where` argument, update it with this data.
     */
    update: XOR<OrganizationUpdateInput, OrganizationUncheckedUpdateInput>
  }

  /**
   * Organization delete
   */
  export type OrganizationDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Organization
     */
    select?: OrganizationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Organization
     */
    omit?: OrganizationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrganizationInclude<ExtArgs> | null
    /**
     * Filter which Organization to delete.
     */
    where: OrganizationWhereUniqueInput
  }

  /**
   * Organization deleteMany
   */
  export type OrganizationDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Organizations to delete
     */
    where?: OrganizationWhereInput
    /**
     * Limit how many Organizations to delete.
     */
    limit?: number
  }

  /**
   * Organization.shop
   */
  export type Organization$shopArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrganizationShopBelonging
     */
    select?: OrganizationShopBelongingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OrganizationShopBelonging
     */
    omit?: OrganizationShopBelongingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrganizationShopBelongingInclude<ExtArgs> | null
    where?: OrganizationShopBelongingWhereInput
    orderBy?: OrganizationShopBelongingOrderByWithRelationInput | OrganizationShopBelongingOrderByWithRelationInput[]
    cursor?: OrganizationShopBelongingWhereUniqueInput
    take?: number
    skip?: number
    distinct?: OrganizationShopBelongingScalarFieldEnum | OrganizationShopBelongingScalarFieldEnum[]
  }

  /**
   * Organization.temporaryClosed
   */
  export type Organization$temporaryClosedArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TemporaryClosed
     */
    select?: TemporaryClosedSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TemporaryClosed
     */
    omit?: TemporaryClosedOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TemporaryClosedInclude<ExtArgs> | null
    where?: TemporaryClosedWhereInput
    orderBy?: TemporaryClosedOrderByWithRelationInput | TemporaryClosedOrderByWithRelationInput[]
    cursor?: TemporaryClosedWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TemporaryClosedScalarFieldEnum | TemporaryClosedScalarFieldEnum[]
  }

  /**
   * Organization.announce
   */
  export type Organization$announceArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Announce
     */
    select?: AnnounceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Announce
     */
    omit?: AnnounceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnnounceInclude<ExtArgs> | null
    where?: AnnounceWhereInput
    orderBy?: AnnounceOrderByWithRelationInput | AnnounceOrderByWithRelationInput[]
    cursor?: AnnounceWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AnnounceScalarFieldEnum | AnnounceScalarFieldEnum[]
  }

  /**
   * Organization without action
   */
  export type OrganizationDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Organization
     */
    select?: OrganizationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Organization
     */
    omit?: OrganizationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrganizationInclude<ExtArgs> | null
  }


  /**
   * Model Shop
   */

  export type AggregateShop = {
    _count: ShopCountAggregateOutputType | null
    _avg: ShopAvgAggregateOutputType | null
    _sum: ShopSumAggregateOutputType | null
    _min: ShopMinAggregateOutputType | null
    _max: ShopMaxAggregateOutputType | null
  }

  export type ShopAvgAggregateOutputType = {
    timeUnit: number | null
  }

  export type ShopSumAggregateOutputType = {
    timeUnit: number | null
  }

  export type ShopMinAggregateOutputType = {
    id: string | null
    shopName: string | null
    openTime: string | null
    closeTime: string | null
    timeUnit: number | null
    submitFrequency: string | null
    avatar: string | null
    useTimeCard: boolean | null
    isDeleted: boolean | null
    createdAt: Date | null
  }

  export type ShopMaxAggregateOutputType = {
    id: string | null
    shopName: string | null
    openTime: string | null
    closeTime: string | null
    timeUnit: number | null
    submitFrequency: string | null
    avatar: string | null
    useTimeCard: boolean | null
    isDeleted: boolean | null
    createdAt: Date | null
  }

  export type ShopCountAggregateOutputType = {
    id: number
    shopName: number
    openTime: number
    closeTime: number
    timeUnit: number
    submitFrequency: number
    avatar: number
    useTimeCard: number
    isDeleted: number
    createdAt: number
    _all: number
  }


  export type ShopAvgAggregateInputType = {
    timeUnit?: true
  }

  export type ShopSumAggregateInputType = {
    timeUnit?: true
  }

  export type ShopMinAggregateInputType = {
    id?: true
    shopName?: true
    openTime?: true
    closeTime?: true
    timeUnit?: true
    submitFrequency?: true
    avatar?: true
    useTimeCard?: true
    isDeleted?: true
    createdAt?: true
  }

  export type ShopMaxAggregateInputType = {
    id?: true
    shopName?: true
    openTime?: true
    closeTime?: true
    timeUnit?: true
    submitFrequency?: true
    avatar?: true
    useTimeCard?: true
    isDeleted?: true
    createdAt?: true
  }

  export type ShopCountAggregateInputType = {
    id?: true
    shopName?: true
    openTime?: true
    closeTime?: true
    timeUnit?: true
    submitFrequency?: true
    avatar?: true
    useTimeCard?: true
    isDeleted?: true
    createdAt?: true
    _all?: true
  }

  export type ShopAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Shop to aggregate.
     */
    where?: ShopWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Shops to fetch.
     */
    orderBy?: ShopOrderByWithRelationInput | ShopOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ShopWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Shops from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Shops.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Shops
    **/
    _count?: true | ShopCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ShopAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ShopSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ShopMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ShopMaxAggregateInputType
  }

  export type GetShopAggregateType<T extends ShopAggregateArgs> = {
        [P in keyof T & keyof AggregateShop]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateShop[P]>
      : GetScalarType<T[P], AggregateShop[P]>
  }




  export type ShopGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ShopWhereInput
    orderBy?: ShopOrderByWithAggregationInput | ShopOrderByWithAggregationInput[]
    by: ShopScalarFieldEnum[] | ShopScalarFieldEnum
    having?: ShopScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ShopCountAggregateInputType | true
    _avg?: ShopAvgAggregateInputType
    _sum?: ShopSumAggregateInputType
    _min?: ShopMinAggregateInputType
    _max?: ShopMaxAggregateInputType
  }

  export type ShopGroupByOutputType = {
    id: string
    shopName: string
    openTime: string
    closeTime: string
    timeUnit: number
    submitFrequency: string
    avatar: string
    useTimeCard: boolean
    isDeleted: boolean
    createdAt: Date
    _count: ShopCountAggregateOutputType | null
    _avg: ShopAvgAggregateOutputType | null
    _sum: ShopSumAggregateOutputType | null
    _min: ShopMinAggregateOutputType | null
    _max: ShopMaxAggregateOutputType | null
  }

  type GetShopGroupByPayload<T extends ShopGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ShopGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ShopGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ShopGroupByOutputType[P]>
            : GetScalarType<T[P], ShopGroupByOutputType[P]>
        }
      >
    >


  export type ShopSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    shopName?: boolean
    openTime?: boolean
    closeTime?: boolean
    timeUnit?: boolean
    submitFrequency?: boolean
    avatar?: boolean
    useTimeCard?: boolean
    isDeleted?: boolean
    createdAt?: boolean
    organization?: boolean | Shop$organizationArgs<ExtArgs>
    user?: boolean | Shop$userArgs<ExtArgs>
    operation?: boolean | Shop$operationArgs<ExtArgs>
    stableShift?: boolean | Shop$stableShiftArgs<ExtArgs>
    unstableShift?: boolean | Shop$unstableShiftArgs<ExtArgs>
    request?: boolean | Shop$requestArgs<ExtArgs>
    timeCard?: boolean | Shop$timeCardArgs<ExtArgs>
    temporaryClosed?: boolean | Shop$temporaryClosedArgs<ExtArgs>
    announce?: boolean | Shop$announceArgs<ExtArgs>
    Invitation?: boolean | Shop$InvitationArgs<ExtArgs>
    _count?: boolean | ShopCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["shop"]>

  export type ShopSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    shopName?: boolean
    openTime?: boolean
    closeTime?: boolean
    timeUnit?: boolean
    submitFrequency?: boolean
    avatar?: boolean
    useTimeCard?: boolean
    isDeleted?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["shop"]>

  export type ShopSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    shopName?: boolean
    openTime?: boolean
    closeTime?: boolean
    timeUnit?: boolean
    submitFrequency?: boolean
    avatar?: boolean
    useTimeCard?: boolean
    isDeleted?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["shop"]>

  export type ShopSelectScalar = {
    id?: boolean
    shopName?: boolean
    openTime?: boolean
    closeTime?: boolean
    timeUnit?: boolean
    submitFrequency?: boolean
    avatar?: boolean
    useTimeCard?: boolean
    isDeleted?: boolean
    createdAt?: boolean
  }

  export type ShopOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "shopName" | "openTime" | "closeTime" | "timeUnit" | "submitFrequency" | "avatar" | "useTimeCard" | "isDeleted" | "createdAt", ExtArgs["result"]["shop"]>
  export type ShopInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    organization?: boolean | Shop$organizationArgs<ExtArgs>
    user?: boolean | Shop$userArgs<ExtArgs>
    operation?: boolean | Shop$operationArgs<ExtArgs>
    stableShift?: boolean | Shop$stableShiftArgs<ExtArgs>
    unstableShift?: boolean | Shop$unstableShiftArgs<ExtArgs>
    request?: boolean | Shop$requestArgs<ExtArgs>
    timeCard?: boolean | Shop$timeCardArgs<ExtArgs>
    temporaryClosed?: boolean | Shop$temporaryClosedArgs<ExtArgs>
    announce?: boolean | Shop$announceArgs<ExtArgs>
    Invitation?: boolean | Shop$InvitationArgs<ExtArgs>
    _count?: boolean | ShopCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ShopIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type ShopIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $ShopPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Shop"
    objects: {
      organization: Prisma.$OrganizationShopBelongingPayload<ExtArgs>[]
      user: Prisma.$ShopUserBelongingPayload<ExtArgs>[]
      operation: Prisma.$OperationPayload<ExtArgs>[]
      stableShift: Prisma.$StableShiftPayload<ExtArgs>[]
      unstableShift: Prisma.$UnstableShiftPayload<ExtArgs>[]
      request: Prisma.$RequestPayload<ExtArgs>[]
      timeCard: Prisma.$TimeCardPayload<ExtArgs>[]
      temporaryClosed: Prisma.$TemporaryClosedPayload<ExtArgs>[]
      announce: Prisma.$AnnouncePayload<ExtArgs>[]
      Invitation: Prisma.$InvitationPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      shopName: string
      openTime: string
      closeTime: string
      timeUnit: number
      submitFrequency: string
      avatar: string
      useTimeCard: boolean
      isDeleted: boolean
      createdAt: Date
    }, ExtArgs["result"]["shop"]>
    composites: {}
  }

  type ShopGetPayload<S extends boolean | null | undefined | ShopDefaultArgs> = $Result.GetResult<Prisma.$ShopPayload, S>

  type ShopCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ShopFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ShopCountAggregateInputType | true
    }

  export interface ShopDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Shop'], meta: { name: 'Shop' } }
    /**
     * Find zero or one Shop that matches the filter.
     * @param {ShopFindUniqueArgs} args - Arguments to find a Shop
     * @example
     * // Get one Shop
     * const shop = await prisma.shop.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ShopFindUniqueArgs>(args: SelectSubset<T, ShopFindUniqueArgs<ExtArgs>>): Prisma__ShopClient<$Result.GetResult<Prisma.$ShopPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Shop that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ShopFindUniqueOrThrowArgs} args - Arguments to find a Shop
     * @example
     * // Get one Shop
     * const shop = await prisma.shop.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ShopFindUniqueOrThrowArgs>(args: SelectSubset<T, ShopFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ShopClient<$Result.GetResult<Prisma.$ShopPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Shop that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ShopFindFirstArgs} args - Arguments to find a Shop
     * @example
     * // Get one Shop
     * const shop = await prisma.shop.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ShopFindFirstArgs>(args?: SelectSubset<T, ShopFindFirstArgs<ExtArgs>>): Prisma__ShopClient<$Result.GetResult<Prisma.$ShopPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Shop that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ShopFindFirstOrThrowArgs} args - Arguments to find a Shop
     * @example
     * // Get one Shop
     * const shop = await prisma.shop.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ShopFindFirstOrThrowArgs>(args?: SelectSubset<T, ShopFindFirstOrThrowArgs<ExtArgs>>): Prisma__ShopClient<$Result.GetResult<Prisma.$ShopPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Shops that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ShopFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Shops
     * const shops = await prisma.shop.findMany()
     * 
     * // Get first 10 Shops
     * const shops = await prisma.shop.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const shopWithIdOnly = await prisma.shop.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ShopFindManyArgs>(args?: SelectSubset<T, ShopFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ShopPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Shop.
     * @param {ShopCreateArgs} args - Arguments to create a Shop.
     * @example
     * // Create one Shop
     * const Shop = await prisma.shop.create({
     *   data: {
     *     // ... data to create a Shop
     *   }
     * })
     * 
     */
    create<T extends ShopCreateArgs>(args: SelectSubset<T, ShopCreateArgs<ExtArgs>>): Prisma__ShopClient<$Result.GetResult<Prisma.$ShopPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Shops.
     * @param {ShopCreateManyArgs} args - Arguments to create many Shops.
     * @example
     * // Create many Shops
     * const shop = await prisma.shop.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ShopCreateManyArgs>(args?: SelectSubset<T, ShopCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Shops and returns the data saved in the database.
     * @param {ShopCreateManyAndReturnArgs} args - Arguments to create many Shops.
     * @example
     * // Create many Shops
     * const shop = await prisma.shop.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Shops and only return the `id`
     * const shopWithIdOnly = await prisma.shop.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ShopCreateManyAndReturnArgs>(args?: SelectSubset<T, ShopCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ShopPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Shop.
     * @param {ShopDeleteArgs} args - Arguments to delete one Shop.
     * @example
     * // Delete one Shop
     * const Shop = await prisma.shop.delete({
     *   where: {
     *     // ... filter to delete one Shop
     *   }
     * })
     * 
     */
    delete<T extends ShopDeleteArgs>(args: SelectSubset<T, ShopDeleteArgs<ExtArgs>>): Prisma__ShopClient<$Result.GetResult<Prisma.$ShopPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Shop.
     * @param {ShopUpdateArgs} args - Arguments to update one Shop.
     * @example
     * // Update one Shop
     * const shop = await prisma.shop.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ShopUpdateArgs>(args: SelectSubset<T, ShopUpdateArgs<ExtArgs>>): Prisma__ShopClient<$Result.GetResult<Prisma.$ShopPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Shops.
     * @param {ShopDeleteManyArgs} args - Arguments to filter Shops to delete.
     * @example
     * // Delete a few Shops
     * const { count } = await prisma.shop.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ShopDeleteManyArgs>(args?: SelectSubset<T, ShopDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Shops.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ShopUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Shops
     * const shop = await prisma.shop.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ShopUpdateManyArgs>(args: SelectSubset<T, ShopUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Shops and returns the data updated in the database.
     * @param {ShopUpdateManyAndReturnArgs} args - Arguments to update many Shops.
     * @example
     * // Update many Shops
     * const shop = await prisma.shop.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Shops and only return the `id`
     * const shopWithIdOnly = await prisma.shop.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ShopUpdateManyAndReturnArgs>(args: SelectSubset<T, ShopUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ShopPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Shop.
     * @param {ShopUpsertArgs} args - Arguments to update or create a Shop.
     * @example
     * // Update or create a Shop
     * const shop = await prisma.shop.upsert({
     *   create: {
     *     // ... data to create a Shop
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Shop we want to update
     *   }
     * })
     */
    upsert<T extends ShopUpsertArgs>(args: SelectSubset<T, ShopUpsertArgs<ExtArgs>>): Prisma__ShopClient<$Result.GetResult<Prisma.$ShopPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Shops.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ShopCountArgs} args - Arguments to filter Shops to count.
     * @example
     * // Count the number of Shops
     * const count = await prisma.shop.count({
     *   where: {
     *     // ... the filter for the Shops we want to count
     *   }
     * })
    **/
    count<T extends ShopCountArgs>(
      args?: Subset<T, ShopCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ShopCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Shop.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ShopAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ShopAggregateArgs>(args: Subset<T, ShopAggregateArgs>): Prisma.PrismaPromise<GetShopAggregateType<T>>

    /**
     * Group by Shop.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ShopGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ShopGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ShopGroupByArgs['orderBy'] }
        : { orderBy?: ShopGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ShopGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetShopGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Shop model
   */
  readonly fields: ShopFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Shop.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ShopClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    organization<T extends Shop$organizationArgs<ExtArgs> = {}>(args?: Subset<T, Shop$organizationArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OrganizationShopBelongingPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    user<T extends Shop$userArgs<ExtArgs> = {}>(args?: Subset<T, Shop$userArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ShopUserBelongingPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    operation<T extends Shop$operationArgs<ExtArgs> = {}>(args?: Subset<T, Shop$operationArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OperationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    stableShift<T extends Shop$stableShiftArgs<ExtArgs> = {}>(args?: Subset<T, Shop$stableShiftArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StableShiftPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    unstableShift<T extends Shop$unstableShiftArgs<ExtArgs> = {}>(args?: Subset<T, Shop$unstableShiftArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UnstableShiftPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    request<T extends Shop$requestArgs<ExtArgs> = {}>(args?: Subset<T, Shop$requestArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RequestPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    timeCard<T extends Shop$timeCardArgs<ExtArgs> = {}>(args?: Subset<T, Shop$timeCardArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TimeCardPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    temporaryClosed<T extends Shop$temporaryClosedArgs<ExtArgs> = {}>(args?: Subset<T, Shop$temporaryClosedArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TemporaryClosedPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    announce<T extends Shop$announceArgs<ExtArgs> = {}>(args?: Subset<T, Shop$announceArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AnnouncePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    Invitation<T extends Shop$InvitationArgs<ExtArgs> = {}>(args?: Subset<T, Shop$InvitationArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$InvitationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Shop model
   */
  interface ShopFieldRefs {
    readonly id: FieldRef<"Shop", 'String'>
    readonly shopName: FieldRef<"Shop", 'String'>
    readonly openTime: FieldRef<"Shop", 'String'>
    readonly closeTime: FieldRef<"Shop", 'String'>
    readonly timeUnit: FieldRef<"Shop", 'Int'>
    readonly submitFrequency: FieldRef<"Shop", 'String'>
    readonly avatar: FieldRef<"Shop", 'String'>
    readonly useTimeCard: FieldRef<"Shop", 'Boolean'>
    readonly isDeleted: FieldRef<"Shop", 'Boolean'>
    readonly createdAt: FieldRef<"Shop", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Shop findUnique
   */
  export type ShopFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Shop
     */
    select?: ShopSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Shop
     */
    omit?: ShopOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShopInclude<ExtArgs> | null
    /**
     * Filter, which Shop to fetch.
     */
    where: ShopWhereUniqueInput
  }

  /**
   * Shop findUniqueOrThrow
   */
  export type ShopFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Shop
     */
    select?: ShopSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Shop
     */
    omit?: ShopOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShopInclude<ExtArgs> | null
    /**
     * Filter, which Shop to fetch.
     */
    where: ShopWhereUniqueInput
  }

  /**
   * Shop findFirst
   */
  export type ShopFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Shop
     */
    select?: ShopSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Shop
     */
    omit?: ShopOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShopInclude<ExtArgs> | null
    /**
     * Filter, which Shop to fetch.
     */
    where?: ShopWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Shops to fetch.
     */
    orderBy?: ShopOrderByWithRelationInput | ShopOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Shops.
     */
    cursor?: ShopWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Shops from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Shops.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Shops.
     */
    distinct?: ShopScalarFieldEnum | ShopScalarFieldEnum[]
  }

  /**
   * Shop findFirstOrThrow
   */
  export type ShopFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Shop
     */
    select?: ShopSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Shop
     */
    omit?: ShopOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShopInclude<ExtArgs> | null
    /**
     * Filter, which Shop to fetch.
     */
    where?: ShopWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Shops to fetch.
     */
    orderBy?: ShopOrderByWithRelationInput | ShopOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Shops.
     */
    cursor?: ShopWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Shops from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Shops.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Shops.
     */
    distinct?: ShopScalarFieldEnum | ShopScalarFieldEnum[]
  }

  /**
   * Shop findMany
   */
  export type ShopFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Shop
     */
    select?: ShopSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Shop
     */
    omit?: ShopOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShopInclude<ExtArgs> | null
    /**
     * Filter, which Shops to fetch.
     */
    where?: ShopWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Shops to fetch.
     */
    orderBy?: ShopOrderByWithRelationInput | ShopOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Shops.
     */
    cursor?: ShopWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Shops from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Shops.
     */
    skip?: number
    distinct?: ShopScalarFieldEnum | ShopScalarFieldEnum[]
  }

  /**
   * Shop create
   */
  export type ShopCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Shop
     */
    select?: ShopSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Shop
     */
    omit?: ShopOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShopInclude<ExtArgs> | null
    /**
     * The data needed to create a Shop.
     */
    data: XOR<ShopCreateInput, ShopUncheckedCreateInput>
  }

  /**
   * Shop createMany
   */
  export type ShopCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Shops.
     */
    data: ShopCreateManyInput | ShopCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Shop createManyAndReturn
   */
  export type ShopCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Shop
     */
    select?: ShopSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Shop
     */
    omit?: ShopOmit<ExtArgs> | null
    /**
     * The data used to create many Shops.
     */
    data: ShopCreateManyInput | ShopCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Shop update
   */
  export type ShopUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Shop
     */
    select?: ShopSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Shop
     */
    omit?: ShopOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShopInclude<ExtArgs> | null
    /**
     * The data needed to update a Shop.
     */
    data: XOR<ShopUpdateInput, ShopUncheckedUpdateInput>
    /**
     * Choose, which Shop to update.
     */
    where: ShopWhereUniqueInput
  }

  /**
   * Shop updateMany
   */
  export type ShopUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Shops.
     */
    data: XOR<ShopUpdateManyMutationInput, ShopUncheckedUpdateManyInput>
    /**
     * Filter which Shops to update
     */
    where?: ShopWhereInput
    /**
     * Limit how many Shops to update.
     */
    limit?: number
  }

  /**
   * Shop updateManyAndReturn
   */
  export type ShopUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Shop
     */
    select?: ShopSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Shop
     */
    omit?: ShopOmit<ExtArgs> | null
    /**
     * The data used to update Shops.
     */
    data: XOR<ShopUpdateManyMutationInput, ShopUncheckedUpdateManyInput>
    /**
     * Filter which Shops to update
     */
    where?: ShopWhereInput
    /**
     * Limit how many Shops to update.
     */
    limit?: number
  }

  /**
   * Shop upsert
   */
  export type ShopUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Shop
     */
    select?: ShopSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Shop
     */
    omit?: ShopOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShopInclude<ExtArgs> | null
    /**
     * The filter to search for the Shop to update in case it exists.
     */
    where: ShopWhereUniqueInput
    /**
     * In case the Shop found by the `where` argument doesn't exist, create a new Shop with this data.
     */
    create: XOR<ShopCreateInput, ShopUncheckedCreateInput>
    /**
     * In case the Shop was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ShopUpdateInput, ShopUncheckedUpdateInput>
  }

  /**
   * Shop delete
   */
  export type ShopDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Shop
     */
    select?: ShopSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Shop
     */
    omit?: ShopOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShopInclude<ExtArgs> | null
    /**
     * Filter which Shop to delete.
     */
    where: ShopWhereUniqueInput
  }

  /**
   * Shop deleteMany
   */
  export type ShopDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Shops to delete
     */
    where?: ShopWhereInput
    /**
     * Limit how many Shops to delete.
     */
    limit?: number
  }

  /**
   * Shop.organization
   */
  export type Shop$organizationArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrganizationShopBelonging
     */
    select?: OrganizationShopBelongingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OrganizationShopBelonging
     */
    omit?: OrganizationShopBelongingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrganizationShopBelongingInclude<ExtArgs> | null
    where?: OrganizationShopBelongingWhereInput
    orderBy?: OrganizationShopBelongingOrderByWithRelationInput | OrganizationShopBelongingOrderByWithRelationInput[]
    cursor?: OrganizationShopBelongingWhereUniqueInput
    take?: number
    skip?: number
    distinct?: OrganizationShopBelongingScalarFieldEnum | OrganizationShopBelongingScalarFieldEnum[]
  }

  /**
   * Shop.user
   */
  export type Shop$userArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShopUserBelonging
     */
    select?: ShopUserBelongingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ShopUserBelonging
     */
    omit?: ShopUserBelongingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShopUserBelongingInclude<ExtArgs> | null
    where?: ShopUserBelongingWhereInput
    orderBy?: ShopUserBelongingOrderByWithRelationInput | ShopUserBelongingOrderByWithRelationInput[]
    cursor?: ShopUserBelongingWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ShopUserBelongingScalarFieldEnum | ShopUserBelongingScalarFieldEnum[]
  }

  /**
   * Shop.operation
   */
  export type Shop$operationArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Operation
     */
    select?: OperationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Operation
     */
    omit?: OperationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OperationInclude<ExtArgs> | null
    where?: OperationWhereInput
    orderBy?: OperationOrderByWithRelationInput | OperationOrderByWithRelationInput[]
    cursor?: OperationWhereUniqueInput
    take?: number
    skip?: number
    distinct?: OperationScalarFieldEnum | OperationScalarFieldEnum[]
  }

  /**
   * Shop.stableShift
   */
  export type Shop$stableShiftArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StableShift
     */
    select?: StableShiftSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StableShift
     */
    omit?: StableShiftOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StableShiftInclude<ExtArgs> | null
    where?: StableShiftWhereInput
    orderBy?: StableShiftOrderByWithRelationInput | StableShiftOrderByWithRelationInput[]
    cursor?: StableShiftWhereUniqueInput
    take?: number
    skip?: number
    distinct?: StableShiftScalarFieldEnum | StableShiftScalarFieldEnum[]
  }

  /**
   * Shop.unstableShift
   */
  export type Shop$unstableShiftArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UnstableShift
     */
    select?: UnstableShiftSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UnstableShift
     */
    omit?: UnstableShiftOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UnstableShiftInclude<ExtArgs> | null
    where?: UnstableShiftWhereInput
    orderBy?: UnstableShiftOrderByWithRelationInput | UnstableShiftOrderByWithRelationInput[]
    cursor?: UnstableShiftWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UnstableShiftScalarFieldEnum | UnstableShiftScalarFieldEnum[]
  }

  /**
   * Shop.request
   */
  export type Shop$requestArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Request
     */
    select?: RequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Request
     */
    omit?: RequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RequestInclude<ExtArgs> | null
    where?: RequestWhereInput
    orderBy?: RequestOrderByWithRelationInput | RequestOrderByWithRelationInput[]
    cursor?: RequestWhereUniqueInput
    take?: number
    skip?: number
    distinct?: RequestScalarFieldEnum | RequestScalarFieldEnum[]
  }

  /**
   * Shop.timeCard
   */
  export type Shop$timeCardArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TimeCard
     */
    select?: TimeCardSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TimeCard
     */
    omit?: TimeCardOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TimeCardInclude<ExtArgs> | null
    where?: TimeCardWhereInput
    orderBy?: TimeCardOrderByWithRelationInput | TimeCardOrderByWithRelationInput[]
    cursor?: TimeCardWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TimeCardScalarFieldEnum | TimeCardScalarFieldEnum[]
  }

  /**
   * Shop.temporaryClosed
   */
  export type Shop$temporaryClosedArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TemporaryClosed
     */
    select?: TemporaryClosedSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TemporaryClosed
     */
    omit?: TemporaryClosedOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TemporaryClosedInclude<ExtArgs> | null
    where?: TemporaryClosedWhereInput
    orderBy?: TemporaryClosedOrderByWithRelationInput | TemporaryClosedOrderByWithRelationInput[]
    cursor?: TemporaryClosedWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TemporaryClosedScalarFieldEnum | TemporaryClosedScalarFieldEnum[]
  }

  /**
   * Shop.announce
   */
  export type Shop$announceArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Announce
     */
    select?: AnnounceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Announce
     */
    omit?: AnnounceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnnounceInclude<ExtArgs> | null
    where?: AnnounceWhereInput
    orderBy?: AnnounceOrderByWithRelationInput | AnnounceOrderByWithRelationInput[]
    cursor?: AnnounceWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AnnounceScalarFieldEnum | AnnounceScalarFieldEnum[]
  }

  /**
   * Shop.Invitation
   */
  export type Shop$InvitationArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Invitation
     */
    select?: InvitationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Invitation
     */
    omit?: InvitationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InvitationInclude<ExtArgs> | null
    where?: InvitationWhereInput
    orderBy?: InvitationOrderByWithRelationInput | InvitationOrderByWithRelationInput[]
    cursor?: InvitationWhereUniqueInput
    take?: number
    skip?: number
    distinct?: InvitationScalarFieldEnum | InvitationScalarFieldEnum[]
  }

  /**
   * Shop without action
   */
  export type ShopDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Shop
     */
    select?: ShopSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Shop
     */
    omit?: ShopOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShopInclude<ExtArgs> | null
  }


  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserMinAggregateOutputType = {
    id: string | null
    userId: string | null
    userName: string | null
    avatar: string | null
    isDeleted: boolean | null
    createdAt: Date | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    userName: string | null
    avatar: string | null
    isDeleted: boolean | null
    createdAt: Date | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    userId: number
    userName: number
    avatar: number
    isDeleted: number
    createdAt: number
    _all: number
  }


  export type UserMinAggregateInputType = {
    id?: true
    userId?: true
    userName?: true
    avatar?: true
    isDeleted?: true
    createdAt?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    userId?: true
    userName?: true
    avatar?: true
    isDeleted?: true
    createdAt?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    userId?: true
    userName?: true
    avatar?: true
    isDeleted?: true
    createdAt?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: string
    userId: string
    userName: string
    avatar: string
    isDeleted: boolean
    createdAt: Date
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    userName?: boolean
    avatar?: boolean
    isDeleted?: boolean
    createdAt?: boolean
    shop?: boolean | User$shopArgs<ExtArgs>
    stableShift?: boolean | User$stableShiftArgs<ExtArgs>
    unstableShift?: boolean | User$unstableShiftArgs<ExtArgs>
    request?: boolean | User$requestArgs<ExtArgs>
    timeCard?: boolean | User$timeCardArgs<ExtArgs>
    Invitation?: boolean | User$InvitationArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    userName?: boolean
    avatar?: boolean
    isDeleted?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    userName?: boolean
    avatar?: boolean
    isDeleted?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    userId?: boolean
    userName?: boolean
    avatar?: boolean
    isDeleted?: boolean
    createdAt?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "userName" | "avatar" | "isDeleted" | "createdAt", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    shop?: boolean | User$shopArgs<ExtArgs>
    stableShift?: boolean | User$stableShiftArgs<ExtArgs>
    unstableShift?: boolean | User$unstableShiftArgs<ExtArgs>
    request?: boolean | User$requestArgs<ExtArgs>
    timeCard?: boolean | User$timeCardArgs<ExtArgs>
    Invitation?: boolean | User$InvitationArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type UserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      shop: Prisma.$ShopUserBelongingPayload<ExtArgs>[]
      stableShift: Prisma.$StableShiftPayload<ExtArgs>[]
      unstableShift: Prisma.$UnstableShiftPayload<ExtArgs>[]
      request: Prisma.$RequestPayload<ExtArgs>[]
      timeCard: Prisma.$TimeCardPayload<ExtArgs>[]
      Invitation: Prisma.$InvitationPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      userName: string
      avatar: string
      isDeleted: boolean
      createdAt: Date
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {UserCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const userWithIdOnly = await prisma.user.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {UserUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `id`
     * const userWithIdOnly = await prisma.user.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UserUpdateManyAndReturnArgs>(args: SelectSubset<T, UserUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    shop<T extends User$shopArgs<ExtArgs> = {}>(args?: Subset<T, User$shopArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ShopUserBelongingPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    stableShift<T extends User$stableShiftArgs<ExtArgs> = {}>(args?: Subset<T, User$stableShiftArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StableShiftPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    unstableShift<T extends User$unstableShiftArgs<ExtArgs> = {}>(args?: Subset<T, User$unstableShiftArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UnstableShiftPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    request<T extends User$requestArgs<ExtArgs> = {}>(args?: Subset<T, User$requestArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RequestPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    timeCard<T extends User$timeCardArgs<ExtArgs> = {}>(args?: Subset<T, User$timeCardArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TimeCardPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    Invitation<T extends User$InvitationArgs<ExtArgs> = {}>(args?: Subset<T, User$InvitationArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$InvitationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the User model
   */
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'String'>
    readonly userId: FieldRef<"User", 'String'>
    readonly userName: FieldRef<"User", 'String'>
    readonly avatar: FieldRef<"User", 'String'>
    readonly isDeleted: FieldRef<"User", 'Boolean'>
    readonly createdAt: FieldRef<"User", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User createManyAndReturn
   */
  export type UserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User updateManyAndReturn
   */
  export type UserUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * User.shop
   */
  export type User$shopArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShopUserBelonging
     */
    select?: ShopUserBelongingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ShopUserBelonging
     */
    omit?: ShopUserBelongingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShopUserBelongingInclude<ExtArgs> | null
    where?: ShopUserBelongingWhereInput
    orderBy?: ShopUserBelongingOrderByWithRelationInput | ShopUserBelongingOrderByWithRelationInput[]
    cursor?: ShopUserBelongingWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ShopUserBelongingScalarFieldEnum | ShopUserBelongingScalarFieldEnum[]
  }

  /**
   * User.stableShift
   */
  export type User$stableShiftArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StableShift
     */
    select?: StableShiftSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StableShift
     */
    omit?: StableShiftOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StableShiftInclude<ExtArgs> | null
    where?: StableShiftWhereInput
    orderBy?: StableShiftOrderByWithRelationInput | StableShiftOrderByWithRelationInput[]
    cursor?: StableShiftWhereUniqueInput
    take?: number
    skip?: number
    distinct?: StableShiftScalarFieldEnum | StableShiftScalarFieldEnum[]
  }

  /**
   * User.unstableShift
   */
  export type User$unstableShiftArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UnstableShift
     */
    select?: UnstableShiftSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UnstableShift
     */
    omit?: UnstableShiftOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UnstableShiftInclude<ExtArgs> | null
    where?: UnstableShiftWhereInput
    orderBy?: UnstableShiftOrderByWithRelationInput | UnstableShiftOrderByWithRelationInput[]
    cursor?: UnstableShiftWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UnstableShiftScalarFieldEnum | UnstableShiftScalarFieldEnum[]
  }

  /**
   * User.request
   */
  export type User$requestArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Request
     */
    select?: RequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Request
     */
    omit?: RequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RequestInclude<ExtArgs> | null
    where?: RequestWhereInput
    orderBy?: RequestOrderByWithRelationInput | RequestOrderByWithRelationInput[]
    cursor?: RequestWhereUniqueInput
    take?: number
    skip?: number
    distinct?: RequestScalarFieldEnum | RequestScalarFieldEnum[]
  }

  /**
   * User.timeCard
   */
  export type User$timeCardArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TimeCard
     */
    select?: TimeCardSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TimeCard
     */
    omit?: TimeCardOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TimeCardInclude<ExtArgs> | null
    where?: TimeCardWhereInput
    orderBy?: TimeCardOrderByWithRelationInput | TimeCardOrderByWithRelationInput[]
    cursor?: TimeCardWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TimeCardScalarFieldEnum | TimeCardScalarFieldEnum[]
  }

  /**
   * User.Invitation
   */
  export type User$InvitationArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Invitation
     */
    select?: InvitationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Invitation
     */
    omit?: InvitationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InvitationInclude<ExtArgs> | null
    where?: InvitationWhereInput
    orderBy?: InvitationOrderByWithRelationInput | InvitationOrderByWithRelationInput[]
    cursor?: InvitationWhereUniqueInput
    take?: number
    skip?: number
    distinct?: InvitationScalarFieldEnum | InvitationScalarFieldEnum[]
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model Invitation
   */

  export type AggregateInvitation = {
    _count: InvitationCountAggregateOutputType | null
    _min: InvitationMinAggregateOutputType | null
    _max: InvitationMaxAggregateOutputType | null
  }

  export type InvitationMinAggregateOutputType = {
    id: string | null
    invitedByShopId: string | null
    targetUserId: string | null
    accepted: boolean | null
    isDeleted: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type InvitationMaxAggregateOutputType = {
    id: string | null
    invitedByShopId: string | null
    targetUserId: string | null
    accepted: boolean | null
    isDeleted: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type InvitationCountAggregateOutputType = {
    id: number
    invitedByShopId: number
    targetUserId: number
    accepted: number
    isDeleted: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type InvitationMinAggregateInputType = {
    id?: true
    invitedByShopId?: true
    targetUserId?: true
    accepted?: true
    isDeleted?: true
    createdAt?: true
    updatedAt?: true
  }

  export type InvitationMaxAggregateInputType = {
    id?: true
    invitedByShopId?: true
    targetUserId?: true
    accepted?: true
    isDeleted?: true
    createdAt?: true
    updatedAt?: true
  }

  export type InvitationCountAggregateInputType = {
    id?: true
    invitedByShopId?: true
    targetUserId?: true
    accepted?: true
    isDeleted?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type InvitationAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Invitation to aggregate.
     */
    where?: InvitationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Invitations to fetch.
     */
    orderBy?: InvitationOrderByWithRelationInput | InvitationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: InvitationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Invitations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Invitations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Invitations
    **/
    _count?: true | InvitationCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: InvitationMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: InvitationMaxAggregateInputType
  }

  export type GetInvitationAggregateType<T extends InvitationAggregateArgs> = {
        [P in keyof T & keyof AggregateInvitation]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateInvitation[P]>
      : GetScalarType<T[P], AggregateInvitation[P]>
  }




  export type InvitationGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: InvitationWhereInput
    orderBy?: InvitationOrderByWithAggregationInput | InvitationOrderByWithAggregationInput[]
    by: InvitationScalarFieldEnum[] | InvitationScalarFieldEnum
    having?: InvitationScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: InvitationCountAggregateInputType | true
    _min?: InvitationMinAggregateInputType
    _max?: InvitationMaxAggregateInputType
  }

  export type InvitationGroupByOutputType = {
    id: string
    invitedByShopId: string
    targetUserId: string
    accepted: boolean
    isDeleted: boolean
    createdAt: Date
    updatedAt: Date
    _count: InvitationCountAggregateOutputType | null
    _min: InvitationMinAggregateOutputType | null
    _max: InvitationMaxAggregateOutputType | null
  }

  type GetInvitationGroupByPayload<T extends InvitationGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<InvitationGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof InvitationGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], InvitationGroupByOutputType[P]>
            : GetScalarType<T[P], InvitationGroupByOutputType[P]>
        }
      >
    >


  export type InvitationSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    invitedByShopId?: boolean
    targetUserId?: boolean
    accepted?: boolean
    isDeleted?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    invitedBy?: boolean | ShopDefaultArgs<ExtArgs>
    targetUser?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["invitation"]>

  export type InvitationSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    invitedByShopId?: boolean
    targetUserId?: boolean
    accepted?: boolean
    isDeleted?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    invitedBy?: boolean | ShopDefaultArgs<ExtArgs>
    targetUser?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["invitation"]>

  export type InvitationSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    invitedByShopId?: boolean
    targetUserId?: boolean
    accepted?: boolean
    isDeleted?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    invitedBy?: boolean | ShopDefaultArgs<ExtArgs>
    targetUser?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["invitation"]>

  export type InvitationSelectScalar = {
    id?: boolean
    invitedByShopId?: boolean
    targetUserId?: boolean
    accepted?: boolean
    isDeleted?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type InvitationOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "invitedByShopId" | "targetUserId" | "accepted" | "isDeleted" | "createdAt" | "updatedAt", ExtArgs["result"]["invitation"]>
  export type InvitationInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    invitedBy?: boolean | ShopDefaultArgs<ExtArgs>
    targetUser?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type InvitationIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    invitedBy?: boolean | ShopDefaultArgs<ExtArgs>
    targetUser?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type InvitationIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    invitedBy?: boolean | ShopDefaultArgs<ExtArgs>
    targetUser?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $InvitationPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Invitation"
    objects: {
      invitedBy: Prisma.$ShopPayload<ExtArgs>
      targetUser: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      invitedByShopId: string
      targetUserId: string
      accepted: boolean
      isDeleted: boolean
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["invitation"]>
    composites: {}
  }

  type InvitationGetPayload<S extends boolean | null | undefined | InvitationDefaultArgs> = $Result.GetResult<Prisma.$InvitationPayload, S>

  type InvitationCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<InvitationFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: InvitationCountAggregateInputType | true
    }

  export interface InvitationDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Invitation'], meta: { name: 'Invitation' } }
    /**
     * Find zero or one Invitation that matches the filter.
     * @param {InvitationFindUniqueArgs} args - Arguments to find a Invitation
     * @example
     * // Get one Invitation
     * const invitation = await prisma.invitation.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends InvitationFindUniqueArgs>(args: SelectSubset<T, InvitationFindUniqueArgs<ExtArgs>>): Prisma__InvitationClient<$Result.GetResult<Prisma.$InvitationPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Invitation that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {InvitationFindUniqueOrThrowArgs} args - Arguments to find a Invitation
     * @example
     * // Get one Invitation
     * const invitation = await prisma.invitation.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends InvitationFindUniqueOrThrowArgs>(args: SelectSubset<T, InvitationFindUniqueOrThrowArgs<ExtArgs>>): Prisma__InvitationClient<$Result.GetResult<Prisma.$InvitationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Invitation that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InvitationFindFirstArgs} args - Arguments to find a Invitation
     * @example
     * // Get one Invitation
     * const invitation = await prisma.invitation.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends InvitationFindFirstArgs>(args?: SelectSubset<T, InvitationFindFirstArgs<ExtArgs>>): Prisma__InvitationClient<$Result.GetResult<Prisma.$InvitationPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Invitation that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InvitationFindFirstOrThrowArgs} args - Arguments to find a Invitation
     * @example
     * // Get one Invitation
     * const invitation = await prisma.invitation.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends InvitationFindFirstOrThrowArgs>(args?: SelectSubset<T, InvitationFindFirstOrThrowArgs<ExtArgs>>): Prisma__InvitationClient<$Result.GetResult<Prisma.$InvitationPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Invitations that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InvitationFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Invitations
     * const invitations = await prisma.invitation.findMany()
     * 
     * // Get first 10 Invitations
     * const invitations = await prisma.invitation.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const invitationWithIdOnly = await prisma.invitation.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends InvitationFindManyArgs>(args?: SelectSubset<T, InvitationFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$InvitationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Invitation.
     * @param {InvitationCreateArgs} args - Arguments to create a Invitation.
     * @example
     * // Create one Invitation
     * const Invitation = await prisma.invitation.create({
     *   data: {
     *     // ... data to create a Invitation
     *   }
     * })
     * 
     */
    create<T extends InvitationCreateArgs>(args: SelectSubset<T, InvitationCreateArgs<ExtArgs>>): Prisma__InvitationClient<$Result.GetResult<Prisma.$InvitationPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Invitations.
     * @param {InvitationCreateManyArgs} args - Arguments to create many Invitations.
     * @example
     * // Create many Invitations
     * const invitation = await prisma.invitation.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends InvitationCreateManyArgs>(args?: SelectSubset<T, InvitationCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Invitations and returns the data saved in the database.
     * @param {InvitationCreateManyAndReturnArgs} args - Arguments to create many Invitations.
     * @example
     * // Create many Invitations
     * const invitation = await prisma.invitation.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Invitations and only return the `id`
     * const invitationWithIdOnly = await prisma.invitation.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends InvitationCreateManyAndReturnArgs>(args?: SelectSubset<T, InvitationCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$InvitationPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Invitation.
     * @param {InvitationDeleteArgs} args - Arguments to delete one Invitation.
     * @example
     * // Delete one Invitation
     * const Invitation = await prisma.invitation.delete({
     *   where: {
     *     // ... filter to delete one Invitation
     *   }
     * })
     * 
     */
    delete<T extends InvitationDeleteArgs>(args: SelectSubset<T, InvitationDeleteArgs<ExtArgs>>): Prisma__InvitationClient<$Result.GetResult<Prisma.$InvitationPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Invitation.
     * @param {InvitationUpdateArgs} args - Arguments to update one Invitation.
     * @example
     * // Update one Invitation
     * const invitation = await prisma.invitation.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends InvitationUpdateArgs>(args: SelectSubset<T, InvitationUpdateArgs<ExtArgs>>): Prisma__InvitationClient<$Result.GetResult<Prisma.$InvitationPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Invitations.
     * @param {InvitationDeleteManyArgs} args - Arguments to filter Invitations to delete.
     * @example
     * // Delete a few Invitations
     * const { count } = await prisma.invitation.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends InvitationDeleteManyArgs>(args?: SelectSubset<T, InvitationDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Invitations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InvitationUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Invitations
     * const invitation = await prisma.invitation.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends InvitationUpdateManyArgs>(args: SelectSubset<T, InvitationUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Invitations and returns the data updated in the database.
     * @param {InvitationUpdateManyAndReturnArgs} args - Arguments to update many Invitations.
     * @example
     * // Update many Invitations
     * const invitation = await prisma.invitation.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Invitations and only return the `id`
     * const invitationWithIdOnly = await prisma.invitation.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends InvitationUpdateManyAndReturnArgs>(args: SelectSubset<T, InvitationUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$InvitationPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Invitation.
     * @param {InvitationUpsertArgs} args - Arguments to update or create a Invitation.
     * @example
     * // Update or create a Invitation
     * const invitation = await prisma.invitation.upsert({
     *   create: {
     *     // ... data to create a Invitation
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Invitation we want to update
     *   }
     * })
     */
    upsert<T extends InvitationUpsertArgs>(args: SelectSubset<T, InvitationUpsertArgs<ExtArgs>>): Prisma__InvitationClient<$Result.GetResult<Prisma.$InvitationPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Invitations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InvitationCountArgs} args - Arguments to filter Invitations to count.
     * @example
     * // Count the number of Invitations
     * const count = await prisma.invitation.count({
     *   where: {
     *     // ... the filter for the Invitations we want to count
     *   }
     * })
    **/
    count<T extends InvitationCountArgs>(
      args?: Subset<T, InvitationCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], InvitationCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Invitation.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InvitationAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends InvitationAggregateArgs>(args: Subset<T, InvitationAggregateArgs>): Prisma.PrismaPromise<GetInvitationAggregateType<T>>

    /**
     * Group by Invitation.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InvitationGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends InvitationGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: InvitationGroupByArgs['orderBy'] }
        : { orderBy?: InvitationGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, InvitationGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetInvitationGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Invitation model
   */
  readonly fields: InvitationFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Invitation.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__InvitationClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    invitedBy<T extends ShopDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ShopDefaultArgs<ExtArgs>>): Prisma__ShopClient<$Result.GetResult<Prisma.$ShopPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    targetUser<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Invitation model
   */
  interface InvitationFieldRefs {
    readonly id: FieldRef<"Invitation", 'String'>
    readonly invitedByShopId: FieldRef<"Invitation", 'String'>
    readonly targetUserId: FieldRef<"Invitation", 'String'>
    readonly accepted: FieldRef<"Invitation", 'Boolean'>
    readonly isDeleted: FieldRef<"Invitation", 'Boolean'>
    readonly createdAt: FieldRef<"Invitation", 'DateTime'>
    readonly updatedAt: FieldRef<"Invitation", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Invitation findUnique
   */
  export type InvitationFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Invitation
     */
    select?: InvitationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Invitation
     */
    omit?: InvitationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InvitationInclude<ExtArgs> | null
    /**
     * Filter, which Invitation to fetch.
     */
    where: InvitationWhereUniqueInput
  }

  /**
   * Invitation findUniqueOrThrow
   */
  export type InvitationFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Invitation
     */
    select?: InvitationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Invitation
     */
    omit?: InvitationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InvitationInclude<ExtArgs> | null
    /**
     * Filter, which Invitation to fetch.
     */
    where: InvitationWhereUniqueInput
  }

  /**
   * Invitation findFirst
   */
  export type InvitationFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Invitation
     */
    select?: InvitationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Invitation
     */
    omit?: InvitationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InvitationInclude<ExtArgs> | null
    /**
     * Filter, which Invitation to fetch.
     */
    where?: InvitationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Invitations to fetch.
     */
    orderBy?: InvitationOrderByWithRelationInput | InvitationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Invitations.
     */
    cursor?: InvitationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Invitations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Invitations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Invitations.
     */
    distinct?: InvitationScalarFieldEnum | InvitationScalarFieldEnum[]
  }

  /**
   * Invitation findFirstOrThrow
   */
  export type InvitationFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Invitation
     */
    select?: InvitationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Invitation
     */
    omit?: InvitationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InvitationInclude<ExtArgs> | null
    /**
     * Filter, which Invitation to fetch.
     */
    where?: InvitationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Invitations to fetch.
     */
    orderBy?: InvitationOrderByWithRelationInput | InvitationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Invitations.
     */
    cursor?: InvitationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Invitations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Invitations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Invitations.
     */
    distinct?: InvitationScalarFieldEnum | InvitationScalarFieldEnum[]
  }

  /**
   * Invitation findMany
   */
  export type InvitationFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Invitation
     */
    select?: InvitationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Invitation
     */
    omit?: InvitationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InvitationInclude<ExtArgs> | null
    /**
     * Filter, which Invitations to fetch.
     */
    where?: InvitationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Invitations to fetch.
     */
    orderBy?: InvitationOrderByWithRelationInput | InvitationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Invitations.
     */
    cursor?: InvitationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Invitations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Invitations.
     */
    skip?: number
    distinct?: InvitationScalarFieldEnum | InvitationScalarFieldEnum[]
  }

  /**
   * Invitation create
   */
  export type InvitationCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Invitation
     */
    select?: InvitationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Invitation
     */
    omit?: InvitationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InvitationInclude<ExtArgs> | null
    /**
     * The data needed to create a Invitation.
     */
    data: XOR<InvitationCreateInput, InvitationUncheckedCreateInput>
  }

  /**
   * Invitation createMany
   */
  export type InvitationCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Invitations.
     */
    data: InvitationCreateManyInput | InvitationCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Invitation createManyAndReturn
   */
  export type InvitationCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Invitation
     */
    select?: InvitationSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Invitation
     */
    omit?: InvitationOmit<ExtArgs> | null
    /**
     * The data used to create many Invitations.
     */
    data: InvitationCreateManyInput | InvitationCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InvitationIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Invitation update
   */
  export type InvitationUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Invitation
     */
    select?: InvitationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Invitation
     */
    omit?: InvitationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InvitationInclude<ExtArgs> | null
    /**
     * The data needed to update a Invitation.
     */
    data: XOR<InvitationUpdateInput, InvitationUncheckedUpdateInput>
    /**
     * Choose, which Invitation to update.
     */
    where: InvitationWhereUniqueInput
  }

  /**
   * Invitation updateMany
   */
  export type InvitationUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Invitations.
     */
    data: XOR<InvitationUpdateManyMutationInput, InvitationUncheckedUpdateManyInput>
    /**
     * Filter which Invitations to update
     */
    where?: InvitationWhereInput
    /**
     * Limit how many Invitations to update.
     */
    limit?: number
  }

  /**
   * Invitation updateManyAndReturn
   */
  export type InvitationUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Invitation
     */
    select?: InvitationSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Invitation
     */
    omit?: InvitationOmit<ExtArgs> | null
    /**
     * The data used to update Invitations.
     */
    data: XOR<InvitationUpdateManyMutationInput, InvitationUncheckedUpdateManyInput>
    /**
     * Filter which Invitations to update
     */
    where?: InvitationWhereInput
    /**
     * Limit how many Invitations to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InvitationIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Invitation upsert
   */
  export type InvitationUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Invitation
     */
    select?: InvitationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Invitation
     */
    omit?: InvitationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InvitationInclude<ExtArgs> | null
    /**
     * The filter to search for the Invitation to update in case it exists.
     */
    where: InvitationWhereUniqueInput
    /**
     * In case the Invitation found by the `where` argument doesn't exist, create a new Invitation with this data.
     */
    create: XOR<InvitationCreateInput, InvitationUncheckedCreateInput>
    /**
     * In case the Invitation was found with the provided `where` argument, update it with this data.
     */
    update: XOR<InvitationUpdateInput, InvitationUncheckedUpdateInput>
  }

  /**
   * Invitation delete
   */
  export type InvitationDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Invitation
     */
    select?: InvitationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Invitation
     */
    omit?: InvitationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InvitationInclude<ExtArgs> | null
    /**
     * Filter which Invitation to delete.
     */
    where: InvitationWhereUniqueInput
  }

  /**
   * Invitation deleteMany
   */
  export type InvitationDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Invitations to delete
     */
    where?: InvitationWhereInput
    /**
     * Limit how many Invitations to delete.
     */
    limit?: number
  }

  /**
   * Invitation without action
   */
  export type InvitationDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Invitation
     */
    select?: InvitationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Invitation
     */
    omit?: InvitationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InvitationInclude<ExtArgs> | null
  }


  /**
   * Model Operation
   */

  export type AggregateOperation = {
    _count: OperationCountAggregateOutputType | null
    _min: OperationMinAggregateOutputType | null
    _max: OperationMaxAggregateOutputType | null
  }

  export type OperationMinAggregateOutputType = {
    id: string | null
    shopId: string | null
    operationName: string | null
    icon: string | null
    color: string | null
    isDeleted: boolean | null
    createdAt: Date | null
  }

  export type OperationMaxAggregateOutputType = {
    id: string | null
    shopId: string | null
    operationName: string | null
    icon: string | null
    color: string | null
    isDeleted: boolean | null
    createdAt: Date | null
  }

  export type OperationCountAggregateOutputType = {
    id: number
    shopId: number
    operationName: number
    icon: number
    color: number
    isDeleted: number
    createdAt: number
    _all: number
  }


  export type OperationMinAggregateInputType = {
    id?: true
    shopId?: true
    operationName?: true
    icon?: true
    color?: true
    isDeleted?: true
    createdAt?: true
  }

  export type OperationMaxAggregateInputType = {
    id?: true
    shopId?: true
    operationName?: true
    icon?: true
    color?: true
    isDeleted?: true
    createdAt?: true
  }

  export type OperationCountAggregateInputType = {
    id?: true
    shopId?: true
    operationName?: true
    icon?: true
    color?: true
    isDeleted?: true
    createdAt?: true
    _all?: true
  }

  export type OperationAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Operation to aggregate.
     */
    where?: OperationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Operations to fetch.
     */
    orderBy?: OperationOrderByWithRelationInput | OperationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: OperationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Operations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Operations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Operations
    **/
    _count?: true | OperationCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: OperationMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: OperationMaxAggregateInputType
  }

  export type GetOperationAggregateType<T extends OperationAggregateArgs> = {
        [P in keyof T & keyof AggregateOperation]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateOperation[P]>
      : GetScalarType<T[P], AggregateOperation[P]>
  }




  export type OperationGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: OperationWhereInput
    orderBy?: OperationOrderByWithAggregationInput | OperationOrderByWithAggregationInput[]
    by: OperationScalarFieldEnum[] | OperationScalarFieldEnum
    having?: OperationScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: OperationCountAggregateInputType | true
    _min?: OperationMinAggregateInputType
    _max?: OperationMaxAggregateInputType
  }

  export type OperationGroupByOutputType = {
    id: string
    shopId: string
    operationName: string
    icon: string
    color: string
    isDeleted: boolean
    createdAt: Date
    _count: OperationCountAggregateOutputType | null
    _min: OperationMinAggregateOutputType | null
    _max: OperationMaxAggregateOutputType | null
  }

  type GetOperationGroupByPayload<T extends OperationGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<OperationGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof OperationGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], OperationGroupByOutputType[P]>
            : GetScalarType<T[P], OperationGroupByOutputType[P]>
        }
      >
    >


  export type OperationSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    shopId?: boolean
    operationName?: boolean
    icon?: boolean
    color?: boolean
    isDeleted?: boolean
    createdAt?: boolean
    shop?: boolean | ShopDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["operation"]>

  export type OperationSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    shopId?: boolean
    operationName?: boolean
    icon?: boolean
    color?: boolean
    isDeleted?: boolean
    createdAt?: boolean
    shop?: boolean | ShopDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["operation"]>

  export type OperationSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    shopId?: boolean
    operationName?: boolean
    icon?: boolean
    color?: boolean
    isDeleted?: boolean
    createdAt?: boolean
    shop?: boolean | ShopDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["operation"]>

  export type OperationSelectScalar = {
    id?: boolean
    shopId?: boolean
    operationName?: boolean
    icon?: boolean
    color?: boolean
    isDeleted?: boolean
    createdAt?: boolean
  }

  export type OperationOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "shopId" | "operationName" | "icon" | "color" | "isDeleted" | "createdAt", ExtArgs["result"]["operation"]>
  export type OperationInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    shop?: boolean | ShopDefaultArgs<ExtArgs>
  }
  export type OperationIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    shop?: boolean | ShopDefaultArgs<ExtArgs>
  }
  export type OperationIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    shop?: boolean | ShopDefaultArgs<ExtArgs>
  }

  export type $OperationPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Operation"
    objects: {
      shop: Prisma.$ShopPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      shopId: string
      operationName: string
      icon: string
      color: string
      isDeleted: boolean
      createdAt: Date
    }, ExtArgs["result"]["operation"]>
    composites: {}
  }

  type OperationGetPayload<S extends boolean | null | undefined | OperationDefaultArgs> = $Result.GetResult<Prisma.$OperationPayload, S>

  type OperationCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<OperationFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: OperationCountAggregateInputType | true
    }

  export interface OperationDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Operation'], meta: { name: 'Operation' } }
    /**
     * Find zero or one Operation that matches the filter.
     * @param {OperationFindUniqueArgs} args - Arguments to find a Operation
     * @example
     * // Get one Operation
     * const operation = await prisma.operation.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends OperationFindUniqueArgs>(args: SelectSubset<T, OperationFindUniqueArgs<ExtArgs>>): Prisma__OperationClient<$Result.GetResult<Prisma.$OperationPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Operation that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {OperationFindUniqueOrThrowArgs} args - Arguments to find a Operation
     * @example
     * // Get one Operation
     * const operation = await prisma.operation.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends OperationFindUniqueOrThrowArgs>(args: SelectSubset<T, OperationFindUniqueOrThrowArgs<ExtArgs>>): Prisma__OperationClient<$Result.GetResult<Prisma.$OperationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Operation that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OperationFindFirstArgs} args - Arguments to find a Operation
     * @example
     * // Get one Operation
     * const operation = await prisma.operation.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends OperationFindFirstArgs>(args?: SelectSubset<T, OperationFindFirstArgs<ExtArgs>>): Prisma__OperationClient<$Result.GetResult<Prisma.$OperationPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Operation that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OperationFindFirstOrThrowArgs} args - Arguments to find a Operation
     * @example
     * // Get one Operation
     * const operation = await prisma.operation.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends OperationFindFirstOrThrowArgs>(args?: SelectSubset<T, OperationFindFirstOrThrowArgs<ExtArgs>>): Prisma__OperationClient<$Result.GetResult<Prisma.$OperationPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Operations that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OperationFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Operations
     * const operations = await prisma.operation.findMany()
     * 
     * // Get first 10 Operations
     * const operations = await prisma.operation.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const operationWithIdOnly = await prisma.operation.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends OperationFindManyArgs>(args?: SelectSubset<T, OperationFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OperationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Operation.
     * @param {OperationCreateArgs} args - Arguments to create a Operation.
     * @example
     * // Create one Operation
     * const Operation = await prisma.operation.create({
     *   data: {
     *     // ... data to create a Operation
     *   }
     * })
     * 
     */
    create<T extends OperationCreateArgs>(args: SelectSubset<T, OperationCreateArgs<ExtArgs>>): Prisma__OperationClient<$Result.GetResult<Prisma.$OperationPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Operations.
     * @param {OperationCreateManyArgs} args - Arguments to create many Operations.
     * @example
     * // Create many Operations
     * const operation = await prisma.operation.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends OperationCreateManyArgs>(args?: SelectSubset<T, OperationCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Operations and returns the data saved in the database.
     * @param {OperationCreateManyAndReturnArgs} args - Arguments to create many Operations.
     * @example
     * // Create many Operations
     * const operation = await prisma.operation.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Operations and only return the `id`
     * const operationWithIdOnly = await prisma.operation.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends OperationCreateManyAndReturnArgs>(args?: SelectSubset<T, OperationCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OperationPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Operation.
     * @param {OperationDeleteArgs} args - Arguments to delete one Operation.
     * @example
     * // Delete one Operation
     * const Operation = await prisma.operation.delete({
     *   where: {
     *     // ... filter to delete one Operation
     *   }
     * })
     * 
     */
    delete<T extends OperationDeleteArgs>(args: SelectSubset<T, OperationDeleteArgs<ExtArgs>>): Prisma__OperationClient<$Result.GetResult<Prisma.$OperationPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Operation.
     * @param {OperationUpdateArgs} args - Arguments to update one Operation.
     * @example
     * // Update one Operation
     * const operation = await prisma.operation.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends OperationUpdateArgs>(args: SelectSubset<T, OperationUpdateArgs<ExtArgs>>): Prisma__OperationClient<$Result.GetResult<Prisma.$OperationPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Operations.
     * @param {OperationDeleteManyArgs} args - Arguments to filter Operations to delete.
     * @example
     * // Delete a few Operations
     * const { count } = await prisma.operation.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends OperationDeleteManyArgs>(args?: SelectSubset<T, OperationDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Operations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OperationUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Operations
     * const operation = await prisma.operation.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends OperationUpdateManyArgs>(args: SelectSubset<T, OperationUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Operations and returns the data updated in the database.
     * @param {OperationUpdateManyAndReturnArgs} args - Arguments to update many Operations.
     * @example
     * // Update many Operations
     * const operation = await prisma.operation.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Operations and only return the `id`
     * const operationWithIdOnly = await prisma.operation.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends OperationUpdateManyAndReturnArgs>(args: SelectSubset<T, OperationUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OperationPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Operation.
     * @param {OperationUpsertArgs} args - Arguments to update or create a Operation.
     * @example
     * // Update or create a Operation
     * const operation = await prisma.operation.upsert({
     *   create: {
     *     // ... data to create a Operation
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Operation we want to update
     *   }
     * })
     */
    upsert<T extends OperationUpsertArgs>(args: SelectSubset<T, OperationUpsertArgs<ExtArgs>>): Prisma__OperationClient<$Result.GetResult<Prisma.$OperationPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Operations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OperationCountArgs} args - Arguments to filter Operations to count.
     * @example
     * // Count the number of Operations
     * const count = await prisma.operation.count({
     *   where: {
     *     // ... the filter for the Operations we want to count
     *   }
     * })
    **/
    count<T extends OperationCountArgs>(
      args?: Subset<T, OperationCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], OperationCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Operation.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OperationAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends OperationAggregateArgs>(args: Subset<T, OperationAggregateArgs>): Prisma.PrismaPromise<GetOperationAggregateType<T>>

    /**
     * Group by Operation.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OperationGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends OperationGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: OperationGroupByArgs['orderBy'] }
        : { orderBy?: OperationGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, OperationGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetOperationGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Operation model
   */
  readonly fields: OperationFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Operation.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__OperationClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    shop<T extends ShopDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ShopDefaultArgs<ExtArgs>>): Prisma__ShopClient<$Result.GetResult<Prisma.$ShopPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Operation model
   */
  interface OperationFieldRefs {
    readonly id: FieldRef<"Operation", 'String'>
    readonly shopId: FieldRef<"Operation", 'String'>
    readonly operationName: FieldRef<"Operation", 'String'>
    readonly icon: FieldRef<"Operation", 'String'>
    readonly color: FieldRef<"Operation", 'String'>
    readonly isDeleted: FieldRef<"Operation", 'Boolean'>
    readonly createdAt: FieldRef<"Operation", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Operation findUnique
   */
  export type OperationFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Operation
     */
    select?: OperationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Operation
     */
    omit?: OperationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OperationInclude<ExtArgs> | null
    /**
     * Filter, which Operation to fetch.
     */
    where: OperationWhereUniqueInput
  }

  /**
   * Operation findUniqueOrThrow
   */
  export type OperationFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Operation
     */
    select?: OperationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Operation
     */
    omit?: OperationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OperationInclude<ExtArgs> | null
    /**
     * Filter, which Operation to fetch.
     */
    where: OperationWhereUniqueInput
  }

  /**
   * Operation findFirst
   */
  export type OperationFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Operation
     */
    select?: OperationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Operation
     */
    omit?: OperationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OperationInclude<ExtArgs> | null
    /**
     * Filter, which Operation to fetch.
     */
    where?: OperationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Operations to fetch.
     */
    orderBy?: OperationOrderByWithRelationInput | OperationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Operations.
     */
    cursor?: OperationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Operations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Operations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Operations.
     */
    distinct?: OperationScalarFieldEnum | OperationScalarFieldEnum[]
  }

  /**
   * Operation findFirstOrThrow
   */
  export type OperationFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Operation
     */
    select?: OperationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Operation
     */
    omit?: OperationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OperationInclude<ExtArgs> | null
    /**
     * Filter, which Operation to fetch.
     */
    where?: OperationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Operations to fetch.
     */
    orderBy?: OperationOrderByWithRelationInput | OperationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Operations.
     */
    cursor?: OperationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Operations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Operations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Operations.
     */
    distinct?: OperationScalarFieldEnum | OperationScalarFieldEnum[]
  }

  /**
   * Operation findMany
   */
  export type OperationFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Operation
     */
    select?: OperationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Operation
     */
    omit?: OperationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OperationInclude<ExtArgs> | null
    /**
     * Filter, which Operations to fetch.
     */
    where?: OperationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Operations to fetch.
     */
    orderBy?: OperationOrderByWithRelationInput | OperationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Operations.
     */
    cursor?: OperationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Operations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Operations.
     */
    skip?: number
    distinct?: OperationScalarFieldEnum | OperationScalarFieldEnum[]
  }

  /**
   * Operation create
   */
  export type OperationCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Operation
     */
    select?: OperationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Operation
     */
    omit?: OperationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OperationInclude<ExtArgs> | null
    /**
     * The data needed to create a Operation.
     */
    data: XOR<OperationCreateInput, OperationUncheckedCreateInput>
  }

  /**
   * Operation createMany
   */
  export type OperationCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Operations.
     */
    data: OperationCreateManyInput | OperationCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Operation createManyAndReturn
   */
  export type OperationCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Operation
     */
    select?: OperationSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Operation
     */
    omit?: OperationOmit<ExtArgs> | null
    /**
     * The data used to create many Operations.
     */
    data: OperationCreateManyInput | OperationCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OperationIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Operation update
   */
  export type OperationUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Operation
     */
    select?: OperationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Operation
     */
    omit?: OperationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OperationInclude<ExtArgs> | null
    /**
     * The data needed to update a Operation.
     */
    data: XOR<OperationUpdateInput, OperationUncheckedUpdateInput>
    /**
     * Choose, which Operation to update.
     */
    where: OperationWhereUniqueInput
  }

  /**
   * Operation updateMany
   */
  export type OperationUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Operations.
     */
    data: XOR<OperationUpdateManyMutationInput, OperationUncheckedUpdateManyInput>
    /**
     * Filter which Operations to update
     */
    where?: OperationWhereInput
    /**
     * Limit how many Operations to update.
     */
    limit?: number
  }

  /**
   * Operation updateManyAndReturn
   */
  export type OperationUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Operation
     */
    select?: OperationSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Operation
     */
    omit?: OperationOmit<ExtArgs> | null
    /**
     * The data used to update Operations.
     */
    data: XOR<OperationUpdateManyMutationInput, OperationUncheckedUpdateManyInput>
    /**
     * Filter which Operations to update
     */
    where?: OperationWhereInput
    /**
     * Limit how many Operations to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OperationIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Operation upsert
   */
  export type OperationUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Operation
     */
    select?: OperationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Operation
     */
    omit?: OperationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OperationInclude<ExtArgs> | null
    /**
     * The filter to search for the Operation to update in case it exists.
     */
    where: OperationWhereUniqueInput
    /**
     * In case the Operation found by the `where` argument doesn't exist, create a new Operation with this data.
     */
    create: XOR<OperationCreateInput, OperationUncheckedCreateInput>
    /**
     * In case the Operation was found with the provided `where` argument, update it with this data.
     */
    update: XOR<OperationUpdateInput, OperationUncheckedUpdateInput>
  }

  /**
   * Operation delete
   */
  export type OperationDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Operation
     */
    select?: OperationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Operation
     */
    omit?: OperationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OperationInclude<ExtArgs> | null
    /**
     * Filter which Operation to delete.
     */
    where: OperationWhereUniqueInput
  }

  /**
   * Operation deleteMany
   */
  export type OperationDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Operations to delete
     */
    where?: OperationWhereInput
    /**
     * Limit how many Operations to delete.
     */
    limit?: number
  }

  /**
   * Operation without action
   */
  export type OperationDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Operation
     */
    select?: OperationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Operation
     */
    omit?: OperationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OperationInclude<ExtArgs> | null
  }


  /**
   * Model StableShift
   */

  export type AggregateStableShift = {
    _count: StableShiftCountAggregateOutputType | null
    _min: StableShiftMinAggregateOutputType | null
    _max: StableShiftMaxAggregateOutputType | null
  }

  export type StableShiftMinAggregateOutputType = {
    id: string | null
    shopId: string | null
    userId: string | null
    workFrom: Date | null
    workTo: Date | null
    breakFrom: Date | null
    breakTo: Date | null
    isDeleted: boolean | null
    createdAt: Date | null
  }

  export type StableShiftMaxAggregateOutputType = {
    id: string | null
    shopId: string | null
    userId: string | null
    workFrom: Date | null
    workTo: Date | null
    breakFrom: Date | null
    breakTo: Date | null
    isDeleted: boolean | null
    createdAt: Date | null
  }

  export type StableShiftCountAggregateOutputType = {
    id: number
    shopId: number
    userId: number
    workFrom: number
    workTo: number
    breakFrom: number
    breakTo: number
    isDeleted: number
    createdAt: number
    _all: number
  }


  export type StableShiftMinAggregateInputType = {
    id?: true
    shopId?: true
    userId?: true
    workFrom?: true
    workTo?: true
    breakFrom?: true
    breakTo?: true
    isDeleted?: true
    createdAt?: true
  }

  export type StableShiftMaxAggregateInputType = {
    id?: true
    shopId?: true
    userId?: true
    workFrom?: true
    workTo?: true
    breakFrom?: true
    breakTo?: true
    isDeleted?: true
    createdAt?: true
  }

  export type StableShiftCountAggregateInputType = {
    id?: true
    shopId?: true
    userId?: true
    workFrom?: true
    workTo?: true
    breakFrom?: true
    breakTo?: true
    isDeleted?: true
    createdAt?: true
    _all?: true
  }

  export type StableShiftAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which StableShift to aggregate.
     */
    where?: StableShiftWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of StableShifts to fetch.
     */
    orderBy?: StableShiftOrderByWithRelationInput | StableShiftOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: StableShiftWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` StableShifts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` StableShifts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned StableShifts
    **/
    _count?: true | StableShiftCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: StableShiftMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: StableShiftMaxAggregateInputType
  }

  export type GetStableShiftAggregateType<T extends StableShiftAggregateArgs> = {
        [P in keyof T & keyof AggregateStableShift]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateStableShift[P]>
      : GetScalarType<T[P], AggregateStableShift[P]>
  }




  export type StableShiftGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: StableShiftWhereInput
    orderBy?: StableShiftOrderByWithAggregationInput | StableShiftOrderByWithAggregationInput[]
    by: StableShiftScalarFieldEnum[] | StableShiftScalarFieldEnum
    having?: StableShiftScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: StableShiftCountAggregateInputType | true
    _min?: StableShiftMinAggregateInputType
    _max?: StableShiftMaxAggregateInputType
  }

  export type StableShiftGroupByOutputType = {
    id: string
    shopId: string
    userId: string
    workFrom: Date
    workTo: Date
    breakFrom: Date
    breakTo: Date
    isDeleted: boolean
    createdAt: Date
    _count: StableShiftCountAggregateOutputType | null
    _min: StableShiftMinAggregateOutputType | null
    _max: StableShiftMaxAggregateOutputType | null
  }

  type GetStableShiftGroupByPayload<T extends StableShiftGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<StableShiftGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof StableShiftGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], StableShiftGroupByOutputType[P]>
            : GetScalarType<T[P], StableShiftGroupByOutputType[P]>
        }
      >
    >


  export type StableShiftSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    shopId?: boolean
    userId?: boolean
    workFrom?: boolean
    workTo?: boolean
    breakFrom?: boolean
    breakTo?: boolean
    isDeleted?: boolean
    createdAt?: boolean
    shop?: boolean | ShopDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["stableShift"]>

  export type StableShiftSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    shopId?: boolean
    userId?: boolean
    workFrom?: boolean
    workTo?: boolean
    breakFrom?: boolean
    breakTo?: boolean
    isDeleted?: boolean
    createdAt?: boolean
    shop?: boolean | ShopDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["stableShift"]>

  export type StableShiftSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    shopId?: boolean
    userId?: boolean
    workFrom?: boolean
    workTo?: boolean
    breakFrom?: boolean
    breakTo?: boolean
    isDeleted?: boolean
    createdAt?: boolean
    shop?: boolean | ShopDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["stableShift"]>

  export type StableShiftSelectScalar = {
    id?: boolean
    shopId?: boolean
    userId?: boolean
    workFrom?: boolean
    workTo?: boolean
    breakFrom?: boolean
    breakTo?: boolean
    isDeleted?: boolean
    createdAt?: boolean
  }

  export type StableShiftOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "shopId" | "userId" | "workFrom" | "workTo" | "breakFrom" | "breakTo" | "isDeleted" | "createdAt", ExtArgs["result"]["stableShift"]>
  export type StableShiftInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    shop?: boolean | ShopDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type StableShiftIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    shop?: boolean | ShopDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type StableShiftIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    shop?: boolean | ShopDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $StableShiftPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "StableShift"
    objects: {
      shop: Prisma.$ShopPayload<ExtArgs>
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      shopId: string
      userId: string
      workFrom: Date
      workTo: Date
      breakFrom: Date
      breakTo: Date
      isDeleted: boolean
      createdAt: Date
    }, ExtArgs["result"]["stableShift"]>
    composites: {}
  }

  type StableShiftGetPayload<S extends boolean | null | undefined | StableShiftDefaultArgs> = $Result.GetResult<Prisma.$StableShiftPayload, S>

  type StableShiftCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<StableShiftFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: StableShiftCountAggregateInputType | true
    }

  export interface StableShiftDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['StableShift'], meta: { name: 'StableShift' } }
    /**
     * Find zero or one StableShift that matches the filter.
     * @param {StableShiftFindUniqueArgs} args - Arguments to find a StableShift
     * @example
     * // Get one StableShift
     * const stableShift = await prisma.stableShift.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends StableShiftFindUniqueArgs>(args: SelectSubset<T, StableShiftFindUniqueArgs<ExtArgs>>): Prisma__StableShiftClient<$Result.GetResult<Prisma.$StableShiftPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one StableShift that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {StableShiftFindUniqueOrThrowArgs} args - Arguments to find a StableShift
     * @example
     * // Get one StableShift
     * const stableShift = await prisma.stableShift.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends StableShiftFindUniqueOrThrowArgs>(args: SelectSubset<T, StableShiftFindUniqueOrThrowArgs<ExtArgs>>): Prisma__StableShiftClient<$Result.GetResult<Prisma.$StableShiftPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first StableShift that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StableShiftFindFirstArgs} args - Arguments to find a StableShift
     * @example
     * // Get one StableShift
     * const stableShift = await prisma.stableShift.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends StableShiftFindFirstArgs>(args?: SelectSubset<T, StableShiftFindFirstArgs<ExtArgs>>): Prisma__StableShiftClient<$Result.GetResult<Prisma.$StableShiftPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first StableShift that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StableShiftFindFirstOrThrowArgs} args - Arguments to find a StableShift
     * @example
     * // Get one StableShift
     * const stableShift = await prisma.stableShift.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends StableShiftFindFirstOrThrowArgs>(args?: SelectSubset<T, StableShiftFindFirstOrThrowArgs<ExtArgs>>): Prisma__StableShiftClient<$Result.GetResult<Prisma.$StableShiftPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more StableShifts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StableShiftFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all StableShifts
     * const stableShifts = await prisma.stableShift.findMany()
     * 
     * // Get first 10 StableShifts
     * const stableShifts = await prisma.stableShift.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const stableShiftWithIdOnly = await prisma.stableShift.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends StableShiftFindManyArgs>(args?: SelectSubset<T, StableShiftFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StableShiftPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a StableShift.
     * @param {StableShiftCreateArgs} args - Arguments to create a StableShift.
     * @example
     * // Create one StableShift
     * const StableShift = await prisma.stableShift.create({
     *   data: {
     *     // ... data to create a StableShift
     *   }
     * })
     * 
     */
    create<T extends StableShiftCreateArgs>(args: SelectSubset<T, StableShiftCreateArgs<ExtArgs>>): Prisma__StableShiftClient<$Result.GetResult<Prisma.$StableShiftPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many StableShifts.
     * @param {StableShiftCreateManyArgs} args - Arguments to create many StableShifts.
     * @example
     * // Create many StableShifts
     * const stableShift = await prisma.stableShift.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends StableShiftCreateManyArgs>(args?: SelectSubset<T, StableShiftCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many StableShifts and returns the data saved in the database.
     * @param {StableShiftCreateManyAndReturnArgs} args - Arguments to create many StableShifts.
     * @example
     * // Create many StableShifts
     * const stableShift = await prisma.stableShift.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many StableShifts and only return the `id`
     * const stableShiftWithIdOnly = await prisma.stableShift.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends StableShiftCreateManyAndReturnArgs>(args?: SelectSubset<T, StableShiftCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StableShiftPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a StableShift.
     * @param {StableShiftDeleteArgs} args - Arguments to delete one StableShift.
     * @example
     * // Delete one StableShift
     * const StableShift = await prisma.stableShift.delete({
     *   where: {
     *     // ... filter to delete one StableShift
     *   }
     * })
     * 
     */
    delete<T extends StableShiftDeleteArgs>(args: SelectSubset<T, StableShiftDeleteArgs<ExtArgs>>): Prisma__StableShiftClient<$Result.GetResult<Prisma.$StableShiftPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one StableShift.
     * @param {StableShiftUpdateArgs} args - Arguments to update one StableShift.
     * @example
     * // Update one StableShift
     * const stableShift = await prisma.stableShift.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends StableShiftUpdateArgs>(args: SelectSubset<T, StableShiftUpdateArgs<ExtArgs>>): Prisma__StableShiftClient<$Result.GetResult<Prisma.$StableShiftPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more StableShifts.
     * @param {StableShiftDeleteManyArgs} args - Arguments to filter StableShifts to delete.
     * @example
     * // Delete a few StableShifts
     * const { count } = await prisma.stableShift.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends StableShiftDeleteManyArgs>(args?: SelectSubset<T, StableShiftDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more StableShifts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StableShiftUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many StableShifts
     * const stableShift = await prisma.stableShift.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends StableShiftUpdateManyArgs>(args: SelectSubset<T, StableShiftUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more StableShifts and returns the data updated in the database.
     * @param {StableShiftUpdateManyAndReturnArgs} args - Arguments to update many StableShifts.
     * @example
     * // Update many StableShifts
     * const stableShift = await prisma.stableShift.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more StableShifts and only return the `id`
     * const stableShiftWithIdOnly = await prisma.stableShift.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends StableShiftUpdateManyAndReturnArgs>(args: SelectSubset<T, StableShiftUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StableShiftPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one StableShift.
     * @param {StableShiftUpsertArgs} args - Arguments to update or create a StableShift.
     * @example
     * // Update or create a StableShift
     * const stableShift = await prisma.stableShift.upsert({
     *   create: {
     *     // ... data to create a StableShift
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the StableShift we want to update
     *   }
     * })
     */
    upsert<T extends StableShiftUpsertArgs>(args: SelectSubset<T, StableShiftUpsertArgs<ExtArgs>>): Prisma__StableShiftClient<$Result.GetResult<Prisma.$StableShiftPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of StableShifts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StableShiftCountArgs} args - Arguments to filter StableShifts to count.
     * @example
     * // Count the number of StableShifts
     * const count = await prisma.stableShift.count({
     *   where: {
     *     // ... the filter for the StableShifts we want to count
     *   }
     * })
    **/
    count<T extends StableShiftCountArgs>(
      args?: Subset<T, StableShiftCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], StableShiftCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a StableShift.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StableShiftAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends StableShiftAggregateArgs>(args: Subset<T, StableShiftAggregateArgs>): Prisma.PrismaPromise<GetStableShiftAggregateType<T>>

    /**
     * Group by StableShift.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StableShiftGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends StableShiftGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: StableShiftGroupByArgs['orderBy'] }
        : { orderBy?: StableShiftGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, StableShiftGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetStableShiftGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the StableShift model
   */
  readonly fields: StableShiftFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for StableShift.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__StableShiftClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    shop<T extends ShopDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ShopDefaultArgs<ExtArgs>>): Prisma__ShopClient<$Result.GetResult<Prisma.$ShopPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the StableShift model
   */
  interface StableShiftFieldRefs {
    readonly id: FieldRef<"StableShift", 'String'>
    readonly shopId: FieldRef<"StableShift", 'String'>
    readonly userId: FieldRef<"StableShift", 'String'>
    readonly workFrom: FieldRef<"StableShift", 'DateTime'>
    readonly workTo: FieldRef<"StableShift", 'DateTime'>
    readonly breakFrom: FieldRef<"StableShift", 'DateTime'>
    readonly breakTo: FieldRef<"StableShift", 'DateTime'>
    readonly isDeleted: FieldRef<"StableShift", 'Boolean'>
    readonly createdAt: FieldRef<"StableShift", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * StableShift findUnique
   */
  export type StableShiftFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StableShift
     */
    select?: StableShiftSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StableShift
     */
    omit?: StableShiftOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StableShiftInclude<ExtArgs> | null
    /**
     * Filter, which StableShift to fetch.
     */
    where: StableShiftWhereUniqueInput
  }

  /**
   * StableShift findUniqueOrThrow
   */
  export type StableShiftFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StableShift
     */
    select?: StableShiftSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StableShift
     */
    omit?: StableShiftOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StableShiftInclude<ExtArgs> | null
    /**
     * Filter, which StableShift to fetch.
     */
    where: StableShiftWhereUniqueInput
  }

  /**
   * StableShift findFirst
   */
  export type StableShiftFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StableShift
     */
    select?: StableShiftSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StableShift
     */
    omit?: StableShiftOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StableShiftInclude<ExtArgs> | null
    /**
     * Filter, which StableShift to fetch.
     */
    where?: StableShiftWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of StableShifts to fetch.
     */
    orderBy?: StableShiftOrderByWithRelationInput | StableShiftOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for StableShifts.
     */
    cursor?: StableShiftWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` StableShifts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` StableShifts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of StableShifts.
     */
    distinct?: StableShiftScalarFieldEnum | StableShiftScalarFieldEnum[]
  }

  /**
   * StableShift findFirstOrThrow
   */
  export type StableShiftFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StableShift
     */
    select?: StableShiftSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StableShift
     */
    omit?: StableShiftOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StableShiftInclude<ExtArgs> | null
    /**
     * Filter, which StableShift to fetch.
     */
    where?: StableShiftWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of StableShifts to fetch.
     */
    orderBy?: StableShiftOrderByWithRelationInput | StableShiftOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for StableShifts.
     */
    cursor?: StableShiftWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` StableShifts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` StableShifts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of StableShifts.
     */
    distinct?: StableShiftScalarFieldEnum | StableShiftScalarFieldEnum[]
  }

  /**
   * StableShift findMany
   */
  export type StableShiftFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StableShift
     */
    select?: StableShiftSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StableShift
     */
    omit?: StableShiftOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StableShiftInclude<ExtArgs> | null
    /**
     * Filter, which StableShifts to fetch.
     */
    where?: StableShiftWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of StableShifts to fetch.
     */
    orderBy?: StableShiftOrderByWithRelationInput | StableShiftOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing StableShifts.
     */
    cursor?: StableShiftWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` StableShifts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` StableShifts.
     */
    skip?: number
    distinct?: StableShiftScalarFieldEnum | StableShiftScalarFieldEnum[]
  }

  /**
   * StableShift create
   */
  export type StableShiftCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StableShift
     */
    select?: StableShiftSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StableShift
     */
    omit?: StableShiftOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StableShiftInclude<ExtArgs> | null
    /**
     * The data needed to create a StableShift.
     */
    data: XOR<StableShiftCreateInput, StableShiftUncheckedCreateInput>
  }

  /**
   * StableShift createMany
   */
  export type StableShiftCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many StableShifts.
     */
    data: StableShiftCreateManyInput | StableShiftCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * StableShift createManyAndReturn
   */
  export type StableShiftCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StableShift
     */
    select?: StableShiftSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the StableShift
     */
    omit?: StableShiftOmit<ExtArgs> | null
    /**
     * The data used to create many StableShifts.
     */
    data: StableShiftCreateManyInput | StableShiftCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StableShiftIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * StableShift update
   */
  export type StableShiftUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StableShift
     */
    select?: StableShiftSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StableShift
     */
    omit?: StableShiftOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StableShiftInclude<ExtArgs> | null
    /**
     * The data needed to update a StableShift.
     */
    data: XOR<StableShiftUpdateInput, StableShiftUncheckedUpdateInput>
    /**
     * Choose, which StableShift to update.
     */
    where: StableShiftWhereUniqueInput
  }

  /**
   * StableShift updateMany
   */
  export type StableShiftUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update StableShifts.
     */
    data: XOR<StableShiftUpdateManyMutationInput, StableShiftUncheckedUpdateManyInput>
    /**
     * Filter which StableShifts to update
     */
    where?: StableShiftWhereInput
    /**
     * Limit how many StableShifts to update.
     */
    limit?: number
  }

  /**
   * StableShift updateManyAndReturn
   */
  export type StableShiftUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StableShift
     */
    select?: StableShiftSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the StableShift
     */
    omit?: StableShiftOmit<ExtArgs> | null
    /**
     * The data used to update StableShifts.
     */
    data: XOR<StableShiftUpdateManyMutationInput, StableShiftUncheckedUpdateManyInput>
    /**
     * Filter which StableShifts to update
     */
    where?: StableShiftWhereInput
    /**
     * Limit how many StableShifts to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StableShiftIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * StableShift upsert
   */
  export type StableShiftUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StableShift
     */
    select?: StableShiftSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StableShift
     */
    omit?: StableShiftOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StableShiftInclude<ExtArgs> | null
    /**
     * The filter to search for the StableShift to update in case it exists.
     */
    where: StableShiftWhereUniqueInput
    /**
     * In case the StableShift found by the `where` argument doesn't exist, create a new StableShift with this data.
     */
    create: XOR<StableShiftCreateInput, StableShiftUncheckedCreateInput>
    /**
     * In case the StableShift was found with the provided `where` argument, update it with this data.
     */
    update: XOR<StableShiftUpdateInput, StableShiftUncheckedUpdateInput>
  }

  /**
   * StableShift delete
   */
  export type StableShiftDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StableShift
     */
    select?: StableShiftSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StableShift
     */
    omit?: StableShiftOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StableShiftInclude<ExtArgs> | null
    /**
     * Filter which StableShift to delete.
     */
    where: StableShiftWhereUniqueInput
  }

  /**
   * StableShift deleteMany
   */
  export type StableShiftDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which StableShifts to delete
     */
    where?: StableShiftWhereInput
    /**
     * Limit how many StableShifts to delete.
     */
    limit?: number
  }

  /**
   * StableShift without action
   */
  export type StableShiftDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StableShift
     */
    select?: StableShiftSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StableShift
     */
    omit?: StableShiftOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StableShiftInclude<ExtArgs> | null
  }


  /**
   * Model UnstableShift
   */

  export type AggregateUnstableShift = {
    _count: UnstableShiftCountAggregateOutputType | null
    _min: UnstableShiftMinAggregateOutputType | null
    _max: UnstableShiftMaxAggregateOutputType | null
  }

  export type UnstableShiftMinAggregateOutputType = {
    id: string | null
    shopId: string | null
    userId: string | null
    workFrom: Date | null
    workTo: Date | null
    breakFrom: Date | null
    breakTo: Date | null
    isDeleted: boolean | null
    createdAt: Date | null
  }

  export type UnstableShiftMaxAggregateOutputType = {
    id: string | null
    shopId: string | null
    userId: string | null
    workFrom: Date | null
    workTo: Date | null
    breakFrom: Date | null
    breakTo: Date | null
    isDeleted: boolean | null
    createdAt: Date | null
  }

  export type UnstableShiftCountAggregateOutputType = {
    id: number
    shopId: number
    userId: number
    workFrom: number
    workTo: number
    breakFrom: number
    breakTo: number
    isDeleted: number
    createdAt: number
    _all: number
  }


  export type UnstableShiftMinAggregateInputType = {
    id?: true
    shopId?: true
    userId?: true
    workFrom?: true
    workTo?: true
    breakFrom?: true
    breakTo?: true
    isDeleted?: true
    createdAt?: true
  }

  export type UnstableShiftMaxAggregateInputType = {
    id?: true
    shopId?: true
    userId?: true
    workFrom?: true
    workTo?: true
    breakFrom?: true
    breakTo?: true
    isDeleted?: true
    createdAt?: true
  }

  export type UnstableShiftCountAggregateInputType = {
    id?: true
    shopId?: true
    userId?: true
    workFrom?: true
    workTo?: true
    breakFrom?: true
    breakTo?: true
    isDeleted?: true
    createdAt?: true
    _all?: true
  }

  export type UnstableShiftAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UnstableShift to aggregate.
     */
    where?: UnstableShiftWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UnstableShifts to fetch.
     */
    orderBy?: UnstableShiftOrderByWithRelationInput | UnstableShiftOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UnstableShiftWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UnstableShifts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UnstableShifts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned UnstableShifts
    **/
    _count?: true | UnstableShiftCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UnstableShiftMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UnstableShiftMaxAggregateInputType
  }

  export type GetUnstableShiftAggregateType<T extends UnstableShiftAggregateArgs> = {
        [P in keyof T & keyof AggregateUnstableShift]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUnstableShift[P]>
      : GetScalarType<T[P], AggregateUnstableShift[P]>
  }




  export type UnstableShiftGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UnstableShiftWhereInput
    orderBy?: UnstableShiftOrderByWithAggregationInput | UnstableShiftOrderByWithAggregationInput[]
    by: UnstableShiftScalarFieldEnum[] | UnstableShiftScalarFieldEnum
    having?: UnstableShiftScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UnstableShiftCountAggregateInputType | true
    _min?: UnstableShiftMinAggregateInputType
    _max?: UnstableShiftMaxAggregateInputType
  }

  export type UnstableShiftGroupByOutputType = {
    id: string
    shopId: string
    userId: string
    workFrom: Date
    workTo: Date
    breakFrom: Date
    breakTo: Date
    isDeleted: boolean
    createdAt: Date
    _count: UnstableShiftCountAggregateOutputType | null
    _min: UnstableShiftMinAggregateOutputType | null
    _max: UnstableShiftMaxAggregateOutputType | null
  }

  type GetUnstableShiftGroupByPayload<T extends UnstableShiftGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UnstableShiftGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UnstableShiftGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UnstableShiftGroupByOutputType[P]>
            : GetScalarType<T[P], UnstableShiftGroupByOutputType[P]>
        }
      >
    >


  export type UnstableShiftSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    shopId?: boolean
    userId?: boolean
    workFrom?: boolean
    workTo?: boolean
    breakFrom?: boolean
    breakTo?: boolean
    isDeleted?: boolean
    createdAt?: boolean
    shop?: boolean | ShopDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["unstableShift"]>

  export type UnstableShiftSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    shopId?: boolean
    userId?: boolean
    workFrom?: boolean
    workTo?: boolean
    breakFrom?: boolean
    breakTo?: boolean
    isDeleted?: boolean
    createdAt?: boolean
    shop?: boolean | ShopDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["unstableShift"]>

  export type UnstableShiftSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    shopId?: boolean
    userId?: boolean
    workFrom?: boolean
    workTo?: boolean
    breakFrom?: boolean
    breakTo?: boolean
    isDeleted?: boolean
    createdAt?: boolean
    shop?: boolean | ShopDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["unstableShift"]>

  export type UnstableShiftSelectScalar = {
    id?: boolean
    shopId?: boolean
    userId?: boolean
    workFrom?: boolean
    workTo?: boolean
    breakFrom?: boolean
    breakTo?: boolean
    isDeleted?: boolean
    createdAt?: boolean
  }

  export type UnstableShiftOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "shopId" | "userId" | "workFrom" | "workTo" | "breakFrom" | "breakTo" | "isDeleted" | "createdAt", ExtArgs["result"]["unstableShift"]>
  export type UnstableShiftInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    shop?: boolean | ShopDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type UnstableShiftIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    shop?: boolean | ShopDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type UnstableShiftIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    shop?: boolean | ShopDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $UnstableShiftPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "UnstableShift"
    objects: {
      shop: Prisma.$ShopPayload<ExtArgs>
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      shopId: string
      userId: string
      workFrom: Date
      workTo: Date
      breakFrom: Date
      breakTo: Date
      isDeleted: boolean
      createdAt: Date
    }, ExtArgs["result"]["unstableShift"]>
    composites: {}
  }

  type UnstableShiftGetPayload<S extends boolean | null | undefined | UnstableShiftDefaultArgs> = $Result.GetResult<Prisma.$UnstableShiftPayload, S>

  type UnstableShiftCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UnstableShiftFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UnstableShiftCountAggregateInputType | true
    }

  export interface UnstableShiftDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['UnstableShift'], meta: { name: 'UnstableShift' } }
    /**
     * Find zero or one UnstableShift that matches the filter.
     * @param {UnstableShiftFindUniqueArgs} args - Arguments to find a UnstableShift
     * @example
     * // Get one UnstableShift
     * const unstableShift = await prisma.unstableShift.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UnstableShiftFindUniqueArgs>(args: SelectSubset<T, UnstableShiftFindUniqueArgs<ExtArgs>>): Prisma__UnstableShiftClient<$Result.GetResult<Prisma.$UnstableShiftPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one UnstableShift that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UnstableShiftFindUniqueOrThrowArgs} args - Arguments to find a UnstableShift
     * @example
     * // Get one UnstableShift
     * const unstableShift = await prisma.unstableShift.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UnstableShiftFindUniqueOrThrowArgs>(args: SelectSubset<T, UnstableShiftFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UnstableShiftClient<$Result.GetResult<Prisma.$UnstableShiftPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first UnstableShift that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UnstableShiftFindFirstArgs} args - Arguments to find a UnstableShift
     * @example
     * // Get one UnstableShift
     * const unstableShift = await prisma.unstableShift.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UnstableShiftFindFirstArgs>(args?: SelectSubset<T, UnstableShiftFindFirstArgs<ExtArgs>>): Prisma__UnstableShiftClient<$Result.GetResult<Prisma.$UnstableShiftPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first UnstableShift that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UnstableShiftFindFirstOrThrowArgs} args - Arguments to find a UnstableShift
     * @example
     * // Get one UnstableShift
     * const unstableShift = await prisma.unstableShift.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UnstableShiftFindFirstOrThrowArgs>(args?: SelectSubset<T, UnstableShiftFindFirstOrThrowArgs<ExtArgs>>): Prisma__UnstableShiftClient<$Result.GetResult<Prisma.$UnstableShiftPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more UnstableShifts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UnstableShiftFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all UnstableShifts
     * const unstableShifts = await prisma.unstableShift.findMany()
     * 
     * // Get first 10 UnstableShifts
     * const unstableShifts = await prisma.unstableShift.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const unstableShiftWithIdOnly = await prisma.unstableShift.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UnstableShiftFindManyArgs>(args?: SelectSubset<T, UnstableShiftFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UnstableShiftPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a UnstableShift.
     * @param {UnstableShiftCreateArgs} args - Arguments to create a UnstableShift.
     * @example
     * // Create one UnstableShift
     * const UnstableShift = await prisma.unstableShift.create({
     *   data: {
     *     // ... data to create a UnstableShift
     *   }
     * })
     * 
     */
    create<T extends UnstableShiftCreateArgs>(args: SelectSubset<T, UnstableShiftCreateArgs<ExtArgs>>): Prisma__UnstableShiftClient<$Result.GetResult<Prisma.$UnstableShiftPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many UnstableShifts.
     * @param {UnstableShiftCreateManyArgs} args - Arguments to create many UnstableShifts.
     * @example
     * // Create many UnstableShifts
     * const unstableShift = await prisma.unstableShift.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UnstableShiftCreateManyArgs>(args?: SelectSubset<T, UnstableShiftCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many UnstableShifts and returns the data saved in the database.
     * @param {UnstableShiftCreateManyAndReturnArgs} args - Arguments to create many UnstableShifts.
     * @example
     * // Create many UnstableShifts
     * const unstableShift = await prisma.unstableShift.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many UnstableShifts and only return the `id`
     * const unstableShiftWithIdOnly = await prisma.unstableShift.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UnstableShiftCreateManyAndReturnArgs>(args?: SelectSubset<T, UnstableShiftCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UnstableShiftPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a UnstableShift.
     * @param {UnstableShiftDeleteArgs} args - Arguments to delete one UnstableShift.
     * @example
     * // Delete one UnstableShift
     * const UnstableShift = await prisma.unstableShift.delete({
     *   where: {
     *     // ... filter to delete one UnstableShift
     *   }
     * })
     * 
     */
    delete<T extends UnstableShiftDeleteArgs>(args: SelectSubset<T, UnstableShiftDeleteArgs<ExtArgs>>): Prisma__UnstableShiftClient<$Result.GetResult<Prisma.$UnstableShiftPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one UnstableShift.
     * @param {UnstableShiftUpdateArgs} args - Arguments to update one UnstableShift.
     * @example
     * // Update one UnstableShift
     * const unstableShift = await prisma.unstableShift.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UnstableShiftUpdateArgs>(args: SelectSubset<T, UnstableShiftUpdateArgs<ExtArgs>>): Prisma__UnstableShiftClient<$Result.GetResult<Prisma.$UnstableShiftPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more UnstableShifts.
     * @param {UnstableShiftDeleteManyArgs} args - Arguments to filter UnstableShifts to delete.
     * @example
     * // Delete a few UnstableShifts
     * const { count } = await prisma.unstableShift.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UnstableShiftDeleteManyArgs>(args?: SelectSubset<T, UnstableShiftDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more UnstableShifts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UnstableShiftUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many UnstableShifts
     * const unstableShift = await prisma.unstableShift.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UnstableShiftUpdateManyArgs>(args: SelectSubset<T, UnstableShiftUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more UnstableShifts and returns the data updated in the database.
     * @param {UnstableShiftUpdateManyAndReturnArgs} args - Arguments to update many UnstableShifts.
     * @example
     * // Update many UnstableShifts
     * const unstableShift = await prisma.unstableShift.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more UnstableShifts and only return the `id`
     * const unstableShiftWithIdOnly = await prisma.unstableShift.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UnstableShiftUpdateManyAndReturnArgs>(args: SelectSubset<T, UnstableShiftUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UnstableShiftPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one UnstableShift.
     * @param {UnstableShiftUpsertArgs} args - Arguments to update or create a UnstableShift.
     * @example
     * // Update or create a UnstableShift
     * const unstableShift = await prisma.unstableShift.upsert({
     *   create: {
     *     // ... data to create a UnstableShift
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the UnstableShift we want to update
     *   }
     * })
     */
    upsert<T extends UnstableShiftUpsertArgs>(args: SelectSubset<T, UnstableShiftUpsertArgs<ExtArgs>>): Prisma__UnstableShiftClient<$Result.GetResult<Prisma.$UnstableShiftPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of UnstableShifts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UnstableShiftCountArgs} args - Arguments to filter UnstableShifts to count.
     * @example
     * // Count the number of UnstableShifts
     * const count = await prisma.unstableShift.count({
     *   where: {
     *     // ... the filter for the UnstableShifts we want to count
     *   }
     * })
    **/
    count<T extends UnstableShiftCountArgs>(
      args?: Subset<T, UnstableShiftCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UnstableShiftCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a UnstableShift.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UnstableShiftAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UnstableShiftAggregateArgs>(args: Subset<T, UnstableShiftAggregateArgs>): Prisma.PrismaPromise<GetUnstableShiftAggregateType<T>>

    /**
     * Group by UnstableShift.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UnstableShiftGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UnstableShiftGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UnstableShiftGroupByArgs['orderBy'] }
        : { orderBy?: UnstableShiftGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UnstableShiftGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUnstableShiftGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the UnstableShift model
   */
  readonly fields: UnstableShiftFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for UnstableShift.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UnstableShiftClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    shop<T extends ShopDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ShopDefaultArgs<ExtArgs>>): Prisma__ShopClient<$Result.GetResult<Prisma.$ShopPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the UnstableShift model
   */
  interface UnstableShiftFieldRefs {
    readonly id: FieldRef<"UnstableShift", 'String'>
    readonly shopId: FieldRef<"UnstableShift", 'String'>
    readonly userId: FieldRef<"UnstableShift", 'String'>
    readonly workFrom: FieldRef<"UnstableShift", 'DateTime'>
    readonly workTo: FieldRef<"UnstableShift", 'DateTime'>
    readonly breakFrom: FieldRef<"UnstableShift", 'DateTime'>
    readonly breakTo: FieldRef<"UnstableShift", 'DateTime'>
    readonly isDeleted: FieldRef<"UnstableShift", 'Boolean'>
    readonly createdAt: FieldRef<"UnstableShift", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * UnstableShift findUnique
   */
  export type UnstableShiftFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UnstableShift
     */
    select?: UnstableShiftSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UnstableShift
     */
    omit?: UnstableShiftOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UnstableShiftInclude<ExtArgs> | null
    /**
     * Filter, which UnstableShift to fetch.
     */
    where: UnstableShiftWhereUniqueInput
  }

  /**
   * UnstableShift findUniqueOrThrow
   */
  export type UnstableShiftFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UnstableShift
     */
    select?: UnstableShiftSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UnstableShift
     */
    omit?: UnstableShiftOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UnstableShiftInclude<ExtArgs> | null
    /**
     * Filter, which UnstableShift to fetch.
     */
    where: UnstableShiftWhereUniqueInput
  }

  /**
   * UnstableShift findFirst
   */
  export type UnstableShiftFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UnstableShift
     */
    select?: UnstableShiftSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UnstableShift
     */
    omit?: UnstableShiftOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UnstableShiftInclude<ExtArgs> | null
    /**
     * Filter, which UnstableShift to fetch.
     */
    where?: UnstableShiftWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UnstableShifts to fetch.
     */
    orderBy?: UnstableShiftOrderByWithRelationInput | UnstableShiftOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UnstableShifts.
     */
    cursor?: UnstableShiftWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UnstableShifts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UnstableShifts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UnstableShifts.
     */
    distinct?: UnstableShiftScalarFieldEnum | UnstableShiftScalarFieldEnum[]
  }

  /**
   * UnstableShift findFirstOrThrow
   */
  export type UnstableShiftFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UnstableShift
     */
    select?: UnstableShiftSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UnstableShift
     */
    omit?: UnstableShiftOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UnstableShiftInclude<ExtArgs> | null
    /**
     * Filter, which UnstableShift to fetch.
     */
    where?: UnstableShiftWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UnstableShifts to fetch.
     */
    orderBy?: UnstableShiftOrderByWithRelationInput | UnstableShiftOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UnstableShifts.
     */
    cursor?: UnstableShiftWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UnstableShifts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UnstableShifts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UnstableShifts.
     */
    distinct?: UnstableShiftScalarFieldEnum | UnstableShiftScalarFieldEnum[]
  }

  /**
   * UnstableShift findMany
   */
  export type UnstableShiftFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UnstableShift
     */
    select?: UnstableShiftSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UnstableShift
     */
    omit?: UnstableShiftOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UnstableShiftInclude<ExtArgs> | null
    /**
     * Filter, which UnstableShifts to fetch.
     */
    where?: UnstableShiftWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UnstableShifts to fetch.
     */
    orderBy?: UnstableShiftOrderByWithRelationInput | UnstableShiftOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing UnstableShifts.
     */
    cursor?: UnstableShiftWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UnstableShifts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UnstableShifts.
     */
    skip?: number
    distinct?: UnstableShiftScalarFieldEnum | UnstableShiftScalarFieldEnum[]
  }

  /**
   * UnstableShift create
   */
  export type UnstableShiftCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UnstableShift
     */
    select?: UnstableShiftSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UnstableShift
     */
    omit?: UnstableShiftOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UnstableShiftInclude<ExtArgs> | null
    /**
     * The data needed to create a UnstableShift.
     */
    data: XOR<UnstableShiftCreateInput, UnstableShiftUncheckedCreateInput>
  }

  /**
   * UnstableShift createMany
   */
  export type UnstableShiftCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many UnstableShifts.
     */
    data: UnstableShiftCreateManyInput | UnstableShiftCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * UnstableShift createManyAndReturn
   */
  export type UnstableShiftCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UnstableShift
     */
    select?: UnstableShiftSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the UnstableShift
     */
    omit?: UnstableShiftOmit<ExtArgs> | null
    /**
     * The data used to create many UnstableShifts.
     */
    data: UnstableShiftCreateManyInput | UnstableShiftCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UnstableShiftIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * UnstableShift update
   */
  export type UnstableShiftUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UnstableShift
     */
    select?: UnstableShiftSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UnstableShift
     */
    omit?: UnstableShiftOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UnstableShiftInclude<ExtArgs> | null
    /**
     * The data needed to update a UnstableShift.
     */
    data: XOR<UnstableShiftUpdateInput, UnstableShiftUncheckedUpdateInput>
    /**
     * Choose, which UnstableShift to update.
     */
    where: UnstableShiftWhereUniqueInput
  }

  /**
   * UnstableShift updateMany
   */
  export type UnstableShiftUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update UnstableShifts.
     */
    data: XOR<UnstableShiftUpdateManyMutationInput, UnstableShiftUncheckedUpdateManyInput>
    /**
     * Filter which UnstableShifts to update
     */
    where?: UnstableShiftWhereInput
    /**
     * Limit how many UnstableShifts to update.
     */
    limit?: number
  }

  /**
   * UnstableShift updateManyAndReturn
   */
  export type UnstableShiftUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UnstableShift
     */
    select?: UnstableShiftSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the UnstableShift
     */
    omit?: UnstableShiftOmit<ExtArgs> | null
    /**
     * The data used to update UnstableShifts.
     */
    data: XOR<UnstableShiftUpdateManyMutationInput, UnstableShiftUncheckedUpdateManyInput>
    /**
     * Filter which UnstableShifts to update
     */
    where?: UnstableShiftWhereInput
    /**
     * Limit how many UnstableShifts to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UnstableShiftIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * UnstableShift upsert
   */
  export type UnstableShiftUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UnstableShift
     */
    select?: UnstableShiftSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UnstableShift
     */
    omit?: UnstableShiftOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UnstableShiftInclude<ExtArgs> | null
    /**
     * The filter to search for the UnstableShift to update in case it exists.
     */
    where: UnstableShiftWhereUniqueInput
    /**
     * In case the UnstableShift found by the `where` argument doesn't exist, create a new UnstableShift with this data.
     */
    create: XOR<UnstableShiftCreateInput, UnstableShiftUncheckedCreateInput>
    /**
     * In case the UnstableShift was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UnstableShiftUpdateInput, UnstableShiftUncheckedUpdateInput>
  }

  /**
   * UnstableShift delete
   */
  export type UnstableShiftDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UnstableShift
     */
    select?: UnstableShiftSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UnstableShift
     */
    omit?: UnstableShiftOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UnstableShiftInclude<ExtArgs> | null
    /**
     * Filter which UnstableShift to delete.
     */
    where: UnstableShiftWhereUniqueInput
  }

  /**
   * UnstableShift deleteMany
   */
  export type UnstableShiftDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UnstableShifts to delete
     */
    where?: UnstableShiftWhereInput
    /**
     * Limit how many UnstableShifts to delete.
     */
    limit?: number
  }

  /**
   * UnstableShift without action
   */
  export type UnstableShiftDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UnstableShift
     */
    select?: UnstableShiftSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UnstableShift
     */
    omit?: UnstableShiftOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UnstableShiftInclude<ExtArgs> | null
  }


  /**
   * Model Request
   */

  export type AggregateRequest = {
    _count: RequestCountAggregateOutputType | null
    _min: RequestMinAggregateOutputType | null
    _max: RequestMaxAggregateOutputType | null
  }

  export type RequestMinAggregateOutputType = {
    id: string | null
    shopId: string | null
    userId: string | null
    dateFrom: Date | null
    dateTo: Date | null
    done: boolean | null
    isDeleted: boolean | null
    createdAt: Date | null
  }

  export type RequestMaxAggregateOutputType = {
    id: string | null
    shopId: string | null
    userId: string | null
    dateFrom: Date | null
    dateTo: Date | null
    done: boolean | null
    isDeleted: boolean | null
    createdAt: Date | null
  }

  export type RequestCountAggregateOutputType = {
    id: number
    shopId: number
    userId: number
    dateFrom: number
    dateTo: number
    done: number
    isDeleted: number
    createdAt: number
    _all: number
  }


  export type RequestMinAggregateInputType = {
    id?: true
    shopId?: true
    userId?: true
    dateFrom?: true
    dateTo?: true
    done?: true
    isDeleted?: true
    createdAt?: true
  }

  export type RequestMaxAggregateInputType = {
    id?: true
    shopId?: true
    userId?: true
    dateFrom?: true
    dateTo?: true
    done?: true
    isDeleted?: true
    createdAt?: true
  }

  export type RequestCountAggregateInputType = {
    id?: true
    shopId?: true
    userId?: true
    dateFrom?: true
    dateTo?: true
    done?: true
    isDeleted?: true
    createdAt?: true
    _all?: true
  }

  export type RequestAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Request to aggregate.
     */
    where?: RequestWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Requests to fetch.
     */
    orderBy?: RequestOrderByWithRelationInput | RequestOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: RequestWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Requests from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Requests.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Requests
    **/
    _count?: true | RequestCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: RequestMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: RequestMaxAggregateInputType
  }

  export type GetRequestAggregateType<T extends RequestAggregateArgs> = {
        [P in keyof T & keyof AggregateRequest]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateRequest[P]>
      : GetScalarType<T[P], AggregateRequest[P]>
  }




  export type RequestGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RequestWhereInput
    orderBy?: RequestOrderByWithAggregationInput | RequestOrderByWithAggregationInput[]
    by: RequestScalarFieldEnum[] | RequestScalarFieldEnum
    having?: RequestScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: RequestCountAggregateInputType | true
    _min?: RequestMinAggregateInputType
    _max?: RequestMaxAggregateInputType
  }

  export type RequestGroupByOutputType = {
    id: string
    shopId: string
    userId: string
    dateFrom: Date
    dateTo: Date
    done: boolean
    isDeleted: boolean
    createdAt: Date
    _count: RequestCountAggregateOutputType | null
    _min: RequestMinAggregateOutputType | null
    _max: RequestMaxAggregateOutputType | null
  }

  type GetRequestGroupByPayload<T extends RequestGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<RequestGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof RequestGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], RequestGroupByOutputType[P]>
            : GetScalarType<T[P], RequestGroupByOutputType[P]>
        }
      >
    >


  export type RequestSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    shopId?: boolean
    userId?: boolean
    dateFrom?: boolean
    dateTo?: boolean
    done?: boolean
    isDeleted?: boolean
    createdAt?: boolean
    shop?: boolean | ShopDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["request"]>

  export type RequestSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    shopId?: boolean
    userId?: boolean
    dateFrom?: boolean
    dateTo?: boolean
    done?: boolean
    isDeleted?: boolean
    createdAt?: boolean
    shop?: boolean | ShopDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["request"]>

  export type RequestSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    shopId?: boolean
    userId?: boolean
    dateFrom?: boolean
    dateTo?: boolean
    done?: boolean
    isDeleted?: boolean
    createdAt?: boolean
    shop?: boolean | ShopDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["request"]>

  export type RequestSelectScalar = {
    id?: boolean
    shopId?: boolean
    userId?: boolean
    dateFrom?: boolean
    dateTo?: boolean
    done?: boolean
    isDeleted?: boolean
    createdAt?: boolean
  }

  export type RequestOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "shopId" | "userId" | "dateFrom" | "dateTo" | "done" | "isDeleted" | "createdAt", ExtArgs["result"]["request"]>
  export type RequestInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    shop?: boolean | ShopDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type RequestIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    shop?: boolean | ShopDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type RequestIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    shop?: boolean | ShopDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $RequestPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Request"
    objects: {
      shop: Prisma.$ShopPayload<ExtArgs>
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      shopId: string
      userId: string
      dateFrom: Date
      dateTo: Date
      done: boolean
      isDeleted: boolean
      createdAt: Date
    }, ExtArgs["result"]["request"]>
    composites: {}
  }

  type RequestGetPayload<S extends boolean | null | undefined | RequestDefaultArgs> = $Result.GetResult<Prisma.$RequestPayload, S>

  type RequestCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<RequestFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: RequestCountAggregateInputType | true
    }

  export interface RequestDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Request'], meta: { name: 'Request' } }
    /**
     * Find zero or one Request that matches the filter.
     * @param {RequestFindUniqueArgs} args - Arguments to find a Request
     * @example
     * // Get one Request
     * const request = await prisma.request.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends RequestFindUniqueArgs>(args: SelectSubset<T, RequestFindUniqueArgs<ExtArgs>>): Prisma__RequestClient<$Result.GetResult<Prisma.$RequestPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Request that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {RequestFindUniqueOrThrowArgs} args - Arguments to find a Request
     * @example
     * // Get one Request
     * const request = await prisma.request.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends RequestFindUniqueOrThrowArgs>(args: SelectSubset<T, RequestFindUniqueOrThrowArgs<ExtArgs>>): Prisma__RequestClient<$Result.GetResult<Prisma.$RequestPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Request that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RequestFindFirstArgs} args - Arguments to find a Request
     * @example
     * // Get one Request
     * const request = await prisma.request.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends RequestFindFirstArgs>(args?: SelectSubset<T, RequestFindFirstArgs<ExtArgs>>): Prisma__RequestClient<$Result.GetResult<Prisma.$RequestPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Request that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RequestFindFirstOrThrowArgs} args - Arguments to find a Request
     * @example
     * // Get one Request
     * const request = await prisma.request.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends RequestFindFirstOrThrowArgs>(args?: SelectSubset<T, RequestFindFirstOrThrowArgs<ExtArgs>>): Prisma__RequestClient<$Result.GetResult<Prisma.$RequestPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Requests that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RequestFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Requests
     * const requests = await prisma.request.findMany()
     * 
     * // Get first 10 Requests
     * const requests = await prisma.request.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const requestWithIdOnly = await prisma.request.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends RequestFindManyArgs>(args?: SelectSubset<T, RequestFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RequestPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Request.
     * @param {RequestCreateArgs} args - Arguments to create a Request.
     * @example
     * // Create one Request
     * const Request = await prisma.request.create({
     *   data: {
     *     // ... data to create a Request
     *   }
     * })
     * 
     */
    create<T extends RequestCreateArgs>(args: SelectSubset<T, RequestCreateArgs<ExtArgs>>): Prisma__RequestClient<$Result.GetResult<Prisma.$RequestPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Requests.
     * @param {RequestCreateManyArgs} args - Arguments to create many Requests.
     * @example
     * // Create many Requests
     * const request = await prisma.request.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends RequestCreateManyArgs>(args?: SelectSubset<T, RequestCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Requests and returns the data saved in the database.
     * @param {RequestCreateManyAndReturnArgs} args - Arguments to create many Requests.
     * @example
     * // Create many Requests
     * const request = await prisma.request.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Requests and only return the `id`
     * const requestWithIdOnly = await prisma.request.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends RequestCreateManyAndReturnArgs>(args?: SelectSubset<T, RequestCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RequestPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Request.
     * @param {RequestDeleteArgs} args - Arguments to delete one Request.
     * @example
     * // Delete one Request
     * const Request = await prisma.request.delete({
     *   where: {
     *     // ... filter to delete one Request
     *   }
     * })
     * 
     */
    delete<T extends RequestDeleteArgs>(args: SelectSubset<T, RequestDeleteArgs<ExtArgs>>): Prisma__RequestClient<$Result.GetResult<Prisma.$RequestPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Request.
     * @param {RequestUpdateArgs} args - Arguments to update one Request.
     * @example
     * // Update one Request
     * const request = await prisma.request.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends RequestUpdateArgs>(args: SelectSubset<T, RequestUpdateArgs<ExtArgs>>): Prisma__RequestClient<$Result.GetResult<Prisma.$RequestPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Requests.
     * @param {RequestDeleteManyArgs} args - Arguments to filter Requests to delete.
     * @example
     * // Delete a few Requests
     * const { count } = await prisma.request.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends RequestDeleteManyArgs>(args?: SelectSubset<T, RequestDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Requests.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RequestUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Requests
     * const request = await prisma.request.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends RequestUpdateManyArgs>(args: SelectSubset<T, RequestUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Requests and returns the data updated in the database.
     * @param {RequestUpdateManyAndReturnArgs} args - Arguments to update many Requests.
     * @example
     * // Update many Requests
     * const request = await prisma.request.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Requests and only return the `id`
     * const requestWithIdOnly = await prisma.request.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends RequestUpdateManyAndReturnArgs>(args: SelectSubset<T, RequestUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RequestPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Request.
     * @param {RequestUpsertArgs} args - Arguments to update or create a Request.
     * @example
     * // Update or create a Request
     * const request = await prisma.request.upsert({
     *   create: {
     *     // ... data to create a Request
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Request we want to update
     *   }
     * })
     */
    upsert<T extends RequestUpsertArgs>(args: SelectSubset<T, RequestUpsertArgs<ExtArgs>>): Prisma__RequestClient<$Result.GetResult<Prisma.$RequestPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Requests.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RequestCountArgs} args - Arguments to filter Requests to count.
     * @example
     * // Count the number of Requests
     * const count = await prisma.request.count({
     *   where: {
     *     // ... the filter for the Requests we want to count
     *   }
     * })
    **/
    count<T extends RequestCountArgs>(
      args?: Subset<T, RequestCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], RequestCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Request.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RequestAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends RequestAggregateArgs>(args: Subset<T, RequestAggregateArgs>): Prisma.PrismaPromise<GetRequestAggregateType<T>>

    /**
     * Group by Request.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RequestGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends RequestGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: RequestGroupByArgs['orderBy'] }
        : { orderBy?: RequestGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, RequestGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRequestGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Request model
   */
  readonly fields: RequestFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Request.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__RequestClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    shop<T extends ShopDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ShopDefaultArgs<ExtArgs>>): Prisma__ShopClient<$Result.GetResult<Prisma.$ShopPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Request model
   */
  interface RequestFieldRefs {
    readonly id: FieldRef<"Request", 'String'>
    readonly shopId: FieldRef<"Request", 'String'>
    readonly userId: FieldRef<"Request", 'String'>
    readonly dateFrom: FieldRef<"Request", 'DateTime'>
    readonly dateTo: FieldRef<"Request", 'DateTime'>
    readonly done: FieldRef<"Request", 'Boolean'>
    readonly isDeleted: FieldRef<"Request", 'Boolean'>
    readonly createdAt: FieldRef<"Request", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Request findUnique
   */
  export type RequestFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Request
     */
    select?: RequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Request
     */
    omit?: RequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RequestInclude<ExtArgs> | null
    /**
     * Filter, which Request to fetch.
     */
    where: RequestWhereUniqueInput
  }

  /**
   * Request findUniqueOrThrow
   */
  export type RequestFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Request
     */
    select?: RequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Request
     */
    omit?: RequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RequestInclude<ExtArgs> | null
    /**
     * Filter, which Request to fetch.
     */
    where: RequestWhereUniqueInput
  }

  /**
   * Request findFirst
   */
  export type RequestFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Request
     */
    select?: RequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Request
     */
    omit?: RequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RequestInclude<ExtArgs> | null
    /**
     * Filter, which Request to fetch.
     */
    where?: RequestWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Requests to fetch.
     */
    orderBy?: RequestOrderByWithRelationInput | RequestOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Requests.
     */
    cursor?: RequestWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Requests from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Requests.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Requests.
     */
    distinct?: RequestScalarFieldEnum | RequestScalarFieldEnum[]
  }

  /**
   * Request findFirstOrThrow
   */
  export type RequestFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Request
     */
    select?: RequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Request
     */
    omit?: RequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RequestInclude<ExtArgs> | null
    /**
     * Filter, which Request to fetch.
     */
    where?: RequestWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Requests to fetch.
     */
    orderBy?: RequestOrderByWithRelationInput | RequestOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Requests.
     */
    cursor?: RequestWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Requests from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Requests.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Requests.
     */
    distinct?: RequestScalarFieldEnum | RequestScalarFieldEnum[]
  }

  /**
   * Request findMany
   */
  export type RequestFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Request
     */
    select?: RequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Request
     */
    omit?: RequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RequestInclude<ExtArgs> | null
    /**
     * Filter, which Requests to fetch.
     */
    where?: RequestWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Requests to fetch.
     */
    orderBy?: RequestOrderByWithRelationInput | RequestOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Requests.
     */
    cursor?: RequestWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Requests from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Requests.
     */
    skip?: number
    distinct?: RequestScalarFieldEnum | RequestScalarFieldEnum[]
  }

  /**
   * Request create
   */
  export type RequestCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Request
     */
    select?: RequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Request
     */
    omit?: RequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RequestInclude<ExtArgs> | null
    /**
     * The data needed to create a Request.
     */
    data: XOR<RequestCreateInput, RequestUncheckedCreateInput>
  }

  /**
   * Request createMany
   */
  export type RequestCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Requests.
     */
    data: RequestCreateManyInput | RequestCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Request createManyAndReturn
   */
  export type RequestCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Request
     */
    select?: RequestSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Request
     */
    omit?: RequestOmit<ExtArgs> | null
    /**
     * The data used to create many Requests.
     */
    data: RequestCreateManyInput | RequestCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RequestIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Request update
   */
  export type RequestUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Request
     */
    select?: RequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Request
     */
    omit?: RequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RequestInclude<ExtArgs> | null
    /**
     * The data needed to update a Request.
     */
    data: XOR<RequestUpdateInput, RequestUncheckedUpdateInput>
    /**
     * Choose, which Request to update.
     */
    where: RequestWhereUniqueInput
  }

  /**
   * Request updateMany
   */
  export type RequestUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Requests.
     */
    data: XOR<RequestUpdateManyMutationInput, RequestUncheckedUpdateManyInput>
    /**
     * Filter which Requests to update
     */
    where?: RequestWhereInput
    /**
     * Limit how many Requests to update.
     */
    limit?: number
  }

  /**
   * Request updateManyAndReturn
   */
  export type RequestUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Request
     */
    select?: RequestSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Request
     */
    omit?: RequestOmit<ExtArgs> | null
    /**
     * The data used to update Requests.
     */
    data: XOR<RequestUpdateManyMutationInput, RequestUncheckedUpdateManyInput>
    /**
     * Filter which Requests to update
     */
    where?: RequestWhereInput
    /**
     * Limit how many Requests to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RequestIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Request upsert
   */
  export type RequestUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Request
     */
    select?: RequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Request
     */
    omit?: RequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RequestInclude<ExtArgs> | null
    /**
     * The filter to search for the Request to update in case it exists.
     */
    where: RequestWhereUniqueInput
    /**
     * In case the Request found by the `where` argument doesn't exist, create a new Request with this data.
     */
    create: XOR<RequestCreateInput, RequestUncheckedCreateInput>
    /**
     * In case the Request was found with the provided `where` argument, update it with this data.
     */
    update: XOR<RequestUpdateInput, RequestUncheckedUpdateInput>
  }

  /**
   * Request delete
   */
  export type RequestDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Request
     */
    select?: RequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Request
     */
    omit?: RequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RequestInclude<ExtArgs> | null
    /**
     * Filter which Request to delete.
     */
    where: RequestWhereUniqueInput
  }

  /**
   * Request deleteMany
   */
  export type RequestDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Requests to delete
     */
    where?: RequestWhereInput
    /**
     * Limit how many Requests to delete.
     */
    limit?: number
  }

  /**
   * Request without action
   */
  export type RequestDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Request
     */
    select?: RequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Request
     */
    omit?: RequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RequestInclude<ExtArgs> | null
  }


  /**
   * Model TimeCard
   */

  export type AggregateTimeCard = {
    _count: TimeCardCountAggregateOutputType | null
    _min: TimeCardMinAggregateOutputType | null
    _max: TimeCardMaxAggregateOutputType | null
  }

  export type TimeCardMinAggregateOutputType = {
    id: string | null
    shopId: string | null
    userId: string | null
    workFrom: Date | null
    workTo: Date | null
    breakFrom: Date | null
    breakTo: Date | null
    isDeleted: boolean | null
    createdAt: Date | null
  }

  export type TimeCardMaxAggregateOutputType = {
    id: string | null
    shopId: string | null
    userId: string | null
    workFrom: Date | null
    workTo: Date | null
    breakFrom: Date | null
    breakTo: Date | null
    isDeleted: boolean | null
    createdAt: Date | null
  }

  export type TimeCardCountAggregateOutputType = {
    id: number
    shopId: number
    userId: number
    workFrom: number
    workTo: number
    breakFrom: number
    breakTo: number
    isDeleted: number
    createdAt: number
    _all: number
  }


  export type TimeCardMinAggregateInputType = {
    id?: true
    shopId?: true
    userId?: true
    workFrom?: true
    workTo?: true
    breakFrom?: true
    breakTo?: true
    isDeleted?: true
    createdAt?: true
  }

  export type TimeCardMaxAggregateInputType = {
    id?: true
    shopId?: true
    userId?: true
    workFrom?: true
    workTo?: true
    breakFrom?: true
    breakTo?: true
    isDeleted?: true
    createdAt?: true
  }

  export type TimeCardCountAggregateInputType = {
    id?: true
    shopId?: true
    userId?: true
    workFrom?: true
    workTo?: true
    breakFrom?: true
    breakTo?: true
    isDeleted?: true
    createdAt?: true
    _all?: true
  }

  export type TimeCardAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TimeCard to aggregate.
     */
    where?: TimeCardWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TimeCards to fetch.
     */
    orderBy?: TimeCardOrderByWithRelationInput | TimeCardOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TimeCardWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TimeCards from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TimeCards.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned TimeCards
    **/
    _count?: true | TimeCardCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TimeCardMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TimeCardMaxAggregateInputType
  }

  export type GetTimeCardAggregateType<T extends TimeCardAggregateArgs> = {
        [P in keyof T & keyof AggregateTimeCard]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTimeCard[P]>
      : GetScalarType<T[P], AggregateTimeCard[P]>
  }




  export type TimeCardGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TimeCardWhereInput
    orderBy?: TimeCardOrderByWithAggregationInput | TimeCardOrderByWithAggregationInput[]
    by: TimeCardScalarFieldEnum[] | TimeCardScalarFieldEnum
    having?: TimeCardScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TimeCardCountAggregateInputType | true
    _min?: TimeCardMinAggregateInputType
    _max?: TimeCardMaxAggregateInputType
  }

  export type TimeCardGroupByOutputType = {
    id: string
    shopId: string
    userId: string
    workFrom: Date
    workTo: Date
    breakFrom: Date
    breakTo: Date
    isDeleted: boolean
    createdAt: Date
    _count: TimeCardCountAggregateOutputType | null
    _min: TimeCardMinAggregateOutputType | null
    _max: TimeCardMaxAggregateOutputType | null
  }

  type GetTimeCardGroupByPayload<T extends TimeCardGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TimeCardGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TimeCardGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TimeCardGroupByOutputType[P]>
            : GetScalarType<T[P], TimeCardGroupByOutputType[P]>
        }
      >
    >


  export type TimeCardSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    shopId?: boolean
    userId?: boolean
    workFrom?: boolean
    workTo?: boolean
    breakFrom?: boolean
    breakTo?: boolean
    isDeleted?: boolean
    createdAt?: boolean
    shop?: boolean | ShopDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["timeCard"]>

  export type TimeCardSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    shopId?: boolean
    userId?: boolean
    workFrom?: boolean
    workTo?: boolean
    breakFrom?: boolean
    breakTo?: boolean
    isDeleted?: boolean
    createdAt?: boolean
    shop?: boolean | ShopDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["timeCard"]>

  export type TimeCardSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    shopId?: boolean
    userId?: boolean
    workFrom?: boolean
    workTo?: boolean
    breakFrom?: boolean
    breakTo?: boolean
    isDeleted?: boolean
    createdAt?: boolean
    shop?: boolean | ShopDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["timeCard"]>

  export type TimeCardSelectScalar = {
    id?: boolean
    shopId?: boolean
    userId?: boolean
    workFrom?: boolean
    workTo?: boolean
    breakFrom?: boolean
    breakTo?: boolean
    isDeleted?: boolean
    createdAt?: boolean
  }

  export type TimeCardOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "shopId" | "userId" | "workFrom" | "workTo" | "breakFrom" | "breakTo" | "isDeleted" | "createdAt", ExtArgs["result"]["timeCard"]>
  export type TimeCardInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    shop?: boolean | ShopDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type TimeCardIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    shop?: boolean | ShopDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type TimeCardIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    shop?: boolean | ShopDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $TimeCardPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "TimeCard"
    objects: {
      shop: Prisma.$ShopPayload<ExtArgs>
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      shopId: string
      userId: string
      workFrom: Date
      workTo: Date
      breakFrom: Date
      breakTo: Date
      isDeleted: boolean
      createdAt: Date
    }, ExtArgs["result"]["timeCard"]>
    composites: {}
  }

  type TimeCardGetPayload<S extends boolean | null | undefined | TimeCardDefaultArgs> = $Result.GetResult<Prisma.$TimeCardPayload, S>

  type TimeCardCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<TimeCardFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TimeCardCountAggregateInputType | true
    }

  export interface TimeCardDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['TimeCard'], meta: { name: 'TimeCard' } }
    /**
     * Find zero or one TimeCard that matches the filter.
     * @param {TimeCardFindUniqueArgs} args - Arguments to find a TimeCard
     * @example
     * // Get one TimeCard
     * const timeCard = await prisma.timeCard.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TimeCardFindUniqueArgs>(args: SelectSubset<T, TimeCardFindUniqueArgs<ExtArgs>>): Prisma__TimeCardClient<$Result.GetResult<Prisma.$TimeCardPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one TimeCard that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {TimeCardFindUniqueOrThrowArgs} args - Arguments to find a TimeCard
     * @example
     * // Get one TimeCard
     * const timeCard = await prisma.timeCard.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TimeCardFindUniqueOrThrowArgs>(args: SelectSubset<T, TimeCardFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TimeCardClient<$Result.GetResult<Prisma.$TimeCardPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first TimeCard that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TimeCardFindFirstArgs} args - Arguments to find a TimeCard
     * @example
     * // Get one TimeCard
     * const timeCard = await prisma.timeCard.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TimeCardFindFirstArgs>(args?: SelectSubset<T, TimeCardFindFirstArgs<ExtArgs>>): Prisma__TimeCardClient<$Result.GetResult<Prisma.$TimeCardPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first TimeCard that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TimeCardFindFirstOrThrowArgs} args - Arguments to find a TimeCard
     * @example
     * // Get one TimeCard
     * const timeCard = await prisma.timeCard.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TimeCardFindFirstOrThrowArgs>(args?: SelectSubset<T, TimeCardFindFirstOrThrowArgs<ExtArgs>>): Prisma__TimeCardClient<$Result.GetResult<Prisma.$TimeCardPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more TimeCards that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TimeCardFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all TimeCards
     * const timeCards = await prisma.timeCard.findMany()
     * 
     * // Get first 10 TimeCards
     * const timeCards = await prisma.timeCard.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const timeCardWithIdOnly = await prisma.timeCard.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends TimeCardFindManyArgs>(args?: SelectSubset<T, TimeCardFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TimeCardPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a TimeCard.
     * @param {TimeCardCreateArgs} args - Arguments to create a TimeCard.
     * @example
     * // Create one TimeCard
     * const TimeCard = await prisma.timeCard.create({
     *   data: {
     *     // ... data to create a TimeCard
     *   }
     * })
     * 
     */
    create<T extends TimeCardCreateArgs>(args: SelectSubset<T, TimeCardCreateArgs<ExtArgs>>): Prisma__TimeCardClient<$Result.GetResult<Prisma.$TimeCardPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many TimeCards.
     * @param {TimeCardCreateManyArgs} args - Arguments to create many TimeCards.
     * @example
     * // Create many TimeCards
     * const timeCard = await prisma.timeCard.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TimeCardCreateManyArgs>(args?: SelectSubset<T, TimeCardCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many TimeCards and returns the data saved in the database.
     * @param {TimeCardCreateManyAndReturnArgs} args - Arguments to create many TimeCards.
     * @example
     * // Create many TimeCards
     * const timeCard = await prisma.timeCard.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many TimeCards and only return the `id`
     * const timeCardWithIdOnly = await prisma.timeCard.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends TimeCardCreateManyAndReturnArgs>(args?: SelectSubset<T, TimeCardCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TimeCardPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a TimeCard.
     * @param {TimeCardDeleteArgs} args - Arguments to delete one TimeCard.
     * @example
     * // Delete one TimeCard
     * const TimeCard = await prisma.timeCard.delete({
     *   where: {
     *     // ... filter to delete one TimeCard
     *   }
     * })
     * 
     */
    delete<T extends TimeCardDeleteArgs>(args: SelectSubset<T, TimeCardDeleteArgs<ExtArgs>>): Prisma__TimeCardClient<$Result.GetResult<Prisma.$TimeCardPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one TimeCard.
     * @param {TimeCardUpdateArgs} args - Arguments to update one TimeCard.
     * @example
     * // Update one TimeCard
     * const timeCard = await prisma.timeCard.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TimeCardUpdateArgs>(args: SelectSubset<T, TimeCardUpdateArgs<ExtArgs>>): Prisma__TimeCardClient<$Result.GetResult<Prisma.$TimeCardPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more TimeCards.
     * @param {TimeCardDeleteManyArgs} args - Arguments to filter TimeCards to delete.
     * @example
     * // Delete a few TimeCards
     * const { count } = await prisma.timeCard.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TimeCardDeleteManyArgs>(args?: SelectSubset<T, TimeCardDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more TimeCards.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TimeCardUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many TimeCards
     * const timeCard = await prisma.timeCard.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TimeCardUpdateManyArgs>(args: SelectSubset<T, TimeCardUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more TimeCards and returns the data updated in the database.
     * @param {TimeCardUpdateManyAndReturnArgs} args - Arguments to update many TimeCards.
     * @example
     * // Update many TimeCards
     * const timeCard = await prisma.timeCard.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more TimeCards and only return the `id`
     * const timeCardWithIdOnly = await prisma.timeCard.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends TimeCardUpdateManyAndReturnArgs>(args: SelectSubset<T, TimeCardUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TimeCardPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one TimeCard.
     * @param {TimeCardUpsertArgs} args - Arguments to update or create a TimeCard.
     * @example
     * // Update or create a TimeCard
     * const timeCard = await prisma.timeCard.upsert({
     *   create: {
     *     // ... data to create a TimeCard
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the TimeCard we want to update
     *   }
     * })
     */
    upsert<T extends TimeCardUpsertArgs>(args: SelectSubset<T, TimeCardUpsertArgs<ExtArgs>>): Prisma__TimeCardClient<$Result.GetResult<Prisma.$TimeCardPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of TimeCards.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TimeCardCountArgs} args - Arguments to filter TimeCards to count.
     * @example
     * // Count the number of TimeCards
     * const count = await prisma.timeCard.count({
     *   where: {
     *     // ... the filter for the TimeCards we want to count
     *   }
     * })
    **/
    count<T extends TimeCardCountArgs>(
      args?: Subset<T, TimeCardCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TimeCardCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a TimeCard.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TimeCardAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends TimeCardAggregateArgs>(args: Subset<T, TimeCardAggregateArgs>): Prisma.PrismaPromise<GetTimeCardAggregateType<T>>

    /**
     * Group by TimeCard.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TimeCardGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends TimeCardGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TimeCardGroupByArgs['orderBy'] }
        : { orderBy?: TimeCardGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, TimeCardGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTimeCardGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the TimeCard model
   */
  readonly fields: TimeCardFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for TimeCard.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TimeCardClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    shop<T extends ShopDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ShopDefaultArgs<ExtArgs>>): Prisma__ShopClient<$Result.GetResult<Prisma.$ShopPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the TimeCard model
   */
  interface TimeCardFieldRefs {
    readonly id: FieldRef<"TimeCard", 'String'>
    readonly shopId: FieldRef<"TimeCard", 'String'>
    readonly userId: FieldRef<"TimeCard", 'String'>
    readonly workFrom: FieldRef<"TimeCard", 'DateTime'>
    readonly workTo: FieldRef<"TimeCard", 'DateTime'>
    readonly breakFrom: FieldRef<"TimeCard", 'DateTime'>
    readonly breakTo: FieldRef<"TimeCard", 'DateTime'>
    readonly isDeleted: FieldRef<"TimeCard", 'Boolean'>
    readonly createdAt: FieldRef<"TimeCard", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * TimeCard findUnique
   */
  export type TimeCardFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TimeCard
     */
    select?: TimeCardSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TimeCard
     */
    omit?: TimeCardOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TimeCardInclude<ExtArgs> | null
    /**
     * Filter, which TimeCard to fetch.
     */
    where: TimeCardWhereUniqueInput
  }

  /**
   * TimeCard findUniqueOrThrow
   */
  export type TimeCardFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TimeCard
     */
    select?: TimeCardSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TimeCard
     */
    omit?: TimeCardOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TimeCardInclude<ExtArgs> | null
    /**
     * Filter, which TimeCard to fetch.
     */
    where: TimeCardWhereUniqueInput
  }

  /**
   * TimeCard findFirst
   */
  export type TimeCardFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TimeCard
     */
    select?: TimeCardSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TimeCard
     */
    omit?: TimeCardOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TimeCardInclude<ExtArgs> | null
    /**
     * Filter, which TimeCard to fetch.
     */
    where?: TimeCardWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TimeCards to fetch.
     */
    orderBy?: TimeCardOrderByWithRelationInput | TimeCardOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TimeCards.
     */
    cursor?: TimeCardWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TimeCards from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TimeCards.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TimeCards.
     */
    distinct?: TimeCardScalarFieldEnum | TimeCardScalarFieldEnum[]
  }

  /**
   * TimeCard findFirstOrThrow
   */
  export type TimeCardFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TimeCard
     */
    select?: TimeCardSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TimeCard
     */
    omit?: TimeCardOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TimeCardInclude<ExtArgs> | null
    /**
     * Filter, which TimeCard to fetch.
     */
    where?: TimeCardWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TimeCards to fetch.
     */
    orderBy?: TimeCardOrderByWithRelationInput | TimeCardOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TimeCards.
     */
    cursor?: TimeCardWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TimeCards from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TimeCards.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TimeCards.
     */
    distinct?: TimeCardScalarFieldEnum | TimeCardScalarFieldEnum[]
  }

  /**
   * TimeCard findMany
   */
  export type TimeCardFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TimeCard
     */
    select?: TimeCardSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TimeCard
     */
    omit?: TimeCardOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TimeCardInclude<ExtArgs> | null
    /**
     * Filter, which TimeCards to fetch.
     */
    where?: TimeCardWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TimeCards to fetch.
     */
    orderBy?: TimeCardOrderByWithRelationInput | TimeCardOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing TimeCards.
     */
    cursor?: TimeCardWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TimeCards from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TimeCards.
     */
    skip?: number
    distinct?: TimeCardScalarFieldEnum | TimeCardScalarFieldEnum[]
  }

  /**
   * TimeCard create
   */
  export type TimeCardCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TimeCard
     */
    select?: TimeCardSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TimeCard
     */
    omit?: TimeCardOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TimeCardInclude<ExtArgs> | null
    /**
     * The data needed to create a TimeCard.
     */
    data: XOR<TimeCardCreateInput, TimeCardUncheckedCreateInput>
  }

  /**
   * TimeCard createMany
   */
  export type TimeCardCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many TimeCards.
     */
    data: TimeCardCreateManyInput | TimeCardCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * TimeCard createManyAndReturn
   */
  export type TimeCardCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TimeCard
     */
    select?: TimeCardSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the TimeCard
     */
    omit?: TimeCardOmit<ExtArgs> | null
    /**
     * The data used to create many TimeCards.
     */
    data: TimeCardCreateManyInput | TimeCardCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TimeCardIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * TimeCard update
   */
  export type TimeCardUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TimeCard
     */
    select?: TimeCardSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TimeCard
     */
    omit?: TimeCardOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TimeCardInclude<ExtArgs> | null
    /**
     * The data needed to update a TimeCard.
     */
    data: XOR<TimeCardUpdateInput, TimeCardUncheckedUpdateInput>
    /**
     * Choose, which TimeCard to update.
     */
    where: TimeCardWhereUniqueInput
  }

  /**
   * TimeCard updateMany
   */
  export type TimeCardUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update TimeCards.
     */
    data: XOR<TimeCardUpdateManyMutationInput, TimeCardUncheckedUpdateManyInput>
    /**
     * Filter which TimeCards to update
     */
    where?: TimeCardWhereInput
    /**
     * Limit how many TimeCards to update.
     */
    limit?: number
  }

  /**
   * TimeCard updateManyAndReturn
   */
  export type TimeCardUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TimeCard
     */
    select?: TimeCardSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the TimeCard
     */
    omit?: TimeCardOmit<ExtArgs> | null
    /**
     * The data used to update TimeCards.
     */
    data: XOR<TimeCardUpdateManyMutationInput, TimeCardUncheckedUpdateManyInput>
    /**
     * Filter which TimeCards to update
     */
    where?: TimeCardWhereInput
    /**
     * Limit how many TimeCards to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TimeCardIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * TimeCard upsert
   */
  export type TimeCardUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TimeCard
     */
    select?: TimeCardSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TimeCard
     */
    omit?: TimeCardOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TimeCardInclude<ExtArgs> | null
    /**
     * The filter to search for the TimeCard to update in case it exists.
     */
    where: TimeCardWhereUniqueInput
    /**
     * In case the TimeCard found by the `where` argument doesn't exist, create a new TimeCard with this data.
     */
    create: XOR<TimeCardCreateInput, TimeCardUncheckedCreateInput>
    /**
     * In case the TimeCard was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TimeCardUpdateInput, TimeCardUncheckedUpdateInput>
  }

  /**
   * TimeCard delete
   */
  export type TimeCardDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TimeCard
     */
    select?: TimeCardSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TimeCard
     */
    omit?: TimeCardOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TimeCardInclude<ExtArgs> | null
    /**
     * Filter which TimeCard to delete.
     */
    where: TimeCardWhereUniqueInput
  }

  /**
   * TimeCard deleteMany
   */
  export type TimeCardDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TimeCards to delete
     */
    where?: TimeCardWhereInput
    /**
     * Limit how many TimeCards to delete.
     */
    limit?: number
  }

  /**
   * TimeCard without action
   */
  export type TimeCardDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TimeCard
     */
    select?: TimeCardSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TimeCard
     */
    omit?: TimeCardOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TimeCardInclude<ExtArgs> | null
  }


  /**
   * Model TemporaryClosed
   */

  export type AggregateTemporaryClosed = {
    _count: TemporaryClosedCountAggregateOutputType | null
    _min: TemporaryClosedMinAggregateOutputType | null
    _max: TemporaryClosedMaxAggregateOutputType | null
  }

  export type TemporaryClosedMinAggregateOutputType = {
    id: string | null
    organizationId: string | null
    shopId: string | null
    date: Date | null
    isDeleted: boolean | null
    createdAt: Date | null
  }

  export type TemporaryClosedMaxAggregateOutputType = {
    id: string | null
    organizationId: string | null
    shopId: string | null
    date: Date | null
    isDeleted: boolean | null
    createdAt: Date | null
  }

  export type TemporaryClosedCountAggregateOutputType = {
    id: number
    organizationId: number
    shopId: number
    date: number
    isDeleted: number
    createdAt: number
    _all: number
  }


  export type TemporaryClosedMinAggregateInputType = {
    id?: true
    organizationId?: true
    shopId?: true
    date?: true
    isDeleted?: true
    createdAt?: true
  }

  export type TemporaryClosedMaxAggregateInputType = {
    id?: true
    organizationId?: true
    shopId?: true
    date?: true
    isDeleted?: true
    createdAt?: true
  }

  export type TemporaryClosedCountAggregateInputType = {
    id?: true
    organizationId?: true
    shopId?: true
    date?: true
    isDeleted?: true
    createdAt?: true
    _all?: true
  }

  export type TemporaryClosedAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TemporaryClosed to aggregate.
     */
    where?: TemporaryClosedWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TemporaryCloseds to fetch.
     */
    orderBy?: TemporaryClosedOrderByWithRelationInput | TemporaryClosedOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TemporaryClosedWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TemporaryCloseds from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TemporaryCloseds.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned TemporaryCloseds
    **/
    _count?: true | TemporaryClosedCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TemporaryClosedMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TemporaryClosedMaxAggregateInputType
  }

  export type GetTemporaryClosedAggregateType<T extends TemporaryClosedAggregateArgs> = {
        [P in keyof T & keyof AggregateTemporaryClosed]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTemporaryClosed[P]>
      : GetScalarType<T[P], AggregateTemporaryClosed[P]>
  }




  export type TemporaryClosedGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TemporaryClosedWhereInput
    orderBy?: TemporaryClosedOrderByWithAggregationInput | TemporaryClosedOrderByWithAggregationInput[]
    by: TemporaryClosedScalarFieldEnum[] | TemporaryClosedScalarFieldEnum
    having?: TemporaryClosedScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TemporaryClosedCountAggregateInputType | true
    _min?: TemporaryClosedMinAggregateInputType
    _max?: TemporaryClosedMaxAggregateInputType
  }

  export type TemporaryClosedGroupByOutputType = {
    id: string
    organizationId: string
    shopId: string
    date: Date
    isDeleted: boolean
    createdAt: Date
    _count: TemporaryClosedCountAggregateOutputType | null
    _min: TemporaryClosedMinAggregateOutputType | null
    _max: TemporaryClosedMaxAggregateOutputType | null
  }

  type GetTemporaryClosedGroupByPayload<T extends TemporaryClosedGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TemporaryClosedGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TemporaryClosedGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TemporaryClosedGroupByOutputType[P]>
            : GetScalarType<T[P], TemporaryClosedGroupByOutputType[P]>
        }
      >
    >


  export type TemporaryClosedSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    organizationId?: boolean
    shopId?: boolean
    date?: boolean
    isDeleted?: boolean
    createdAt?: boolean
    organization?: boolean | OrganizationDefaultArgs<ExtArgs>
    shop?: boolean | ShopDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["temporaryClosed"]>

  export type TemporaryClosedSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    organizationId?: boolean
    shopId?: boolean
    date?: boolean
    isDeleted?: boolean
    createdAt?: boolean
    organization?: boolean | OrganizationDefaultArgs<ExtArgs>
    shop?: boolean | ShopDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["temporaryClosed"]>

  export type TemporaryClosedSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    organizationId?: boolean
    shopId?: boolean
    date?: boolean
    isDeleted?: boolean
    createdAt?: boolean
    organization?: boolean | OrganizationDefaultArgs<ExtArgs>
    shop?: boolean | ShopDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["temporaryClosed"]>

  export type TemporaryClosedSelectScalar = {
    id?: boolean
    organizationId?: boolean
    shopId?: boolean
    date?: boolean
    isDeleted?: boolean
    createdAt?: boolean
  }

  export type TemporaryClosedOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "organizationId" | "shopId" | "date" | "isDeleted" | "createdAt", ExtArgs["result"]["temporaryClosed"]>
  export type TemporaryClosedInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    organization?: boolean | OrganizationDefaultArgs<ExtArgs>
    shop?: boolean | ShopDefaultArgs<ExtArgs>
  }
  export type TemporaryClosedIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    organization?: boolean | OrganizationDefaultArgs<ExtArgs>
    shop?: boolean | ShopDefaultArgs<ExtArgs>
  }
  export type TemporaryClosedIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    organization?: boolean | OrganizationDefaultArgs<ExtArgs>
    shop?: boolean | ShopDefaultArgs<ExtArgs>
  }

  export type $TemporaryClosedPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "TemporaryClosed"
    objects: {
      organization: Prisma.$OrganizationPayload<ExtArgs>
      shop: Prisma.$ShopPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      organizationId: string
      shopId: string
      date: Date
      isDeleted: boolean
      createdAt: Date
    }, ExtArgs["result"]["temporaryClosed"]>
    composites: {}
  }

  type TemporaryClosedGetPayload<S extends boolean | null | undefined | TemporaryClosedDefaultArgs> = $Result.GetResult<Prisma.$TemporaryClosedPayload, S>

  type TemporaryClosedCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<TemporaryClosedFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TemporaryClosedCountAggregateInputType | true
    }

  export interface TemporaryClosedDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['TemporaryClosed'], meta: { name: 'TemporaryClosed' } }
    /**
     * Find zero or one TemporaryClosed that matches the filter.
     * @param {TemporaryClosedFindUniqueArgs} args - Arguments to find a TemporaryClosed
     * @example
     * // Get one TemporaryClosed
     * const temporaryClosed = await prisma.temporaryClosed.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TemporaryClosedFindUniqueArgs>(args: SelectSubset<T, TemporaryClosedFindUniqueArgs<ExtArgs>>): Prisma__TemporaryClosedClient<$Result.GetResult<Prisma.$TemporaryClosedPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one TemporaryClosed that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {TemporaryClosedFindUniqueOrThrowArgs} args - Arguments to find a TemporaryClosed
     * @example
     * // Get one TemporaryClosed
     * const temporaryClosed = await prisma.temporaryClosed.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TemporaryClosedFindUniqueOrThrowArgs>(args: SelectSubset<T, TemporaryClosedFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TemporaryClosedClient<$Result.GetResult<Prisma.$TemporaryClosedPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first TemporaryClosed that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TemporaryClosedFindFirstArgs} args - Arguments to find a TemporaryClosed
     * @example
     * // Get one TemporaryClosed
     * const temporaryClosed = await prisma.temporaryClosed.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TemporaryClosedFindFirstArgs>(args?: SelectSubset<T, TemporaryClosedFindFirstArgs<ExtArgs>>): Prisma__TemporaryClosedClient<$Result.GetResult<Prisma.$TemporaryClosedPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first TemporaryClosed that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TemporaryClosedFindFirstOrThrowArgs} args - Arguments to find a TemporaryClosed
     * @example
     * // Get one TemporaryClosed
     * const temporaryClosed = await prisma.temporaryClosed.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TemporaryClosedFindFirstOrThrowArgs>(args?: SelectSubset<T, TemporaryClosedFindFirstOrThrowArgs<ExtArgs>>): Prisma__TemporaryClosedClient<$Result.GetResult<Prisma.$TemporaryClosedPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more TemporaryCloseds that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TemporaryClosedFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all TemporaryCloseds
     * const temporaryCloseds = await prisma.temporaryClosed.findMany()
     * 
     * // Get first 10 TemporaryCloseds
     * const temporaryCloseds = await prisma.temporaryClosed.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const temporaryClosedWithIdOnly = await prisma.temporaryClosed.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends TemporaryClosedFindManyArgs>(args?: SelectSubset<T, TemporaryClosedFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TemporaryClosedPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a TemporaryClosed.
     * @param {TemporaryClosedCreateArgs} args - Arguments to create a TemporaryClosed.
     * @example
     * // Create one TemporaryClosed
     * const TemporaryClosed = await prisma.temporaryClosed.create({
     *   data: {
     *     // ... data to create a TemporaryClosed
     *   }
     * })
     * 
     */
    create<T extends TemporaryClosedCreateArgs>(args: SelectSubset<T, TemporaryClosedCreateArgs<ExtArgs>>): Prisma__TemporaryClosedClient<$Result.GetResult<Prisma.$TemporaryClosedPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many TemporaryCloseds.
     * @param {TemporaryClosedCreateManyArgs} args - Arguments to create many TemporaryCloseds.
     * @example
     * // Create many TemporaryCloseds
     * const temporaryClosed = await prisma.temporaryClosed.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TemporaryClosedCreateManyArgs>(args?: SelectSubset<T, TemporaryClosedCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many TemporaryCloseds and returns the data saved in the database.
     * @param {TemporaryClosedCreateManyAndReturnArgs} args - Arguments to create many TemporaryCloseds.
     * @example
     * // Create many TemporaryCloseds
     * const temporaryClosed = await prisma.temporaryClosed.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many TemporaryCloseds and only return the `id`
     * const temporaryClosedWithIdOnly = await prisma.temporaryClosed.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends TemporaryClosedCreateManyAndReturnArgs>(args?: SelectSubset<T, TemporaryClosedCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TemporaryClosedPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a TemporaryClosed.
     * @param {TemporaryClosedDeleteArgs} args - Arguments to delete one TemporaryClosed.
     * @example
     * // Delete one TemporaryClosed
     * const TemporaryClosed = await prisma.temporaryClosed.delete({
     *   where: {
     *     // ... filter to delete one TemporaryClosed
     *   }
     * })
     * 
     */
    delete<T extends TemporaryClosedDeleteArgs>(args: SelectSubset<T, TemporaryClosedDeleteArgs<ExtArgs>>): Prisma__TemporaryClosedClient<$Result.GetResult<Prisma.$TemporaryClosedPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one TemporaryClosed.
     * @param {TemporaryClosedUpdateArgs} args - Arguments to update one TemporaryClosed.
     * @example
     * // Update one TemporaryClosed
     * const temporaryClosed = await prisma.temporaryClosed.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TemporaryClosedUpdateArgs>(args: SelectSubset<T, TemporaryClosedUpdateArgs<ExtArgs>>): Prisma__TemporaryClosedClient<$Result.GetResult<Prisma.$TemporaryClosedPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more TemporaryCloseds.
     * @param {TemporaryClosedDeleteManyArgs} args - Arguments to filter TemporaryCloseds to delete.
     * @example
     * // Delete a few TemporaryCloseds
     * const { count } = await prisma.temporaryClosed.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TemporaryClosedDeleteManyArgs>(args?: SelectSubset<T, TemporaryClosedDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more TemporaryCloseds.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TemporaryClosedUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many TemporaryCloseds
     * const temporaryClosed = await prisma.temporaryClosed.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TemporaryClosedUpdateManyArgs>(args: SelectSubset<T, TemporaryClosedUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more TemporaryCloseds and returns the data updated in the database.
     * @param {TemporaryClosedUpdateManyAndReturnArgs} args - Arguments to update many TemporaryCloseds.
     * @example
     * // Update many TemporaryCloseds
     * const temporaryClosed = await prisma.temporaryClosed.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more TemporaryCloseds and only return the `id`
     * const temporaryClosedWithIdOnly = await prisma.temporaryClosed.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends TemporaryClosedUpdateManyAndReturnArgs>(args: SelectSubset<T, TemporaryClosedUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TemporaryClosedPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one TemporaryClosed.
     * @param {TemporaryClosedUpsertArgs} args - Arguments to update or create a TemporaryClosed.
     * @example
     * // Update or create a TemporaryClosed
     * const temporaryClosed = await prisma.temporaryClosed.upsert({
     *   create: {
     *     // ... data to create a TemporaryClosed
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the TemporaryClosed we want to update
     *   }
     * })
     */
    upsert<T extends TemporaryClosedUpsertArgs>(args: SelectSubset<T, TemporaryClosedUpsertArgs<ExtArgs>>): Prisma__TemporaryClosedClient<$Result.GetResult<Prisma.$TemporaryClosedPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of TemporaryCloseds.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TemporaryClosedCountArgs} args - Arguments to filter TemporaryCloseds to count.
     * @example
     * // Count the number of TemporaryCloseds
     * const count = await prisma.temporaryClosed.count({
     *   where: {
     *     // ... the filter for the TemporaryCloseds we want to count
     *   }
     * })
    **/
    count<T extends TemporaryClosedCountArgs>(
      args?: Subset<T, TemporaryClosedCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TemporaryClosedCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a TemporaryClosed.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TemporaryClosedAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends TemporaryClosedAggregateArgs>(args: Subset<T, TemporaryClosedAggregateArgs>): Prisma.PrismaPromise<GetTemporaryClosedAggregateType<T>>

    /**
     * Group by TemporaryClosed.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TemporaryClosedGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends TemporaryClosedGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TemporaryClosedGroupByArgs['orderBy'] }
        : { orderBy?: TemporaryClosedGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, TemporaryClosedGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTemporaryClosedGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the TemporaryClosed model
   */
  readonly fields: TemporaryClosedFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for TemporaryClosed.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TemporaryClosedClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    organization<T extends OrganizationDefaultArgs<ExtArgs> = {}>(args?: Subset<T, OrganizationDefaultArgs<ExtArgs>>): Prisma__OrganizationClient<$Result.GetResult<Prisma.$OrganizationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    shop<T extends ShopDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ShopDefaultArgs<ExtArgs>>): Prisma__ShopClient<$Result.GetResult<Prisma.$ShopPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the TemporaryClosed model
   */
  interface TemporaryClosedFieldRefs {
    readonly id: FieldRef<"TemporaryClosed", 'String'>
    readonly organizationId: FieldRef<"TemporaryClosed", 'String'>
    readonly shopId: FieldRef<"TemporaryClosed", 'String'>
    readonly date: FieldRef<"TemporaryClosed", 'DateTime'>
    readonly isDeleted: FieldRef<"TemporaryClosed", 'Boolean'>
    readonly createdAt: FieldRef<"TemporaryClosed", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * TemporaryClosed findUnique
   */
  export type TemporaryClosedFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TemporaryClosed
     */
    select?: TemporaryClosedSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TemporaryClosed
     */
    omit?: TemporaryClosedOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TemporaryClosedInclude<ExtArgs> | null
    /**
     * Filter, which TemporaryClosed to fetch.
     */
    where: TemporaryClosedWhereUniqueInput
  }

  /**
   * TemporaryClosed findUniqueOrThrow
   */
  export type TemporaryClosedFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TemporaryClosed
     */
    select?: TemporaryClosedSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TemporaryClosed
     */
    omit?: TemporaryClosedOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TemporaryClosedInclude<ExtArgs> | null
    /**
     * Filter, which TemporaryClosed to fetch.
     */
    where: TemporaryClosedWhereUniqueInput
  }

  /**
   * TemporaryClosed findFirst
   */
  export type TemporaryClosedFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TemporaryClosed
     */
    select?: TemporaryClosedSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TemporaryClosed
     */
    omit?: TemporaryClosedOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TemporaryClosedInclude<ExtArgs> | null
    /**
     * Filter, which TemporaryClosed to fetch.
     */
    where?: TemporaryClosedWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TemporaryCloseds to fetch.
     */
    orderBy?: TemporaryClosedOrderByWithRelationInput | TemporaryClosedOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TemporaryCloseds.
     */
    cursor?: TemporaryClosedWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TemporaryCloseds from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TemporaryCloseds.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TemporaryCloseds.
     */
    distinct?: TemporaryClosedScalarFieldEnum | TemporaryClosedScalarFieldEnum[]
  }

  /**
   * TemporaryClosed findFirstOrThrow
   */
  export type TemporaryClosedFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TemporaryClosed
     */
    select?: TemporaryClosedSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TemporaryClosed
     */
    omit?: TemporaryClosedOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TemporaryClosedInclude<ExtArgs> | null
    /**
     * Filter, which TemporaryClosed to fetch.
     */
    where?: TemporaryClosedWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TemporaryCloseds to fetch.
     */
    orderBy?: TemporaryClosedOrderByWithRelationInput | TemporaryClosedOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TemporaryCloseds.
     */
    cursor?: TemporaryClosedWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TemporaryCloseds from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TemporaryCloseds.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TemporaryCloseds.
     */
    distinct?: TemporaryClosedScalarFieldEnum | TemporaryClosedScalarFieldEnum[]
  }

  /**
   * TemporaryClosed findMany
   */
  export type TemporaryClosedFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TemporaryClosed
     */
    select?: TemporaryClosedSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TemporaryClosed
     */
    omit?: TemporaryClosedOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TemporaryClosedInclude<ExtArgs> | null
    /**
     * Filter, which TemporaryCloseds to fetch.
     */
    where?: TemporaryClosedWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TemporaryCloseds to fetch.
     */
    orderBy?: TemporaryClosedOrderByWithRelationInput | TemporaryClosedOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing TemporaryCloseds.
     */
    cursor?: TemporaryClosedWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TemporaryCloseds from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TemporaryCloseds.
     */
    skip?: number
    distinct?: TemporaryClosedScalarFieldEnum | TemporaryClosedScalarFieldEnum[]
  }

  /**
   * TemporaryClosed create
   */
  export type TemporaryClosedCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TemporaryClosed
     */
    select?: TemporaryClosedSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TemporaryClosed
     */
    omit?: TemporaryClosedOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TemporaryClosedInclude<ExtArgs> | null
    /**
     * The data needed to create a TemporaryClosed.
     */
    data: XOR<TemporaryClosedCreateInput, TemporaryClosedUncheckedCreateInput>
  }

  /**
   * TemporaryClosed createMany
   */
  export type TemporaryClosedCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many TemporaryCloseds.
     */
    data: TemporaryClosedCreateManyInput | TemporaryClosedCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * TemporaryClosed createManyAndReturn
   */
  export type TemporaryClosedCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TemporaryClosed
     */
    select?: TemporaryClosedSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the TemporaryClosed
     */
    omit?: TemporaryClosedOmit<ExtArgs> | null
    /**
     * The data used to create many TemporaryCloseds.
     */
    data: TemporaryClosedCreateManyInput | TemporaryClosedCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TemporaryClosedIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * TemporaryClosed update
   */
  export type TemporaryClosedUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TemporaryClosed
     */
    select?: TemporaryClosedSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TemporaryClosed
     */
    omit?: TemporaryClosedOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TemporaryClosedInclude<ExtArgs> | null
    /**
     * The data needed to update a TemporaryClosed.
     */
    data: XOR<TemporaryClosedUpdateInput, TemporaryClosedUncheckedUpdateInput>
    /**
     * Choose, which TemporaryClosed to update.
     */
    where: TemporaryClosedWhereUniqueInput
  }

  /**
   * TemporaryClosed updateMany
   */
  export type TemporaryClosedUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update TemporaryCloseds.
     */
    data: XOR<TemporaryClosedUpdateManyMutationInput, TemporaryClosedUncheckedUpdateManyInput>
    /**
     * Filter which TemporaryCloseds to update
     */
    where?: TemporaryClosedWhereInput
    /**
     * Limit how many TemporaryCloseds to update.
     */
    limit?: number
  }

  /**
   * TemporaryClosed updateManyAndReturn
   */
  export type TemporaryClosedUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TemporaryClosed
     */
    select?: TemporaryClosedSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the TemporaryClosed
     */
    omit?: TemporaryClosedOmit<ExtArgs> | null
    /**
     * The data used to update TemporaryCloseds.
     */
    data: XOR<TemporaryClosedUpdateManyMutationInput, TemporaryClosedUncheckedUpdateManyInput>
    /**
     * Filter which TemporaryCloseds to update
     */
    where?: TemporaryClosedWhereInput
    /**
     * Limit how many TemporaryCloseds to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TemporaryClosedIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * TemporaryClosed upsert
   */
  export type TemporaryClosedUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TemporaryClosed
     */
    select?: TemporaryClosedSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TemporaryClosed
     */
    omit?: TemporaryClosedOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TemporaryClosedInclude<ExtArgs> | null
    /**
     * The filter to search for the TemporaryClosed to update in case it exists.
     */
    where: TemporaryClosedWhereUniqueInput
    /**
     * In case the TemporaryClosed found by the `where` argument doesn't exist, create a new TemporaryClosed with this data.
     */
    create: XOR<TemporaryClosedCreateInput, TemporaryClosedUncheckedCreateInput>
    /**
     * In case the TemporaryClosed was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TemporaryClosedUpdateInput, TemporaryClosedUncheckedUpdateInput>
  }

  /**
   * TemporaryClosed delete
   */
  export type TemporaryClosedDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TemporaryClosed
     */
    select?: TemporaryClosedSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TemporaryClosed
     */
    omit?: TemporaryClosedOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TemporaryClosedInclude<ExtArgs> | null
    /**
     * Filter which TemporaryClosed to delete.
     */
    where: TemporaryClosedWhereUniqueInput
  }

  /**
   * TemporaryClosed deleteMany
   */
  export type TemporaryClosedDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TemporaryCloseds to delete
     */
    where?: TemporaryClosedWhereInput
    /**
     * Limit how many TemporaryCloseds to delete.
     */
    limit?: number
  }

  /**
   * TemporaryClosed without action
   */
  export type TemporaryClosedDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TemporaryClosed
     */
    select?: TemporaryClosedSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TemporaryClosed
     */
    omit?: TemporaryClosedOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TemporaryClosedInclude<ExtArgs> | null
  }


  /**
   * Model Announce
   */

  export type AggregateAnnounce = {
    _count: AnnounceCountAggregateOutputType | null
    _min: AnnounceMinAggregateOutputType | null
    _max: AnnounceMaxAggregateOutputType | null
  }

  export type AnnounceMinAggregateOutputType = {
    id: string | null
    organizationId: string | null
    shopId: string | null
    message: string | null
    isDeleted: boolean | null
    createdAt: Date | null
  }

  export type AnnounceMaxAggregateOutputType = {
    id: string | null
    organizationId: string | null
    shopId: string | null
    message: string | null
    isDeleted: boolean | null
    createdAt: Date | null
  }

  export type AnnounceCountAggregateOutputType = {
    id: number
    organizationId: number
    shopId: number
    message: number
    isDeleted: number
    createdAt: number
    _all: number
  }


  export type AnnounceMinAggregateInputType = {
    id?: true
    organizationId?: true
    shopId?: true
    message?: true
    isDeleted?: true
    createdAt?: true
  }

  export type AnnounceMaxAggregateInputType = {
    id?: true
    organizationId?: true
    shopId?: true
    message?: true
    isDeleted?: true
    createdAt?: true
  }

  export type AnnounceCountAggregateInputType = {
    id?: true
    organizationId?: true
    shopId?: true
    message?: true
    isDeleted?: true
    createdAt?: true
    _all?: true
  }

  export type AnnounceAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Announce to aggregate.
     */
    where?: AnnounceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Announces to fetch.
     */
    orderBy?: AnnounceOrderByWithRelationInput | AnnounceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AnnounceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Announces from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Announces.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Announces
    **/
    _count?: true | AnnounceCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AnnounceMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AnnounceMaxAggregateInputType
  }

  export type GetAnnounceAggregateType<T extends AnnounceAggregateArgs> = {
        [P in keyof T & keyof AggregateAnnounce]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAnnounce[P]>
      : GetScalarType<T[P], AggregateAnnounce[P]>
  }




  export type AnnounceGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AnnounceWhereInput
    orderBy?: AnnounceOrderByWithAggregationInput | AnnounceOrderByWithAggregationInput[]
    by: AnnounceScalarFieldEnum[] | AnnounceScalarFieldEnum
    having?: AnnounceScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AnnounceCountAggregateInputType | true
    _min?: AnnounceMinAggregateInputType
    _max?: AnnounceMaxAggregateInputType
  }

  export type AnnounceGroupByOutputType = {
    id: string
    organizationId: string
    shopId: string
    message: string
    isDeleted: boolean
    createdAt: Date
    _count: AnnounceCountAggregateOutputType | null
    _min: AnnounceMinAggregateOutputType | null
    _max: AnnounceMaxAggregateOutputType | null
  }

  type GetAnnounceGroupByPayload<T extends AnnounceGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AnnounceGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AnnounceGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AnnounceGroupByOutputType[P]>
            : GetScalarType<T[P], AnnounceGroupByOutputType[P]>
        }
      >
    >


  export type AnnounceSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    organizationId?: boolean
    shopId?: boolean
    message?: boolean
    isDeleted?: boolean
    createdAt?: boolean
    organization?: boolean | OrganizationDefaultArgs<ExtArgs>
    shop?: boolean | ShopDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["announce"]>

  export type AnnounceSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    organizationId?: boolean
    shopId?: boolean
    message?: boolean
    isDeleted?: boolean
    createdAt?: boolean
    organization?: boolean | OrganizationDefaultArgs<ExtArgs>
    shop?: boolean | ShopDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["announce"]>

  export type AnnounceSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    organizationId?: boolean
    shopId?: boolean
    message?: boolean
    isDeleted?: boolean
    createdAt?: boolean
    organization?: boolean | OrganizationDefaultArgs<ExtArgs>
    shop?: boolean | ShopDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["announce"]>

  export type AnnounceSelectScalar = {
    id?: boolean
    organizationId?: boolean
    shopId?: boolean
    message?: boolean
    isDeleted?: boolean
    createdAt?: boolean
  }

  export type AnnounceOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "organizationId" | "shopId" | "message" | "isDeleted" | "createdAt", ExtArgs["result"]["announce"]>
  export type AnnounceInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    organization?: boolean | OrganizationDefaultArgs<ExtArgs>
    shop?: boolean | ShopDefaultArgs<ExtArgs>
  }
  export type AnnounceIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    organization?: boolean | OrganizationDefaultArgs<ExtArgs>
    shop?: boolean | ShopDefaultArgs<ExtArgs>
  }
  export type AnnounceIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    organization?: boolean | OrganizationDefaultArgs<ExtArgs>
    shop?: boolean | ShopDefaultArgs<ExtArgs>
  }

  export type $AnnouncePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Announce"
    objects: {
      organization: Prisma.$OrganizationPayload<ExtArgs>
      shop: Prisma.$ShopPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      organizationId: string
      shopId: string
      message: string
      isDeleted: boolean
      createdAt: Date
    }, ExtArgs["result"]["announce"]>
    composites: {}
  }

  type AnnounceGetPayload<S extends boolean | null | undefined | AnnounceDefaultArgs> = $Result.GetResult<Prisma.$AnnouncePayload, S>

  type AnnounceCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AnnounceFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AnnounceCountAggregateInputType | true
    }

  export interface AnnounceDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Announce'], meta: { name: 'Announce' } }
    /**
     * Find zero or one Announce that matches the filter.
     * @param {AnnounceFindUniqueArgs} args - Arguments to find a Announce
     * @example
     * // Get one Announce
     * const announce = await prisma.announce.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AnnounceFindUniqueArgs>(args: SelectSubset<T, AnnounceFindUniqueArgs<ExtArgs>>): Prisma__AnnounceClient<$Result.GetResult<Prisma.$AnnouncePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Announce that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AnnounceFindUniqueOrThrowArgs} args - Arguments to find a Announce
     * @example
     * // Get one Announce
     * const announce = await prisma.announce.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AnnounceFindUniqueOrThrowArgs>(args: SelectSubset<T, AnnounceFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AnnounceClient<$Result.GetResult<Prisma.$AnnouncePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Announce that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AnnounceFindFirstArgs} args - Arguments to find a Announce
     * @example
     * // Get one Announce
     * const announce = await prisma.announce.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AnnounceFindFirstArgs>(args?: SelectSubset<T, AnnounceFindFirstArgs<ExtArgs>>): Prisma__AnnounceClient<$Result.GetResult<Prisma.$AnnouncePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Announce that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AnnounceFindFirstOrThrowArgs} args - Arguments to find a Announce
     * @example
     * // Get one Announce
     * const announce = await prisma.announce.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AnnounceFindFirstOrThrowArgs>(args?: SelectSubset<T, AnnounceFindFirstOrThrowArgs<ExtArgs>>): Prisma__AnnounceClient<$Result.GetResult<Prisma.$AnnouncePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Announces that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AnnounceFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Announces
     * const announces = await prisma.announce.findMany()
     * 
     * // Get first 10 Announces
     * const announces = await prisma.announce.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const announceWithIdOnly = await prisma.announce.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AnnounceFindManyArgs>(args?: SelectSubset<T, AnnounceFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AnnouncePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Announce.
     * @param {AnnounceCreateArgs} args - Arguments to create a Announce.
     * @example
     * // Create one Announce
     * const Announce = await prisma.announce.create({
     *   data: {
     *     // ... data to create a Announce
     *   }
     * })
     * 
     */
    create<T extends AnnounceCreateArgs>(args: SelectSubset<T, AnnounceCreateArgs<ExtArgs>>): Prisma__AnnounceClient<$Result.GetResult<Prisma.$AnnouncePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Announces.
     * @param {AnnounceCreateManyArgs} args - Arguments to create many Announces.
     * @example
     * // Create many Announces
     * const announce = await prisma.announce.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AnnounceCreateManyArgs>(args?: SelectSubset<T, AnnounceCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Announces and returns the data saved in the database.
     * @param {AnnounceCreateManyAndReturnArgs} args - Arguments to create many Announces.
     * @example
     * // Create many Announces
     * const announce = await prisma.announce.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Announces and only return the `id`
     * const announceWithIdOnly = await prisma.announce.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AnnounceCreateManyAndReturnArgs>(args?: SelectSubset<T, AnnounceCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AnnouncePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Announce.
     * @param {AnnounceDeleteArgs} args - Arguments to delete one Announce.
     * @example
     * // Delete one Announce
     * const Announce = await prisma.announce.delete({
     *   where: {
     *     // ... filter to delete one Announce
     *   }
     * })
     * 
     */
    delete<T extends AnnounceDeleteArgs>(args: SelectSubset<T, AnnounceDeleteArgs<ExtArgs>>): Prisma__AnnounceClient<$Result.GetResult<Prisma.$AnnouncePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Announce.
     * @param {AnnounceUpdateArgs} args - Arguments to update one Announce.
     * @example
     * // Update one Announce
     * const announce = await prisma.announce.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AnnounceUpdateArgs>(args: SelectSubset<T, AnnounceUpdateArgs<ExtArgs>>): Prisma__AnnounceClient<$Result.GetResult<Prisma.$AnnouncePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Announces.
     * @param {AnnounceDeleteManyArgs} args - Arguments to filter Announces to delete.
     * @example
     * // Delete a few Announces
     * const { count } = await prisma.announce.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AnnounceDeleteManyArgs>(args?: SelectSubset<T, AnnounceDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Announces.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AnnounceUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Announces
     * const announce = await prisma.announce.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AnnounceUpdateManyArgs>(args: SelectSubset<T, AnnounceUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Announces and returns the data updated in the database.
     * @param {AnnounceUpdateManyAndReturnArgs} args - Arguments to update many Announces.
     * @example
     * // Update many Announces
     * const announce = await prisma.announce.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Announces and only return the `id`
     * const announceWithIdOnly = await prisma.announce.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends AnnounceUpdateManyAndReturnArgs>(args: SelectSubset<T, AnnounceUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AnnouncePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Announce.
     * @param {AnnounceUpsertArgs} args - Arguments to update or create a Announce.
     * @example
     * // Update or create a Announce
     * const announce = await prisma.announce.upsert({
     *   create: {
     *     // ... data to create a Announce
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Announce we want to update
     *   }
     * })
     */
    upsert<T extends AnnounceUpsertArgs>(args: SelectSubset<T, AnnounceUpsertArgs<ExtArgs>>): Prisma__AnnounceClient<$Result.GetResult<Prisma.$AnnouncePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Announces.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AnnounceCountArgs} args - Arguments to filter Announces to count.
     * @example
     * // Count the number of Announces
     * const count = await prisma.announce.count({
     *   where: {
     *     // ... the filter for the Announces we want to count
     *   }
     * })
    **/
    count<T extends AnnounceCountArgs>(
      args?: Subset<T, AnnounceCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AnnounceCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Announce.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AnnounceAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends AnnounceAggregateArgs>(args: Subset<T, AnnounceAggregateArgs>): Prisma.PrismaPromise<GetAnnounceAggregateType<T>>

    /**
     * Group by Announce.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AnnounceGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends AnnounceGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AnnounceGroupByArgs['orderBy'] }
        : { orderBy?: AnnounceGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, AnnounceGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAnnounceGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Announce model
   */
  readonly fields: AnnounceFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Announce.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AnnounceClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    organization<T extends OrganizationDefaultArgs<ExtArgs> = {}>(args?: Subset<T, OrganizationDefaultArgs<ExtArgs>>): Prisma__OrganizationClient<$Result.GetResult<Prisma.$OrganizationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    shop<T extends ShopDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ShopDefaultArgs<ExtArgs>>): Prisma__ShopClient<$Result.GetResult<Prisma.$ShopPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Announce model
   */
  interface AnnounceFieldRefs {
    readonly id: FieldRef<"Announce", 'String'>
    readonly organizationId: FieldRef<"Announce", 'String'>
    readonly shopId: FieldRef<"Announce", 'String'>
    readonly message: FieldRef<"Announce", 'String'>
    readonly isDeleted: FieldRef<"Announce", 'Boolean'>
    readonly createdAt: FieldRef<"Announce", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Announce findUnique
   */
  export type AnnounceFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Announce
     */
    select?: AnnounceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Announce
     */
    omit?: AnnounceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnnounceInclude<ExtArgs> | null
    /**
     * Filter, which Announce to fetch.
     */
    where: AnnounceWhereUniqueInput
  }

  /**
   * Announce findUniqueOrThrow
   */
  export type AnnounceFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Announce
     */
    select?: AnnounceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Announce
     */
    omit?: AnnounceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnnounceInclude<ExtArgs> | null
    /**
     * Filter, which Announce to fetch.
     */
    where: AnnounceWhereUniqueInput
  }

  /**
   * Announce findFirst
   */
  export type AnnounceFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Announce
     */
    select?: AnnounceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Announce
     */
    omit?: AnnounceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnnounceInclude<ExtArgs> | null
    /**
     * Filter, which Announce to fetch.
     */
    where?: AnnounceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Announces to fetch.
     */
    orderBy?: AnnounceOrderByWithRelationInput | AnnounceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Announces.
     */
    cursor?: AnnounceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Announces from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Announces.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Announces.
     */
    distinct?: AnnounceScalarFieldEnum | AnnounceScalarFieldEnum[]
  }

  /**
   * Announce findFirstOrThrow
   */
  export type AnnounceFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Announce
     */
    select?: AnnounceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Announce
     */
    omit?: AnnounceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnnounceInclude<ExtArgs> | null
    /**
     * Filter, which Announce to fetch.
     */
    where?: AnnounceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Announces to fetch.
     */
    orderBy?: AnnounceOrderByWithRelationInput | AnnounceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Announces.
     */
    cursor?: AnnounceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Announces from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Announces.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Announces.
     */
    distinct?: AnnounceScalarFieldEnum | AnnounceScalarFieldEnum[]
  }

  /**
   * Announce findMany
   */
  export type AnnounceFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Announce
     */
    select?: AnnounceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Announce
     */
    omit?: AnnounceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnnounceInclude<ExtArgs> | null
    /**
     * Filter, which Announces to fetch.
     */
    where?: AnnounceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Announces to fetch.
     */
    orderBy?: AnnounceOrderByWithRelationInput | AnnounceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Announces.
     */
    cursor?: AnnounceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Announces from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Announces.
     */
    skip?: number
    distinct?: AnnounceScalarFieldEnum | AnnounceScalarFieldEnum[]
  }

  /**
   * Announce create
   */
  export type AnnounceCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Announce
     */
    select?: AnnounceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Announce
     */
    omit?: AnnounceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnnounceInclude<ExtArgs> | null
    /**
     * The data needed to create a Announce.
     */
    data: XOR<AnnounceCreateInput, AnnounceUncheckedCreateInput>
  }

  /**
   * Announce createMany
   */
  export type AnnounceCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Announces.
     */
    data: AnnounceCreateManyInput | AnnounceCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Announce createManyAndReturn
   */
  export type AnnounceCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Announce
     */
    select?: AnnounceSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Announce
     */
    omit?: AnnounceOmit<ExtArgs> | null
    /**
     * The data used to create many Announces.
     */
    data: AnnounceCreateManyInput | AnnounceCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnnounceIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Announce update
   */
  export type AnnounceUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Announce
     */
    select?: AnnounceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Announce
     */
    omit?: AnnounceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnnounceInclude<ExtArgs> | null
    /**
     * The data needed to update a Announce.
     */
    data: XOR<AnnounceUpdateInput, AnnounceUncheckedUpdateInput>
    /**
     * Choose, which Announce to update.
     */
    where: AnnounceWhereUniqueInput
  }

  /**
   * Announce updateMany
   */
  export type AnnounceUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Announces.
     */
    data: XOR<AnnounceUpdateManyMutationInput, AnnounceUncheckedUpdateManyInput>
    /**
     * Filter which Announces to update
     */
    where?: AnnounceWhereInput
    /**
     * Limit how many Announces to update.
     */
    limit?: number
  }

  /**
   * Announce updateManyAndReturn
   */
  export type AnnounceUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Announce
     */
    select?: AnnounceSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Announce
     */
    omit?: AnnounceOmit<ExtArgs> | null
    /**
     * The data used to update Announces.
     */
    data: XOR<AnnounceUpdateManyMutationInput, AnnounceUncheckedUpdateManyInput>
    /**
     * Filter which Announces to update
     */
    where?: AnnounceWhereInput
    /**
     * Limit how many Announces to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnnounceIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Announce upsert
   */
  export type AnnounceUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Announce
     */
    select?: AnnounceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Announce
     */
    omit?: AnnounceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnnounceInclude<ExtArgs> | null
    /**
     * The filter to search for the Announce to update in case it exists.
     */
    where: AnnounceWhereUniqueInput
    /**
     * In case the Announce found by the `where` argument doesn't exist, create a new Announce with this data.
     */
    create: XOR<AnnounceCreateInput, AnnounceUncheckedCreateInput>
    /**
     * In case the Announce was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AnnounceUpdateInput, AnnounceUncheckedUpdateInput>
  }

  /**
   * Announce delete
   */
  export type AnnounceDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Announce
     */
    select?: AnnounceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Announce
     */
    omit?: AnnounceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnnounceInclude<ExtArgs> | null
    /**
     * Filter which Announce to delete.
     */
    where: AnnounceWhereUniqueInput
  }

  /**
   * Announce deleteMany
   */
  export type AnnounceDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Announces to delete
     */
    where?: AnnounceWhereInput
    /**
     * Limit how many Announces to delete.
     */
    limit?: number
  }

  /**
   * Announce without action
   */
  export type AnnounceDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Announce
     */
    select?: AnnounceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Announce
     */
    omit?: AnnounceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnnounceInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const ShopUserBelongingScalarFieldEnum: {
    id: 'id',
    shopId: 'shopId',
    userId: 'userId',
    isDeleted: 'isDeleted',
    createdAt: 'createdAt'
  };

  export type ShopUserBelongingScalarFieldEnum = (typeof ShopUserBelongingScalarFieldEnum)[keyof typeof ShopUserBelongingScalarFieldEnum]


  export const OrganizationShopBelongingScalarFieldEnum: {
    id: 'id',
    organizationId: 'organizationId',
    shopId: 'shopId',
    isDeleted: 'isDeleted',
    createdAt: 'createdAt'
  };

  export type OrganizationShopBelongingScalarFieldEnum = (typeof OrganizationShopBelongingScalarFieldEnum)[keyof typeof OrganizationShopBelongingScalarFieldEnum]


  export const OrganizationScalarFieldEnum: {
    id: 'id',
    organizationName: 'organizationName',
    isDeleted: 'isDeleted',
    createdAt: 'createdAt'
  };

  export type OrganizationScalarFieldEnum = (typeof OrganizationScalarFieldEnum)[keyof typeof OrganizationScalarFieldEnum]


  export const ShopScalarFieldEnum: {
    id: 'id',
    shopName: 'shopName',
    openTime: 'openTime',
    closeTime: 'closeTime',
    timeUnit: 'timeUnit',
    submitFrequency: 'submitFrequency',
    avatar: 'avatar',
    useTimeCard: 'useTimeCard',
    isDeleted: 'isDeleted',
    createdAt: 'createdAt'
  };

  export type ShopScalarFieldEnum = (typeof ShopScalarFieldEnum)[keyof typeof ShopScalarFieldEnum]


  export const UserScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    userName: 'userName',
    avatar: 'avatar',
    isDeleted: 'isDeleted',
    createdAt: 'createdAt'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const InvitationScalarFieldEnum: {
    id: 'id',
    invitedByShopId: 'invitedByShopId',
    targetUserId: 'targetUserId',
    accepted: 'accepted',
    isDeleted: 'isDeleted',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type InvitationScalarFieldEnum = (typeof InvitationScalarFieldEnum)[keyof typeof InvitationScalarFieldEnum]


  export const OperationScalarFieldEnum: {
    id: 'id',
    shopId: 'shopId',
    operationName: 'operationName',
    icon: 'icon',
    color: 'color',
    isDeleted: 'isDeleted',
    createdAt: 'createdAt'
  };

  export type OperationScalarFieldEnum = (typeof OperationScalarFieldEnum)[keyof typeof OperationScalarFieldEnum]


  export const StableShiftScalarFieldEnum: {
    id: 'id',
    shopId: 'shopId',
    userId: 'userId',
    workFrom: 'workFrom',
    workTo: 'workTo',
    breakFrom: 'breakFrom',
    breakTo: 'breakTo',
    isDeleted: 'isDeleted',
    createdAt: 'createdAt'
  };

  export type StableShiftScalarFieldEnum = (typeof StableShiftScalarFieldEnum)[keyof typeof StableShiftScalarFieldEnum]


  export const UnstableShiftScalarFieldEnum: {
    id: 'id',
    shopId: 'shopId',
    userId: 'userId',
    workFrom: 'workFrom',
    workTo: 'workTo',
    breakFrom: 'breakFrom',
    breakTo: 'breakTo',
    isDeleted: 'isDeleted',
    createdAt: 'createdAt'
  };

  export type UnstableShiftScalarFieldEnum = (typeof UnstableShiftScalarFieldEnum)[keyof typeof UnstableShiftScalarFieldEnum]


  export const RequestScalarFieldEnum: {
    id: 'id',
    shopId: 'shopId',
    userId: 'userId',
    dateFrom: 'dateFrom',
    dateTo: 'dateTo',
    done: 'done',
    isDeleted: 'isDeleted',
    createdAt: 'createdAt'
  };

  export type RequestScalarFieldEnum = (typeof RequestScalarFieldEnum)[keyof typeof RequestScalarFieldEnum]


  export const TimeCardScalarFieldEnum: {
    id: 'id',
    shopId: 'shopId',
    userId: 'userId',
    workFrom: 'workFrom',
    workTo: 'workTo',
    breakFrom: 'breakFrom',
    breakTo: 'breakTo',
    isDeleted: 'isDeleted',
    createdAt: 'createdAt'
  };

  export type TimeCardScalarFieldEnum = (typeof TimeCardScalarFieldEnum)[keyof typeof TimeCardScalarFieldEnum]


  export const TemporaryClosedScalarFieldEnum: {
    id: 'id',
    organizationId: 'organizationId',
    shopId: 'shopId',
    date: 'date',
    isDeleted: 'isDeleted',
    createdAt: 'createdAt'
  };

  export type TemporaryClosedScalarFieldEnum = (typeof TemporaryClosedScalarFieldEnum)[keyof typeof TemporaryClosedScalarFieldEnum]


  export const AnnounceScalarFieldEnum: {
    id: 'id',
    organizationId: 'organizationId',
    shopId: 'shopId',
    message: 'message',
    isDeleted: 'isDeleted',
    createdAt: 'createdAt'
  };

  export type AnnounceScalarFieldEnum = (typeof AnnounceScalarFieldEnum)[keyof typeof AnnounceScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type ShopUserBelongingWhereInput = {
    AND?: ShopUserBelongingWhereInput | ShopUserBelongingWhereInput[]
    OR?: ShopUserBelongingWhereInput[]
    NOT?: ShopUserBelongingWhereInput | ShopUserBelongingWhereInput[]
    id?: UuidFilter<"ShopUserBelonging"> | string
    shopId?: UuidFilter<"ShopUserBelonging"> | string
    userId?: StringFilter<"ShopUserBelonging"> | string
    isDeleted?: BoolFilter<"ShopUserBelonging"> | boolean
    createdAt?: DateTimeFilter<"ShopUserBelonging"> | Date | string
    shop?: XOR<ShopScalarRelationFilter, ShopWhereInput>
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type ShopUserBelongingOrderByWithRelationInput = {
    id?: SortOrder
    shopId?: SortOrder
    userId?: SortOrder
    isDeleted?: SortOrder
    createdAt?: SortOrder
    shop?: ShopOrderByWithRelationInput
    user?: UserOrderByWithRelationInput
  }

  export type ShopUserBelongingWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    userId?: string
    AND?: ShopUserBelongingWhereInput | ShopUserBelongingWhereInput[]
    OR?: ShopUserBelongingWhereInput[]
    NOT?: ShopUserBelongingWhereInput | ShopUserBelongingWhereInput[]
    shopId?: UuidFilter<"ShopUserBelonging"> | string
    isDeleted?: BoolFilter<"ShopUserBelonging"> | boolean
    createdAt?: DateTimeFilter<"ShopUserBelonging"> | Date | string
    shop?: XOR<ShopScalarRelationFilter, ShopWhereInput>
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id" | "userId">

  export type ShopUserBelongingOrderByWithAggregationInput = {
    id?: SortOrder
    shopId?: SortOrder
    userId?: SortOrder
    isDeleted?: SortOrder
    createdAt?: SortOrder
    _count?: ShopUserBelongingCountOrderByAggregateInput
    _max?: ShopUserBelongingMaxOrderByAggregateInput
    _min?: ShopUserBelongingMinOrderByAggregateInput
  }

  export type ShopUserBelongingScalarWhereWithAggregatesInput = {
    AND?: ShopUserBelongingScalarWhereWithAggregatesInput | ShopUserBelongingScalarWhereWithAggregatesInput[]
    OR?: ShopUserBelongingScalarWhereWithAggregatesInput[]
    NOT?: ShopUserBelongingScalarWhereWithAggregatesInput | ShopUserBelongingScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"ShopUserBelonging"> | string
    shopId?: UuidWithAggregatesFilter<"ShopUserBelonging"> | string
    userId?: StringWithAggregatesFilter<"ShopUserBelonging"> | string
    isDeleted?: BoolWithAggregatesFilter<"ShopUserBelonging"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"ShopUserBelonging"> | Date | string
  }

  export type OrganizationShopBelongingWhereInput = {
    AND?: OrganizationShopBelongingWhereInput | OrganizationShopBelongingWhereInput[]
    OR?: OrganizationShopBelongingWhereInput[]
    NOT?: OrganizationShopBelongingWhereInput | OrganizationShopBelongingWhereInput[]
    id?: UuidFilter<"OrganizationShopBelonging"> | string
    organizationId?: UuidFilter<"OrganizationShopBelonging"> | string
    shopId?: UuidFilter<"OrganizationShopBelonging"> | string
    isDeleted?: BoolFilter<"OrganizationShopBelonging"> | boolean
    createdAt?: DateTimeFilter<"OrganizationShopBelonging"> | Date | string
    shop?: XOR<ShopScalarRelationFilter, ShopWhereInput>
    organization?: XOR<OrganizationScalarRelationFilter, OrganizationWhereInput>
  }

  export type OrganizationShopBelongingOrderByWithRelationInput = {
    id?: SortOrder
    organizationId?: SortOrder
    shopId?: SortOrder
    isDeleted?: SortOrder
    createdAt?: SortOrder
    shop?: ShopOrderByWithRelationInput
    organization?: OrganizationOrderByWithRelationInput
  }

  export type OrganizationShopBelongingWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: OrganizationShopBelongingWhereInput | OrganizationShopBelongingWhereInput[]
    OR?: OrganizationShopBelongingWhereInput[]
    NOT?: OrganizationShopBelongingWhereInput | OrganizationShopBelongingWhereInput[]
    organizationId?: UuidFilter<"OrganizationShopBelonging"> | string
    shopId?: UuidFilter<"OrganizationShopBelonging"> | string
    isDeleted?: BoolFilter<"OrganizationShopBelonging"> | boolean
    createdAt?: DateTimeFilter<"OrganizationShopBelonging"> | Date | string
    shop?: XOR<ShopScalarRelationFilter, ShopWhereInput>
    organization?: XOR<OrganizationScalarRelationFilter, OrganizationWhereInput>
  }, "id">

  export type OrganizationShopBelongingOrderByWithAggregationInput = {
    id?: SortOrder
    organizationId?: SortOrder
    shopId?: SortOrder
    isDeleted?: SortOrder
    createdAt?: SortOrder
    _count?: OrganizationShopBelongingCountOrderByAggregateInput
    _max?: OrganizationShopBelongingMaxOrderByAggregateInput
    _min?: OrganizationShopBelongingMinOrderByAggregateInput
  }

  export type OrganizationShopBelongingScalarWhereWithAggregatesInput = {
    AND?: OrganizationShopBelongingScalarWhereWithAggregatesInput | OrganizationShopBelongingScalarWhereWithAggregatesInput[]
    OR?: OrganizationShopBelongingScalarWhereWithAggregatesInput[]
    NOT?: OrganizationShopBelongingScalarWhereWithAggregatesInput | OrganizationShopBelongingScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"OrganizationShopBelonging"> | string
    organizationId?: UuidWithAggregatesFilter<"OrganizationShopBelonging"> | string
    shopId?: UuidWithAggregatesFilter<"OrganizationShopBelonging"> | string
    isDeleted?: BoolWithAggregatesFilter<"OrganizationShopBelonging"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"OrganizationShopBelonging"> | Date | string
  }

  export type OrganizationWhereInput = {
    AND?: OrganizationWhereInput | OrganizationWhereInput[]
    OR?: OrganizationWhereInput[]
    NOT?: OrganizationWhereInput | OrganizationWhereInput[]
    id?: UuidFilter<"Organization"> | string
    organizationName?: StringFilter<"Organization"> | string
    isDeleted?: BoolFilter<"Organization"> | boolean
    createdAt?: DateTimeFilter<"Organization"> | Date | string
    shop?: OrganizationShopBelongingListRelationFilter
    temporaryClosed?: TemporaryClosedListRelationFilter
    announce?: AnnounceListRelationFilter
  }

  export type OrganizationOrderByWithRelationInput = {
    id?: SortOrder
    organizationName?: SortOrder
    isDeleted?: SortOrder
    createdAt?: SortOrder
    shop?: OrganizationShopBelongingOrderByRelationAggregateInput
    temporaryClosed?: TemporaryClosedOrderByRelationAggregateInput
    announce?: AnnounceOrderByRelationAggregateInput
  }

  export type OrganizationWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: OrganizationWhereInput | OrganizationWhereInput[]
    OR?: OrganizationWhereInput[]
    NOT?: OrganizationWhereInput | OrganizationWhereInput[]
    organizationName?: StringFilter<"Organization"> | string
    isDeleted?: BoolFilter<"Organization"> | boolean
    createdAt?: DateTimeFilter<"Organization"> | Date | string
    shop?: OrganizationShopBelongingListRelationFilter
    temporaryClosed?: TemporaryClosedListRelationFilter
    announce?: AnnounceListRelationFilter
  }, "id">

  export type OrganizationOrderByWithAggregationInput = {
    id?: SortOrder
    organizationName?: SortOrder
    isDeleted?: SortOrder
    createdAt?: SortOrder
    _count?: OrganizationCountOrderByAggregateInput
    _max?: OrganizationMaxOrderByAggregateInput
    _min?: OrganizationMinOrderByAggregateInput
  }

  export type OrganizationScalarWhereWithAggregatesInput = {
    AND?: OrganizationScalarWhereWithAggregatesInput | OrganizationScalarWhereWithAggregatesInput[]
    OR?: OrganizationScalarWhereWithAggregatesInput[]
    NOT?: OrganizationScalarWhereWithAggregatesInput | OrganizationScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"Organization"> | string
    organizationName?: StringWithAggregatesFilter<"Organization"> | string
    isDeleted?: BoolWithAggregatesFilter<"Organization"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"Organization"> | Date | string
  }

  export type ShopWhereInput = {
    AND?: ShopWhereInput | ShopWhereInput[]
    OR?: ShopWhereInput[]
    NOT?: ShopWhereInput | ShopWhereInput[]
    id?: UuidFilter<"Shop"> | string
    shopName?: StringFilter<"Shop"> | string
    openTime?: StringFilter<"Shop"> | string
    closeTime?: StringFilter<"Shop"> | string
    timeUnit?: IntFilter<"Shop"> | number
    submitFrequency?: StringFilter<"Shop"> | string
    avatar?: StringFilter<"Shop"> | string
    useTimeCard?: BoolFilter<"Shop"> | boolean
    isDeleted?: BoolFilter<"Shop"> | boolean
    createdAt?: DateTimeFilter<"Shop"> | Date | string
    organization?: OrganizationShopBelongingListRelationFilter
    user?: ShopUserBelongingListRelationFilter
    operation?: OperationListRelationFilter
    stableShift?: StableShiftListRelationFilter
    unstableShift?: UnstableShiftListRelationFilter
    request?: RequestListRelationFilter
    timeCard?: TimeCardListRelationFilter
    temporaryClosed?: TemporaryClosedListRelationFilter
    announce?: AnnounceListRelationFilter
    Invitation?: InvitationListRelationFilter
  }

  export type ShopOrderByWithRelationInput = {
    id?: SortOrder
    shopName?: SortOrder
    openTime?: SortOrder
    closeTime?: SortOrder
    timeUnit?: SortOrder
    submitFrequency?: SortOrder
    avatar?: SortOrder
    useTimeCard?: SortOrder
    isDeleted?: SortOrder
    createdAt?: SortOrder
    organization?: OrganizationShopBelongingOrderByRelationAggregateInput
    user?: ShopUserBelongingOrderByRelationAggregateInput
    operation?: OperationOrderByRelationAggregateInput
    stableShift?: StableShiftOrderByRelationAggregateInput
    unstableShift?: UnstableShiftOrderByRelationAggregateInput
    request?: RequestOrderByRelationAggregateInput
    timeCard?: TimeCardOrderByRelationAggregateInput
    temporaryClosed?: TemporaryClosedOrderByRelationAggregateInput
    announce?: AnnounceOrderByRelationAggregateInput
    Invitation?: InvitationOrderByRelationAggregateInput
  }

  export type ShopWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ShopWhereInput | ShopWhereInput[]
    OR?: ShopWhereInput[]
    NOT?: ShopWhereInput | ShopWhereInput[]
    shopName?: StringFilter<"Shop"> | string
    openTime?: StringFilter<"Shop"> | string
    closeTime?: StringFilter<"Shop"> | string
    timeUnit?: IntFilter<"Shop"> | number
    submitFrequency?: StringFilter<"Shop"> | string
    avatar?: StringFilter<"Shop"> | string
    useTimeCard?: BoolFilter<"Shop"> | boolean
    isDeleted?: BoolFilter<"Shop"> | boolean
    createdAt?: DateTimeFilter<"Shop"> | Date | string
    organization?: OrganizationShopBelongingListRelationFilter
    user?: ShopUserBelongingListRelationFilter
    operation?: OperationListRelationFilter
    stableShift?: StableShiftListRelationFilter
    unstableShift?: UnstableShiftListRelationFilter
    request?: RequestListRelationFilter
    timeCard?: TimeCardListRelationFilter
    temporaryClosed?: TemporaryClosedListRelationFilter
    announce?: AnnounceListRelationFilter
    Invitation?: InvitationListRelationFilter
  }, "id">

  export type ShopOrderByWithAggregationInput = {
    id?: SortOrder
    shopName?: SortOrder
    openTime?: SortOrder
    closeTime?: SortOrder
    timeUnit?: SortOrder
    submitFrequency?: SortOrder
    avatar?: SortOrder
    useTimeCard?: SortOrder
    isDeleted?: SortOrder
    createdAt?: SortOrder
    _count?: ShopCountOrderByAggregateInput
    _avg?: ShopAvgOrderByAggregateInput
    _max?: ShopMaxOrderByAggregateInput
    _min?: ShopMinOrderByAggregateInput
    _sum?: ShopSumOrderByAggregateInput
  }

  export type ShopScalarWhereWithAggregatesInput = {
    AND?: ShopScalarWhereWithAggregatesInput | ShopScalarWhereWithAggregatesInput[]
    OR?: ShopScalarWhereWithAggregatesInput[]
    NOT?: ShopScalarWhereWithAggregatesInput | ShopScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"Shop"> | string
    shopName?: StringWithAggregatesFilter<"Shop"> | string
    openTime?: StringWithAggregatesFilter<"Shop"> | string
    closeTime?: StringWithAggregatesFilter<"Shop"> | string
    timeUnit?: IntWithAggregatesFilter<"Shop"> | number
    submitFrequency?: StringWithAggregatesFilter<"Shop"> | string
    avatar?: StringWithAggregatesFilter<"Shop"> | string
    useTimeCard?: BoolWithAggregatesFilter<"Shop"> | boolean
    isDeleted?: BoolWithAggregatesFilter<"Shop"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"Shop"> | Date | string
  }

  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: UuidFilter<"User"> | string
    userId?: StringFilter<"User"> | string
    userName?: StringFilter<"User"> | string
    avatar?: StringFilter<"User"> | string
    isDeleted?: BoolFilter<"User"> | boolean
    createdAt?: DateTimeFilter<"User"> | Date | string
    shop?: ShopUserBelongingListRelationFilter
    stableShift?: StableShiftListRelationFilter
    unstableShift?: UnstableShiftListRelationFilter
    request?: RequestListRelationFilter
    timeCard?: TimeCardListRelationFilter
    Invitation?: InvitationListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    userName?: SortOrder
    avatar?: SortOrder
    isDeleted?: SortOrder
    createdAt?: SortOrder
    shop?: ShopUserBelongingOrderByRelationAggregateInput
    stableShift?: StableShiftOrderByRelationAggregateInput
    unstableShift?: UnstableShiftOrderByRelationAggregateInput
    request?: RequestOrderByRelationAggregateInput
    timeCard?: TimeCardOrderByRelationAggregateInput
    Invitation?: InvitationOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    userId?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    userName?: StringFilter<"User"> | string
    avatar?: StringFilter<"User"> | string
    isDeleted?: BoolFilter<"User"> | boolean
    createdAt?: DateTimeFilter<"User"> | Date | string
    shop?: ShopUserBelongingListRelationFilter
    stableShift?: StableShiftListRelationFilter
    unstableShift?: UnstableShiftListRelationFilter
    request?: RequestListRelationFilter
    timeCard?: TimeCardListRelationFilter
    Invitation?: InvitationListRelationFilter
  }, "id" | "userId">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    userName?: SortOrder
    avatar?: SortOrder
    isDeleted?: SortOrder
    createdAt?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"User"> | string
    userId?: StringWithAggregatesFilter<"User"> | string
    userName?: StringWithAggregatesFilter<"User"> | string
    avatar?: StringWithAggregatesFilter<"User"> | string
    isDeleted?: BoolWithAggregatesFilter<"User"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
  }

  export type InvitationWhereInput = {
    AND?: InvitationWhereInput | InvitationWhereInput[]
    OR?: InvitationWhereInput[]
    NOT?: InvitationWhereInput | InvitationWhereInput[]
    id?: UuidFilter<"Invitation"> | string
    invitedByShopId?: UuidFilter<"Invitation"> | string
    targetUserId?: UuidFilter<"Invitation"> | string
    accepted?: BoolFilter<"Invitation"> | boolean
    isDeleted?: BoolFilter<"Invitation"> | boolean
    createdAt?: DateTimeFilter<"Invitation"> | Date | string
    updatedAt?: DateTimeFilter<"Invitation"> | Date | string
    invitedBy?: XOR<ShopScalarRelationFilter, ShopWhereInput>
    targetUser?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type InvitationOrderByWithRelationInput = {
    id?: SortOrder
    invitedByShopId?: SortOrder
    targetUserId?: SortOrder
    accepted?: SortOrder
    isDeleted?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    invitedBy?: ShopOrderByWithRelationInput
    targetUser?: UserOrderByWithRelationInput
  }

  export type InvitationWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: InvitationWhereInput | InvitationWhereInput[]
    OR?: InvitationWhereInput[]
    NOT?: InvitationWhereInput | InvitationWhereInput[]
    invitedByShopId?: UuidFilter<"Invitation"> | string
    targetUserId?: UuidFilter<"Invitation"> | string
    accepted?: BoolFilter<"Invitation"> | boolean
    isDeleted?: BoolFilter<"Invitation"> | boolean
    createdAt?: DateTimeFilter<"Invitation"> | Date | string
    updatedAt?: DateTimeFilter<"Invitation"> | Date | string
    invitedBy?: XOR<ShopScalarRelationFilter, ShopWhereInput>
    targetUser?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id">

  export type InvitationOrderByWithAggregationInput = {
    id?: SortOrder
    invitedByShopId?: SortOrder
    targetUserId?: SortOrder
    accepted?: SortOrder
    isDeleted?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: InvitationCountOrderByAggregateInput
    _max?: InvitationMaxOrderByAggregateInput
    _min?: InvitationMinOrderByAggregateInput
  }

  export type InvitationScalarWhereWithAggregatesInput = {
    AND?: InvitationScalarWhereWithAggregatesInput | InvitationScalarWhereWithAggregatesInput[]
    OR?: InvitationScalarWhereWithAggregatesInput[]
    NOT?: InvitationScalarWhereWithAggregatesInput | InvitationScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"Invitation"> | string
    invitedByShopId?: UuidWithAggregatesFilter<"Invitation"> | string
    targetUserId?: UuidWithAggregatesFilter<"Invitation"> | string
    accepted?: BoolWithAggregatesFilter<"Invitation"> | boolean
    isDeleted?: BoolWithAggregatesFilter<"Invitation"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"Invitation"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Invitation"> | Date | string
  }

  export type OperationWhereInput = {
    AND?: OperationWhereInput | OperationWhereInput[]
    OR?: OperationWhereInput[]
    NOT?: OperationWhereInput | OperationWhereInput[]
    id?: UuidFilter<"Operation"> | string
    shopId?: UuidFilter<"Operation"> | string
    operationName?: StringFilter<"Operation"> | string
    icon?: StringFilter<"Operation"> | string
    color?: StringFilter<"Operation"> | string
    isDeleted?: BoolFilter<"Operation"> | boolean
    createdAt?: DateTimeFilter<"Operation"> | Date | string
    shop?: XOR<ShopScalarRelationFilter, ShopWhereInput>
  }

  export type OperationOrderByWithRelationInput = {
    id?: SortOrder
    shopId?: SortOrder
    operationName?: SortOrder
    icon?: SortOrder
    color?: SortOrder
    isDeleted?: SortOrder
    createdAt?: SortOrder
    shop?: ShopOrderByWithRelationInput
  }

  export type OperationWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: OperationWhereInput | OperationWhereInput[]
    OR?: OperationWhereInput[]
    NOT?: OperationWhereInput | OperationWhereInput[]
    shopId?: UuidFilter<"Operation"> | string
    operationName?: StringFilter<"Operation"> | string
    icon?: StringFilter<"Operation"> | string
    color?: StringFilter<"Operation"> | string
    isDeleted?: BoolFilter<"Operation"> | boolean
    createdAt?: DateTimeFilter<"Operation"> | Date | string
    shop?: XOR<ShopScalarRelationFilter, ShopWhereInput>
  }, "id">

  export type OperationOrderByWithAggregationInput = {
    id?: SortOrder
    shopId?: SortOrder
    operationName?: SortOrder
    icon?: SortOrder
    color?: SortOrder
    isDeleted?: SortOrder
    createdAt?: SortOrder
    _count?: OperationCountOrderByAggregateInput
    _max?: OperationMaxOrderByAggregateInput
    _min?: OperationMinOrderByAggregateInput
  }

  export type OperationScalarWhereWithAggregatesInput = {
    AND?: OperationScalarWhereWithAggregatesInput | OperationScalarWhereWithAggregatesInput[]
    OR?: OperationScalarWhereWithAggregatesInput[]
    NOT?: OperationScalarWhereWithAggregatesInput | OperationScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"Operation"> | string
    shopId?: UuidWithAggregatesFilter<"Operation"> | string
    operationName?: StringWithAggregatesFilter<"Operation"> | string
    icon?: StringWithAggregatesFilter<"Operation"> | string
    color?: StringWithAggregatesFilter<"Operation"> | string
    isDeleted?: BoolWithAggregatesFilter<"Operation"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"Operation"> | Date | string
  }

  export type StableShiftWhereInput = {
    AND?: StableShiftWhereInput | StableShiftWhereInput[]
    OR?: StableShiftWhereInput[]
    NOT?: StableShiftWhereInput | StableShiftWhereInput[]
    id?: UuidFilter<"StableShift"> | string
    shopId?: UuidFilter<"StableShift"> | string
    userId?: StringFilter<"StableShift"> | string
    workFrom?: DateTimeFilter<"StableShift"> | Date | string
    workTo?: DateTimeFilter<"StableShift"> | Date | string
    breakFrom?: DateTimeFilter<"StableShift"> | Date | string
    breakTo?: DateTimeFilter<"StableShift"> | Date | string
    isDeleted?: BoolFilter<"StableShift"> | boolean
    createdAt?: DateTimeFilter<"StableShift"> | Date | string
    shop?: XOR<ShopScalarRelationFilter, ShopWhereInput>
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type StableShiftOrderByWithRelationInput = {
    id?: SortOrder
    shopId?: SortOrder
    userId?: SortOrder
    workFrom?: SortOrder
    workTo?: SortOrder
    breakFrom?: SortOrder
    breakTo?: SortOrder
    isDeleted?: SortOrder
    createdAt?: SortOrder
    shop?: ShopOrderByWithRelationInput
    user?: UserOrderByWithRelationInput
  }

  export type StableShiftWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    userId?: string
    AND?: StableShiftWhereInput | StableShiftWhereInput[]
    OR?: StableShiftWhereInput[]
    NOT?: StableShiftWhereInput | StableShiftWhereInput[]
    shopId?: UuidFilter<"StableShift"> | string
    workFrom?: DateTimeFilter<"StableShift"> | Date | string
    workTo?: DateTimeFilter<"StableShift"> | Date | string
    breakFrom?: DateTimeFilter<"StableShift"> | Date | string
    breakTo?: DateTimeFilter<"StableShift"> | Date | string
    isDeleted?: BoolFilter<"StableShift"> | boolean
    createdAt?: DateTimeFilter<"StableShift"> | Date | string
    shop?: XOR<ShopScalarRelationFilter, ShopWhereInput>
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id" | "userId">

  export type StableShiftOrderByWithAggregationInput = {
    id?: SortOrder
    shopId?: SortOrder
    userId?: SortOrder
    workFrom?: SortOrder
    workTo?: SortOrder
    breakFrom?: SortOrder
    breakTo?: SortOrder
    isDeleted?: SortOrder
    createdAt?: SortOrder
    _count?: StableShiftCountOrderByAggregateInput
    _max?: StableShiftMaxOrderByAggregateInput
    _min?: StableShiftMinOrderByAggregateInput
  }

  export type StableShiftScalarWhereWithAggregatesInput = {
    AND?: StableShiftScalarWhereWithAggregatesInput | StableShiftScalarWhereWithAggregatesInput[]
    OR?: StableShiftScalarWhereWithAggregatesInput[]
    NOT?: StableShiftScalarWhereWithAggregatesInput | StableShiftScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"StableShift"> | string
    shopId?: UuidWithAggregatesFilter<"StableShift"> | string
    userId?: StringWithAggregatesFilter<"StableShift"> | string
    workFrom?: DateTimeWithAggregatesFilter<"StableShift"> | Date | string
    workTo?: DateTimeWithAggregatesFilter<"StableShift"> | Date | string
    breakFrom?: DateTimeWithAggregatesFilter<"StableShift"> | Date | string
    breakTo?: DateTimeWithAggregatesFilter<"StableShift"> | Date | string
    isDeleted?: BoolWithAggregatesFilter<"StableShift"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"StableShift"> | Date | string
  }

  export type UnstableShiftWhereInput = {
    AND?: UnstableShiftWhereInput | UnstableShiftWhereInput[]
    OR?: UnstableShiftWhereInput[]
    NOT?: UnstableShiftWhereInput | UnstableShiftWhereInput[]
    id?: UuidFilter<"UnstableShift"> | string
    shopId?: UuidFilter<"UnstableShift"> | string
    userId?: StringFilter<"UnstableShift"> | string
    workFrom?: DateTimeFilter<"UnstableShift"> | Date | string
    workTo?: DateTimeFilter<"UnstableShift"> | Date | string
    breakFrom?: DateTimeFilter<"UnstableShift"> | Date | string
    breakTo?: DateTimeFilter<"UnstableShift"> | Date | string
    isDeleted?: BoolFilter<"UnstableShift"> | boolean
    createdAt?: DateTimeFilter<"UnstableShift"> | Date | string
    shop?: XOR<ShopScalarRelationFilter, ShopWhereInput>
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type UnstableShiftOrderByWithRelationInput = {
    id?: SortOrder
    shopId?: SortOrder
    userId?: SortOrder
    workFrom?: SortOrder
    workTo?: SortOrder
    breakFrom?: SortOrder
    breakTo?: SortOrder
    isDeleted?: SortOrder
    createdAt?: SortOrder
    shop?: ShopOrderByWithRelationInput
    user?: UserOrderByWithRelationInput
  }

  export type UnstableShiftWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    userId?: string
    AND?: UnstableShiftWhereInput | UnstableShiftWhereInput[]
    OR?: UnstableShiftWhereInput[]
    NOT?: UnstableShiftWhereInput | UnstableShiftWhereInput[]
    shopId?: UuidFilter<"UnstableShift"> | string
    workFrom?: DateTimeFilter<"UnstableShift"> | Date | string
    workTo?: DateTimeFilter<"UnstableShift"> | Date | string
    breakFrom?: DateTimeFilter<"UnstableShift"> | Date | string
    breakTo?: DateTimeFilter<"UnstableShift"> | Date | string
    isDeleted?: BoolFilter<"UnstableShift"> | boolean
    createdAt?: DateTimeFilter<"UnstableShift"> | Date | string
    shop?: XOR<ShopScalarRelationFilter, ShopWhereInput>
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id" | "userId">

  export type UnstableShiftOrderByWithAggregationInput = {
    id?: SortOrder
    shopId?: SortOrder
    userId?: SortOrder
    workFrom?: SortOrder
    workTo?: SortOrder
    breakFrom?: SortOrder
    breakTo?: SortOrder
    isDeleted?: SortOrder
    createdAt?: SortOrder
    _count?: UnstableShiftCountOrderByAggregateInput
    _max?: UnstableShiftMaxOrderByAggregateInput
    _min?: UnstableShiftMinOrderByAggregateInput
  }

  export type UnstableShiftScalarWhereWithAggregatesInput = {
    AND?: UnstableShiftScalarWhereWithAggregatesInput | UnstableShiftScalarWhereWithAggregatesInput[]
    OR?: UnstableShiftScalarWhereWithAggregatesInput[]
    NOT?: UnstableShiftScalarWhereWithAggregatesInput | UnstableShiftScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"UnstableShift"> | string
    shopId?: UuidWithAggregatesFilter<"UnstableShift"> | string
    userId?: StringWithAggregatesFilter<"UnstableShift"> | string
    workFrom?: DateTimeWithAggregatesFilter<"UnstableShift"> | Date | string
    workTo?: DateTimeWithAggregatesFilter<"UnstableShift"> | Date | string
    breakFrom?: DateTimeWithAggregatesFilter<"UnstableShift"> | Date | string
    breakTo?: DateTimeWithAggregatesFilter<"UnstableShift"> | Date | string
    isDeleted?: BoolWithAggregatesFilter<"UnstableShift"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"UnstableShift"> | Date | string
  }

  export type RequestWhereInput = {
    AND?: RequestWhereInput | RequestWhereInput[]
    OR?: RequestWhereInput[]
    NOT?: RequestWhereInput | RequestWhereInput[]
    id?: UuidFilter<"Request"> | string
    shopId?: UuidFilter<"Request"> | string
    userId?: StringFilter<"Request"> | string
    dateFrom?: DateTimeFilter<"Request"> | Date | string
    dateTo?: DateTimeFilter<"Request"> | Date | string
    done?: BoolFilter<"Request"> | boolean
    isDeleted?: BoolFilter<"Request"> | boolean
    createdAt?: DateTimeFilter<"Request"> | Date | string
    shop?: XOR<ShopScalarRelationFilter, ShopWhereInput>
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type RequestOrderByWithRelationInput = {
    id?: SortOrder
    shopId?: SortOrder
    userId?: SortOrder
    dateFrom?: SortOrder
    dateTo?: SortOrder
    done?: SortOrder
    isDeleted?: SortOrder
    createdAt?: SortOrder
    shop?: ShopOrderByWithRelationInput
    user?: UserOrderByWithRelationInput
  }

  export type RequestWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    userId?: string
    AND?: RequestWhereInput | RequestWhereInput[]
    OR?: RequestWhereInput[]
    NOT?: RequestWhereInput | RequestWhereInput[]
    shopId?: UuidFilter<"Request"> | string
    dateFrom?: DateTimeFilter<"Request"> | Date | string
    dateTo?: DateTimeFilter<"Request"> | Date | string
    done?: BoolFilter<"Request"> | boolean
    isDeleted?: BoolFilter<"Request"> | boolean
    createdAt?: DateTimeFilter<"Request"> | Date | string
    shop?: XOR<ShopScalarRelationFilter, ShopWhereInput>
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id" | "userId">

  export type RequestOrderByWithAggregationInput = {
    id?: SortOrder
    shopId?: SortOrder
    userId?: SortOrder
    dateFrom?: SortOrder
    dateTo?: SortOrder
    done?: SortOrder
    isDeleted?: SortOrder
    createdAt?: SortOrder
    _count?: RequestCountOrderByAggregateInput
    _max?: RequestMaxOrderByAggregateInput
    _min?: RequestMinOrderByAggregateInput
  }

  export type RequestScalarWhereWithAggregatesInput = {
    AND?: RequestScalarWhereWithAggregatesInput | RequestScalarWhereWithAggregatesInput[]
    OR?: RequestScalarWhereWithAggregatesInput[]
    NOT?: RequestScalarWhereWithAggregatesInput | RequestScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"Request"> | string
    shopId?: UuidWithAggregatesFilter<"Request"> | string
    userId?: StringWithAggregatesFilter<"Request"> | string
    dateFrom?: DateTimeWithAggregatesFilter<"Request"> | Date | string
    dateTo?: DateTimeWithAggregatesFilter<"Request"> | Date | string
    done?: BoolWithAggregatesFilter<"Request"> | boolean
    isDeleted?: BoolWithAggregatesFilter<"Request"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"Request"> | Date | string
  }

  export type TimeCardWhereInput = {
    AND?: TimeCardWhereInput | TimeCardWhereInput[]
    OR?: TimeCardWhereInput[]
    NOT?: TimeCardWhereInput | TimeCardWhereInput[]
    id?: UuidFilter<"TimeCard"> | string
    shopId?: UuidFilter<"TimeCard"> | string
    userId?: StringFilter<"TimeCard"> | string
    workFrom?: DateTimeFilter<"TimeCard"> | Date | string
    workTo?: DateTimeFilter<"TimeCard"> | Date | string
    breakFrom?: DateTimeFilter<"TimeCard"> | Date | string
    breakTo?: DateTimeFilter<"TimeCard"> | Date | string
    isDeleted?: BoolFilter<"TimeCard"> | boolean
    createdAt?: DateTimeFilter<"TimeCard"> | Date | string
    shop?: XOR<ShopScalarRelationFilter, ShopWhereInput>
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type TimeCardOrderByWithRelationInput = {
    id?: SortOrder
    shopId?: SortOrder
    userId?: SortOrder
    workFrom?: SortOrder
    workTo?: SortOrder
    breakFrom?: SortOrder
    breakTo?: SortOrder
    isDeleted?: SortOrder
    createdAt?: SortOrder
    shop?: ShopOrderByWithRelationInput
    user?: UserOrderByWithRelationInput
  }

  export type TimeCardWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    userId?: string
    AND?: TimeCardWhereInput | TimeCardWhereInput[]
    OR?: TimeCardWhereInput[]
    NOT?: TimeCardWhereInput | TimeCardWhereInput[]
    shopId?: UuidFilter<"TimeCard"> | string
    workFrom?: DateTimeFilter<"TimeCard"> | Date | string
    workTo?: DateTimeFilter<"TimeCard"> | Date | string
    breakFrom?: DateTimeFilter<"TimeCard"> | Date | string
    breakTo?: DateTimeFilter<"TimeCard"> | Date | string
    isDeleted?: BoolFilter<"TimeCard"> | boolean
    createdAt?: DateTimeFilter<"TimeCard"> | Date | string
    shop?: XOR<ShopScalarRelationFilter, ShopWhereInput>
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id" | "userId">

  export type TimeCardOrderByWithAggregationInput = {
    id?: SortOrder
    shopId?: SortOrder
    userId?: SortOrder
    workFrom?: SortOrder
    workTo?: SortOrder
    breakFrom?: SortOrder
    breakTo?: SortOrder
    isDeleted?: SortOrder
    createdAt?: SortOrder
    _count?: TimeCardCountOrderByAggregateInput
    _max?: TimeCardMaxOrderByAggregateInput
    _min?: TimeCardMinOrderByAggregateInput
  }

  export type TimeCardScalarWhereWithAggregatesInput = {
    AND?: TimeCardScalarWhereWithAggregatesInput | TimeCardScalarWhereWithAggregatesInput[]
    OR?: TimeCardScalarWhereWithAggregatesInput[]
    NOT?: TimeCardScalarWhereWithAggregatesInput | TimeCardScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"TimeCard"> | string
    shopId?: UuidWithAggregatesFilter<"TimeCard"> | string
    userId?: StringWithAggregatesFilter<"TimeCard"> | string
    workFrom?: DateTimeWithAggregatesFilter<"TimeCard"> | Date | string
    workTo?: DateTimeWithAggregatesFilter<"TimeCard"> | Date | string
    breakFrom?: DateTimeWithAggregatesFilter<"TimeCard"> | Date | string
    breakTo?: DateTimeWithAggregatesFilter<"TimeCard"> | Date | string
    isDeleted?: BoolWithAggregatesFilter<"TimeCard"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"TimeCard"> | Date | string
  }

  export type TemporaryClosedWhereInput = {
    AND?: TemporaryClosedWhereInput | TemporaryClosedWhereInput[]
    OR?: TemporaryClosedWhereInput[]
    NOT?: TemporaryClosedWhereInput | TemporaryClosedWhereInput[]
    id?: UuidFilter<"TemporaryClosed"> | string
    organizationId?: UuidFilter<"TemporaryClosed"> | string
    shopId?: UuidFilter<"TemporaryClosed"> | string
    date?: DateTimeFilter<"TemporaryClosed"> | Date | string
    isDeleted?: BoolFilter<"TemporaryClosed"> | boolean
    createdAt?: DateTimeFilter<"TemporaryClosed"> | Date | string
    organization?: XOR<OrganizationScalarRelationFilter, OrganizationWhereInput>
    shop?: XOR<ShopScalarRelationFilter, ShopWhereInput>
  }

  export type TemporaryClosedOrderByWithRelationInput = {
    id?: SortOrder
    organizationId?: SortOrder
    shopId?: SortOrder
    date?: SortOrder
    isDeleted?: SortOrder
    createdAt?: SortOrder
    organization?: OrganizationOrderByWithRelationInput
    shop?: ShopOrderByWithRelationInput
  }

  export type TemporaryClosedWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: TemporaryClosedWhereInput | TemporaryClosedWhereInput[]
    OR?: TemporaryClosedWhereInput[]
    NOT?: TemporaryClosedWhereInput | TemporaryClosedWhereInput[]
    organizationId?: UuidFilter<"TemporaryClosed"> | string
    shopId?: UuidFilter<"TemporaryClosed"> | string
    date?: DateTimeFilter<"TemporaryClosed"> | Date | string
    isDeleted?: BoolFilter<"TemporaryClosed"> | boolean
    createdAt?: DateTimeFilter<"TemporaryClosed"> | Date | string
    organization?: XOR<OrganizationScalarRelationFilter, OrganizationWhereInput>
    shop?: XOR<ShopScalarRelationFilter, ShopWhereInput>
  }, "id">

  export type TemporaryClosedOrderByWithAggregationInput = {
    id?: SortOrder
    organizationId?: SortOrder
    shopId?: SortOrder
    date?: SortOrder
    isDeleted?: SortOrder
    createdAt?: SortOrder
    _count?: TemporaryClosedCountOrderByAggregateInput
    _max?: TemporaryClosedMaxOrderByAggregateInput
    _min?: TemporaryClosedMinOrderByAggregateInput
  }

  export type TemporaryClosedScalarWhereWithAggregatesInput = {
    AND?: TemporaryClosedScalarWhereWithAggregatesInput | TemporaryClosedScalarWhereWithAggregatesInput[]
    OR?: TemporaryClosedScalarWhereWithAggregatesInput[]
    NOT?: TemporaryClosedScalarWhereWithAggregatesInput | TemporaryClosedScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"TemporaryClosed"> | string
    organizationId?: UuidWithAggregatesFilter<"TemporaryClosed"> | string
    shopId?: UuidWithAggregatesFilter<"TemporaryClosed"> | string
    date?: DateTimeWithAggregatesFilter<"TemporaryClosed"> | Date | string
    isDeleted?: BoolWithAggregatesFilter<"TemporaryClosed"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"TemporaryClosed"> | Date | string
  }

  export type AnnounceWhereInput = {
    AND?: AnnounceWhereInput | AnnounceWhereInput[]
    OR?: AnnounceWhereInput[]
    NOT?: AnnounceWhereInput | AnnounceWhereInput[]
    id?: UuidFilter<"Announce"> | string
    organizationId?: UuidFilter<"Announce"> | string
    shopId?: UuidFilter<"Announce"> | string
    message?: StringFilter<"Announce"> | string
    isDeleted?: BoolFilter<"Announce"> | boolean
    createdAt?: DateTimeFilter<"Announce"> | Date | string
    organization?: XOR<OrganizationScalarRelationFilter, OrganizationWhereInput>
    shop?: XOR<ShopScalarRelationFilter, ShopWhereInput>
  }

  export type AnnounceOrderByWithRelationInput = {
    id?: SortOrder
    organizationId?: SortOrder
    shopId?: SortOrder
    message?: SortOrder
    isDeleted?: SortOrder
    createdAt?: SortOrder
    organization?: OrganizationOrderByWithRelationInput
    shop?: ShopOrderByWithRelationInput
  }

  export type AnnounceWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: AnnounceWhereInput | AnnounceWhereInput[]
    OR?: AnnounceWhereInput[]
    NOT?: AnnounceWhereInput | AnnounceWhereInput[]
    organizationId?: UuidFilter<"Announce"> | string
    shopId?: UuidFilter<"Announce"> | string
    message?: StringFilter<"Announce"> | string
    isDeleted?: BoolFilter<"Announce"> | boolean
    createdAt?: DateTimeFilter<"Announce"> | Date | string
    organization?: XOR<OrganizationScalarRelationFilter, OrganizationWhereInput>
    shop?: XOR<ShopScalarRelationFilter, ShopWhereInput>
  }, "id">

  export type AnnounceOrderByWithAggregationInput = {
    id?: SortOrder
    organizationId?: SortOrder
    shopId?: SortOrder
    message?: SortOrder
    isDeleted?: SortOrder
    createdAt?: SortOrder
    _count?: AnnounceCountOrderByAggregateInput
    _max?: AnnounceMaxOrderByAggregateInput
    _min?: AnnounceMinOrderByAggregateInput
  }

  export type AnnounceScalarWhereWithAggregatesInput = {
    AND?: AnnounceScalarWhereWithAggregatesInput | AnnounceScalarWhereWithAggregatesInput[]
    OR?: AnnounceScalarWhereWithAggregatesInput[]
    NOT?: AnnounceScalarWhereWithAggregatesInput | AnnounceScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"Announce"> | string
    organizationId?: UuidWithAggregatesFilter<"Announce"> | string
    shopId?: UuidWithAggregatesFilter<"Announce"> | string
    message?: StringWithAggregatesFilter<"Announce"> | string
    isDeleted?: BoolWithAggregatesFilter<"Announce"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"Announce"> | Date | string
  }

  export type ShopUserBelongingCreateInput = {
    id?: string
    isDeleted?: boolean
    createdAt?: Date | string
    shop: ShopCreateNestedOneWithoutUserInput
    user: UserCreateNestedOneWithoutShopInput
  }

  export type ShopUserBelongingUncheckedCreateInput = {
    id?: string
    shopId: string
    userId: string
    isDeleted?: boolean
    createdAt?: Date | string
  }

  export type ShopUserBelongingUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    shop?: ShopUpdateOneRequiredWithoutUserNestedInput
    user?: UserUpdateOneRequiredWithoutShopNestedInput
  }

  export type ShopUserBelongingUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    shopId?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ShopUserBelongingCreateManyInput = {
    id?: string
    shopId: string
    userId: string
    isDeleted?: boolean
    createdAt?: Date | string
  }

  export type ShopUserBelongingUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ShopUserBelongingUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    shopId?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OrganizationShopBelongingCreateInput = {
    id?: string
    isDeleted: boolean
    createdAt?: Date | string
    shop: ShopCreateNestedOneWithoutOrganizationInput
    organization: OrganizationCreateNestedOneWithoutShopInput
  }

  export type OrganizationShopBelongingUncheckedCreateInput = {
    id?: string
    organizationId: string
    shopId: string
    isDeleted: boolean
    createdAt?: Date | string
  }

  export type OrganizationShopBelongingUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    shop?: ShopUpdateOneRequiredWithoutOrganizationNestedInput
    organization?: OrganizationUpdateOneRequiredWithoutShopNestedInput
  }

  export type OrganizationShopBelongingUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    organizationId?: StringFieldUpdateOperationsInput | string
    shopId?: StringFieldUpdateOperationsInput | string
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OrganizationShopBelongingCreateManyInput = {
    id?: string
    organizationId: string
    shopId: string
    isDeleted: boolean
    createdAt?: Date | string
  }

  export type OrganizationShopBelongingUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OrganizationShopBelongingUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    organizationId?: StringFieldUpdateOperationsInput | string
    shopId?: StringFieldUpdateOperationsInput | string
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OrganizationCreateInput = {
    id?: string
    organizationName: string
    isDeleted?: boolean
    createdAt?: Date | string
    shop?: OrganizationShopBelongingCreateNestedManyWithoutOrganizationInput
    temporaryClosed?: TemporaryClosedCreateNestedManyWithoutOrganizationInput
    announce?: AnnounceCreateNestedManyWithoutOrganizationInput
  }

  export type OrganizationUncheckedCreateInput = {
    id?: string
    organizationName: string
    isDeleted?: boolean
    createdAt?: Date | string
    shop?: OrganizationShopBelongingUncheckedCreateNestedManyWithoutOrganizationInput
    temporaryClosed?: TemporaryClosedUncheckedCreateNestedManyWithoutOrganizationInput
    announce?: AnnounceUncheckedCreateNestedManyWithoutOrganizationInput
  }

  export type OrganizationUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    organizationName?: StringFieldUpdateOperationsInput | string
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    shop?: OrganizationShopBelongingUpdateManyWithoutOrganizationNestedInput
    temporaryClosed?: TemporaryClosedUpdateManyWithoutOrganizationNestedInput
    announce?: AnnounceUpdateManyWithoutOrganizationNestedInput
  }

  export type OrganizationUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    organizationName?: StringFieldUpdateOperationsInput | string
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    shop?: OrganizationShopBelongingUncheckedUpdateManyWithoutOrganizationNestedInput
    temporaryClosed?: TemporaryClosedUncheckedUpdateManyWithoutOrganizationNestedInput
    announce?: AnnounceUncheckedUpdateManyWithoutOrganizationNestedInput
  }

  export type OrganizationCreateManyInput = {
    id?: string
    organizationName: string
    isDeleted?: boolean
    createdAt?: Date | string
  }

  export type OrganizationUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    organizationName?: StringFieldUpdateOperationsInput | string
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OrganizationUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    organizationName?: StringFieldUpdateOperationsInput | string
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ShopCreateInput = {
    id?: string
    shopName: string
    openTime: string
    closeTime: string
    timeUnit: number
    submitFrequency: string
    avatar: string
    useTimeCard: boolean
    isDeleted?: boolean
    createdAt?: Date | string
    organization?: OrganizationShopBelongingCreateNestedManyWithoutShopInput
    user?: ShopUserBelongingCreateNestedManyWithoutShopInput
    operation?: OperationCreateNestedManyWithoutShopInput
    stableShift?: StableShiftCreateNestedManyWithoutShopInput
    unstableShift?: UnstableShiftCreateNestedManyWithoutShopInput
    request?: RequestCreateNestedManyWithoutShopInput
    timeCard?: TimeCardCreateNestedManyWithoutShopInput
    temporaryClosed?: TemporaryClosedCreateNestedManyWithoutShopInput
    announce?: AnnounceCreateNestedManyWithoutShopInput
    Invitation?: InvitationCreateNestedManyWithoutInvitedByInput
  }

  export type ShopUncheckedCreateInput = {
    id?: string
    shopName: string
    openTime: string
    closeTime: string
    timeUnit: number
    submitFrequency: string
    avatar: string
    useTimeCard: boolean
    isDeleted?: boolean
    createdAt?: Date | string
    organization?: OrganizationShopBelongingUncheckedCreateNestedManyWithoutShopInput
    user?: ShopUserBelongingUncheckedCreateNestedManyWithoutShopInput
    operation?: OperationUncheckedCreateNestedManyWithoutShopInput
    stableShift?: StableShiftUncheckedCreateNestedManyWithoutShopInput
    unstableShift?: UnstableShiftUncheckedCreateNestedManyWithoutShopInput
    request?: RequestUncheckedCreateNestedManyWithoutShopInput
    timeCard?: TimeCardUncheckedCreateNestedManyWithoutShopInput
    temporaryClosed?: TemporaryClosedUncheckedCreateNestedManyWithoutShopInput
    announce?: AnnounceUncheckedCreateNestedManyWithoutShopInput
    Invitation?: InvitationUncheckedCreateNestedManyWithoutInvitedByInput
  }

  export type ShopUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    shopName?: StringFieldUpdateOperationsInput | string
    openTime?: StringFieldUpdateOperationsInput | string
    closeTime?: StringFieldUpdateOperationsInput | string
    timeUnit?: IntFieldUpdateOperationsInput | number
    submitFrequency?: StringFieldUpdateOperationsInput | string
    avatar?: StringFieldUpdateOperationsInput | string
    useTimeCard?: BoolFieldUpdateOperationsInput | boolean
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    organization?: OrganizationShopBelongingUpdateManyWithoutShopNestedInput
    user?: ShopUserBelongingUpdateManyWithoutShopNestedInput
    operation?: OperationUpdateManyWithoutShopNestedInput
    stableShift?: StableShiftUpdateManyWithoutShopNestedInput
    unstableShift?: UnstableShiftUpdateManyWithoutShopNestedInput
    request?: RequestUpdateManyWithoutShopNestedInput
    timeCard?: TimeCardUpdateManyWithoutShopNestedInput
    temporaryClosed?: TemporaryClosedUpdateManyWithoutShopNestedInput
    announce?: AnnounceUpdateManyWithoutShopNestedInput
    Invitation?: InvitationUpdateManyWithoutInvitedByNestedInput
  }

  export type ShopUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    shopName?: StringFieldUpdateOperationsInput | string
    openTime?: StringFieldUpdateOperationsInput | string
    closeTime?: StringFieldUpdateOperationsInput | string
    timeUnit?: IntFieldUpdateOperationsInput | number
    submitFrequency?: StringFieldUpdateOperationsInput | string
    avatar?: StringFieldUpdateOperationsInput | string
    useTimeCard?: BoolFieldUpdateOperationsInput | boolean
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    organization?: OrganizationShopBelongingUncheckedUpdateManyWithoutShopNestedInput
    user?: ShopUserBelongingUncheckedUpdateManyWithoutShopNestedInput
    operation?: OperationUncheckedUpdateManyWithoutShopNestedInput
    stableShift?: StableShiftUncheckedUpdateManyWithoutShopNestedInput
    unstableShift?: UnstableShiftUncheckedUpdateManyWithoutShopNestedInput
    request?: RequestUncheckedUpdateManyWithoutShopNestedInput
    timeCard?: TimeCardUncheckedUpdateManyWithoutShopNestedInput
    temporaryClosed?: TemporaryClosedUncheckedUpdateManyWithoutShopNestedInput
    announce?: AnnounceUncheckedUpdateManyWithoutShopNestedInput
    Invitation?: InvitationUncheckedUpdateManyWithoutInvitedByNestedInput
  }

  export type ShopCreateManyInput = {
    id?: string
    shopName: string
    openTime: string
    closeTime: string
    timeUnit: number
    submitFrequency: string
    avatar: string
    useTimeCard: boolean
    isDeleted?: boolean
    createdAt?: Date | string
  }

  export type ShopUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    shopName?: StringFieldUpdateOperationsInput | string
    openTime?: StringFieldUpdateOperationsInput | string
    closeTime?: StringFieldUpdateOperationsInput | string
    timeUnit?: IntFieldUpdateOperationsInput | number
    submitFrequency?: StringFieldUpdateOperationsInput | string
    avatar?: StringFieldUpdateOperationsInput | string
    useTimeCard?: BoolFieldUpdateOperationsInput | boolean
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ShopUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    shopName?: StringFieldUpdateOperationsInput | string
    openTime?: StringFieldUpdateOperationsInput | string
    closeTime?: StringFieldUpdateOperationsInput | string
    timeUnit?: IntFieldUpdateOperationsInput | number
    submitFrequency?: StringFieldUpdateOperationsInput | string
    avatar?: StringFieldUpdateOperationsInput | string
    useTimeCard?: BoolFieldUpdateOperationsInput | boolean
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserCreateInput = {
    id?: string
    userId?: string
    userName: string
    avatar?: string
    isDeleted?: boolean
    createdAt?: Date | string
    shop?: ShopUserBelongingCreateNestedManyWithoutUserInput
    stableShift?: StableShiftCreateNestedManyWithoutUserInput
    unstableShift?: UnstableShiftCreateNestedManyWithoutUserInput
    request?: RequestCreateNestedManyWithoutUserInput
    timeCard?: TimeCardCreateNestedManyWithoutUserInput
    Invitation?: InvitationCreateNestedManyWithoutTargetUserInput
  }

  export type UserUncheckedCreateInput = {
    id?: string
    userId?: string
    userName: string
    avatar?: string
    isDeleted?: boolean
    createdAt?: Date | string
    shop?: ShopUserBelongingUncheckedCreateNestedManyWithoutUserInput
    stableShift?: StableShiftUncheckedCreateNestedManyWithoutUserInput
    unstableShift?: UnstableShiftUncheckedCreateNestedManyWithoutUserInput
    request?: RequestUncheckedCreateNestedManyWithoutUserInput
    timeCard?: TimeCardUncheckedCreateNestedManyWithoutUserInput
    Invitation?: InvitationUncheckedCreateNestedManyWithoutTargetUserInput
  }

  export type UserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    userName?: StringFieldUpdateOperationsInput | string
    avatar?: StringFieldUpdateOperationsInput | string
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    shop?: ShopUserBelongingUpdateManyWithoutUserNestedInput
    stableShift?: StableShiftUpdateManyWithoutUserNestedInput
    unstableShift?: UnstableShiftUpdateManyWithoutUserNestedInput
    request?: RequestUpdateManyWithoutUserNestedInput
    timeCard?: TimeCardUpdateManyWithoutUserNestedInput
    Invitation?: InvitationUpdateManyWithoutTargetUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    userName?: StringFieldUpdateOperationsInput | string
    avatar?: StringFieldUpdateOperationsInput | string
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    shop?: ShopUserBelongingUncheckedUpdateManyWithoutUserNestedInput
    stableShift?: StableShiftUncheckedUpdateManyWithoutUserNestedInput
    unstableShift?: UnstableShiftUncheckedUpdateManyWithoutUserNestedInput
    request?: RequestUncheckedUpdateManyWithoutUserNestedInput
    timeCard?: TimeCardUncheckedUpdateManyWithoutUserNestedInput
    Invitation?: InvitationUncheckedUpdateManyWithoutTargetUserNestedInput
  }

  export type UserCreateManyInput = {
    id?: string
    userId?: string
    userName: string
    avatar?: string
    isDeleted?: boolean
    createdAt?: Date | string
  }

  export type UserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    userName?: StringFieldUpdateOperationsInput | string
    avatar?: StringFieldUpdateOperationsInput | string
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    userName?: StringFieldUpdateOperationsInput | string
    avatar?: StringFieldUpdateOperationsInput | string
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type InvitationCreateInput = {
    id?: string
    accepted?: boolean
    isDeleted?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    invitedBy: ShopCreateNestedOneWithoutInvitationInput
    targetUser: UserCreateNestedOneWithoutInvitationInput
  }

  export type InvitationUncheckedCreateInput = {
    id?: string
    invitedByShopId: string
    targetUserId: string
    accepted?: boolean
    isDeleted?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type InvitationUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    accepted?: BoolFieldUpdateOperationsInput | boolean
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    invitedBy?: ShopUpdateOneRequiredWithoutInvitationNestedInput
    targetUser?: UserUpdateOneRequiredWithoutInvitationNestedInput
  }

  export type InvitationUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    invitedByShopId?: StringFieldUpdateOperationsInput | string
    targetUserId?: StringFieldUpdateOperationsInput | string
    accepted?: BoolFieldUpdateOperationsInput | boolean
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type InvitationCreateManyInput = {
    id?: string
    invitedByShopId: string
    targetUserId: string
    accepted?: boolean
    isDeleted?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type InvitationUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    accepted?: BoolFieldUpdateOperationsInput | boolean
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type InvitationUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    invitedByShopId?: StringFieldUpdateOperationsInput | string
    targetUserId?: StringFieldUpdateOperationsInput | string
    accepted?: BoolFieldUpdateOperationsInput | boolean
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OperationCreateInput = {
    id?: string
    operationName: string
    icon: string
    color: string
    isDeleted?: boolean
    createdAt?: Date | string
    shop: ShopCreateNestedOneWithoutOperationInput
  }

  export type OperationUncheckedCreateInput = {
    id?: string
    shopId: string
    operationName: string
    icon: string
    color: string
    isDeleted?: boolean
    createdAt?: Date | string
  }

  export type OperationUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    operationName?: StringFieldUpdateOperationsInput | string
    icon?: StringFieldUpdateOperationsInput | string
    color?: StringFieldUpdateOperationsInput | string
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    shop?: ShopUpdateOneRequiredWithoutOperationNestedInput
  }

  export type OperationUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    shopId?: StringFieldUpdateOperationsInput | string
    operationName?: StringFieldUpdateOperationsInput | string
    icon?: StringFieldUpdateOperationsInput | string
    color?: StringFieldUpdateOperationsInput | string
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OperationCreateManyInput = {
    id?: string
    shopId: string
    operationName: string
    icon: string
    color: string
    isDeleted?: boolean
    createdAt?: Date | string
  }

  export type OperationUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    operationName?: StringFieldUpdateOperationsInput | string
    icon?: StringFieldUpdateOperationsInput | string
    color?: StringFieldUpdateOperationsInput | string
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OperationUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    shopId?: StringFieldUpdateOperationsInput | string
    operationName?: StringFieldUpdateOperationsInput | string
    icon?: StringFieldUpdateOperationsInput | string
    color?: StringFieldUpdateOperationsInput | string
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StableShiftCreateInput = {
    id?: string
    workFrom: Date | string
    workTo: Date | string
    breakFrom: Date | string
    breakTo: Date | string
    isDeleted?: boolean
    createdAt?: Date | string
    shop: ShopCreateNestedOneWithoutStableShiftInput
    user: UserCreateNestedOneWithoutStableShiftInput
  }

  export type StableShiftUncheckedCreateInput = {
    id?: string
    shopId: string
    userId: string
    workFrom: Date | string
    workTo: Date | string
    breakFrom: Date | string
    breakTo: Date | string
    isDeleted?: boolean
    createdAt?: Date | string
  }

  export type StableShiftUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    workFrom?: DateTimeFieldUpdateOperationsInput | Date | string
    workTo?: DateTimeFieldUpdateOperationsInput | Date | string
    breakFrom?: DateTimeFieldUpdateOperationsInput | Date | string
    breakTo?: DateTimeFieldUpdateOperationsInput | Date | string
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    shop?: ShopUpdateOneRequiredWithoutStableShiftNestedInput
    user?: UserUpdateOneRequiredWithoutStableShiftNestedInput
  }

  export type StableShiftUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    shopId?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    workFrom?: DateTimeFieldUpdateOperationsInput | Date | string
    workTo?: DateTimeFieldUpdateOperationsInput | Date | string
    breakFrom?: DateTimeFieldUpdateOperationsInput | Date | string
    breakTo?: DateTimeFieldUpdateOperationsInput | Date | string
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StableShiftCreateManyInput = {
    id?: string
    shopId: string
    userId: string
    workFrom: Date | string
    workTo: Date | string
    breakFrom: Date | string
    breakTo: Date | string
    isDeleted?: boolean
    createdAt?: Date | string
  }

  export type StableShiftUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    workFrom?: DateTimeFieldUpdateOperationsInput | Date | string
    workTo?: DateTimeFieldUpdateOperationsInput | Date | string
    breakFrom?: DateTimeFieldUpdateOperationsInput | Date | string
    breakTo?: DateTimeFieldUpdateOperationsInput | Date | string
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StableShiftUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    shopId?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    workFrom?: DateTimeFieldUpdateOperationsInput | Date | string
    workTo?: DateTimeFieldUpdateOperationsInput | Date | string
    breakFrom?: DateTimeFieldUpdateOperationsInput | Date | string
    breakTo?: DateTimeFieldUpdateOperationsInput | Date | string
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UnstableShiftCreateInput = {
    id?: string
    workFrom: Date | string
    workTo: Date | string
    breakFrom: Date | string
    breakTo: Date | string
    isDeleted?: boolean
    createdAt?: Date | string
    shop: ShopCreateNestedOneWithoutUnstableShiftInput
    user: UserCreateNestedOneWithoutUnstableShiftInput
  }

  export type UnstableShiftUncheckedCreateInput = {
    id?: string
    shopId: string
    userId: string
    workFrom: Date | string
    workTo: Date | string
    breakFrom: Date | string
    breakTo: Date | string
    isDeleted?: boolean
    createdAt?: Date | string
  }

  export type UnstableShiftUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    workFrom?: DateTimeFieldUpdateOperationsInput | Date | string
    workTo?: DateTimeFieldUpdateOperationsInput | Date | string
    breakFrom?: DateTimeFieldUpdateOperationsInput | Date | string
    breakTo?: DateTimeFieldUpdateOperationsInput | Date | string
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    shop?: ShopUpdateOneRequiredWithoutUnstableShiftNestedInput
    user?: UserUpdateOneRequiredWithoutUnstableShiftNestedInput
  }

  export type UnstableShiftUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    shopId?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    workFrom?: DateTimeFieldUpdateOperationsInput | Date | string
    workTo?: DateTimeFieldUpdateOperationsInput | Date | string
    breakFrom?: DateTimeFieldUpdateOperationsInput | Date | string
    breakTo?: DateTimeFieldUpdateOperationsInput | Date | string
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UnstableShiftCreateManyInput = {
    id?: string
    shopId: string
    userId: string
    workFrom: Date | string
    workTo: Date | string
    breakFrom: Date | string
    breakTo: Date | string
    isDeleted?: boolean
    createdAt?: Date | string
  }

  export type UnstableShiftUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    workFrom?: DateTimeFieldUpdateOperationsInput | Date | string
    workTo?: DateTimeFieldUpdateOperationsInput | Date | string
    breakFrom?: DateTimeFieldUpdateOperationsInput | Date | string
    breakTo?: DateTimeFieldUpdateOperationsInput | Date | string
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UnstableShiftUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    shopId?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    workFrom?: DateTimeFieldUpdateOperationsInput | Date | string
    workTo?: DateTimeFieldUpdateOperationsInput | Date | string
    breakFrom?: DateTimeFieldUpdateOperationsInput | Date | string
    breakTo?: DateTimeFieldUpdateOperationsInput | Date | string
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RequestCreateInput = {
    id?: string
    dateFrom: Date | string
    dateTo: Date | string
    done?: boolean
    isDeleted?: boolean
    createdAt?: Date | string
    shop: ShopCreateNestedOneWithoutRequestInput
    user: UserCreateNestedOneWithoutRequestInput
  }

  export type RequestUncheckedCreateInput = {
    id?: string
    shopId: string
    userId: string
    dateFrom: Date | string
    dateTo: Date | string
    done?: boolean
    isDeleted?: boolean
    createdAt?: Date | string
  }

  export type RequestUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    dateFrom?: DateTimeFieldUpdateOperationsInput | Date | string
    dateTo?: DateTimeFieldUpdateOperationsInput | Date | string
    done?: BoolFieldUpdateOperationsInput | boolean
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    shop?: ShopUpdateOneRequiredWithoutRequestNestedInput
    user?: UserUpdateOneRequiredWithoutRequestNestedInput
  }

  export type RequestUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    shopId?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    dateFrom?: DateTimeFieldUpdateOperationsInput | Date | string
    dateTo?: DateTimeFieldUpdateOperationsInput | Date | string
    done?: BoolFieldUpdateOperationsInput | boolean
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RequestCreateManyInput = {
    id?: string
    shopId: string
    userId: string
    dateFrom: Date | string
    dateTo: Date | string
    done?: boolean
    isDeleted?: boolean
    createdAt?: Date | string
  }

  export type RequestUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    dateFrom?: DateTimeFieldUpdateOperationsInput | Date | string
    dateTo?: DateTimeFieldUpdateOperationsInput | Date | string
    done?: BoolFieldUpdateOperationsInput | boolean
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RequestUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    shopId?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    dateFrom?: DateTimeFieldUpdateOperationsInput | Date | string
    dateTo?: DateTimeFieldUpdateOperationsInput | Date | string
    done?: BoolFieldUpdateOperationsInput | boolean
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TimeCardCreateInput = {
    id?: string
    workFrom: Date | string
    workTo: Date | string
    breakFrom: Date | string
    breakTo: Date | string
    isDeleted?: boolean
    createdAt?: Date | string
    shop: ShopCreateNestedOneWithoutTimeCardInput
    user: UserCreateNestedOneWithoutTimeCardInput
  }

  export type TimeCardUncheckedCreateInput = {
    id?: string
    shopId: string
    userId: string
    workFrom: Date | string
    workTo: Date | string
    breakFrom: Date | string
    breakTo: Date | string
    isDeleted?: boolean
    createdAt?: Date | string
  }

  export type TimeCardUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    workFrom?: DateTimeFieldUpdateOperationsInput | Date | string
    workTo?: DateTimeFieldUpdateOperationsInput | Date | string
    breakFrom?: DateTimeFieldUpdateOperationsInput | Date | string
    breakTo?: DateTimeFieldUpdateOperationsInput | Date | string
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    shop?: ShopUpdateOneRequiredWithoutTimeCardNestedInput
    user?: UserUpdateOneRequiredWithoutTimeCardNestedInput
  }

  export type TimeCardUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    shopId?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    workFrom?: DateTimeFieldUpdateOperationsInput | Date | string
    workTo?: DateTimeFieldUpdateOperationsInput | Date | string
    breakFrom?: DateTimeFieldUpdateOperationsInput | Date | string
    breakTo?: DateTimeFieldUpdateOperationsInput | Date | string
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TimeCardCreateManyInput = {
    id?: string
    shopId: string
    userId: string
    workFrom: Date | string
    workTo: Date | string
    breakFrom: Date | string
    breakTo: Date | string
    isDeleted?: boolean
    createdAt?: Date | string
  }

  export type TimeCardUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    workFrom?: DateTimeFieldUpdateOperationsInput | Date | string
    workTo?: DateTimeFieldUpdateOperationsInput | Date | string
    breakFrom?: DateTimeFieldUpdateOperationsInput | Date | string
    breakTo?: DateTimeFieldUpdateOperationsInput | Date | string
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TimeCardUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    shopId?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    workFrom?: DateTimeFieldUpdateOperationsInput | Date | string
    workTo?: DateTimeFieldUpdateOperationsInput | Date | string
    breakFrom?: DateTimeFieldUpdateOperationsInput | Date | string
    breakTo?: DateTimeFieldUpdateOperationsInput | Date | string
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TemporaryClosedCreateInput = {
    id?: string
    date: Date | string
    isDeleted?: boolean
    createdAt?: Date | string
    organization: OrganizationCreateNestedOneWithoutTemporaryClosedInput
    shop: ShopCreateNestedOneWithoutTemporaryClosedInput
  }

  export type TemporaryClosedUncheckedCreateInput = {
    id?: string
    organizationId: string
    shopId: string
    date: Date | string
    isDeleted?: boolean
    createdAt?: Date | string
  }

  export type TemporaryClosedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    organization?: OrganizationUpdateOneRequiredWithoutTemporaryClosedNestedInput
    shop?: ShopUpdateOneRequiredWithoutTemporaryClosedNestedInput
  }

  export type TemporaryClosedUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    organizationId?: StringFieldUpdateOperationsInput | string
    shopId?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TemporaryClosedCreateManyInput = {
    id?: string
    organizationId: string
    shopId: string
    date: Date | string
    isDeleted?: boolean
    createdAt?: Date | string
  }

  export type TemporaryClosedUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TemporaryClosedUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    organizationId?: StringFieldUpdateOperationsInput | string
    shopId?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AnnounceCreateInput = {
    id?: string
    message: string
    isDeleted?: boolean
    createdAt?: Date | string
    organization: OrganizationCreateNestedOneWithoutAnnounceInput
    shop: ShopCreateNestedOneWithoutAnnounceInput
  }

  export type AnnounceUncheckedCreateInput = {
    id?: string
    organizationId: string
    shopId: string
    message: string
    isDeleted?: boolean
    createdAt?: Date | string
  }

  export type AnnounceUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    organization?: OrganizationUpdateOneRequiredWithoutAnnounceNestedInput
    shop?: ShopUpdateOneRequiredWithoutAnnounceNestedInput
  }

  export type AnnounceUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    organizationId?: StringFieldUpdateOperationsInput | string
    shopId?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AnnounceCreateManyInput = {
    id?: string
    organizationId: string
    shopId: string
    message: string
    isDeleted?: boolean
    createdAt?: Date | string
  }

  export type AnnounceUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AnnounceUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    organizationId?: StringFieldUpdateOperationsInput | string
    shopId?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UuidFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedUuidFilter<$PrismaModel> | string
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type ShopScalarRelationFilter = {
    is?: ShopWhereInput
    isNot?: ShopWhereInput
  }

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type ShopUserBelongingCountOrderByAggregateInput = {
    id?: SortOrder
    shopId?: SortOrder
    userId?: SortOrder
    isDeleted?: SortOrder
    createdAt?: SortOrder
  }

  export type ShopUserBelongingMaxOrderByAggregateInput = {
    id?: SortOrder
    shopId?: SortOrder
    userId?: SortOrder
    isDeleted?: SortOrder
    createdAt?: SortOrder
  }

  export type ShopUserBelongingMinOrderByAggregateInput = {
    id?: SortOrder
    shopId?: SortOrder
    userId?: SortOrder
    isDeleted?: SortOrder
    createdAt?: SortOrder
  }

  export type UuidWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedUuidWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type OrganizationScalarRelationFilter = {
    is?: OrganizationWhereInput
    isNot?: OrganizationWhereInput
  }

  export type OrganizationShopBelongingCountOrderByAggregateInput = {
    id?: SortOrder
    organizationId?: SortOrder
    shopId?: SortOrder
    isDeleted?: SortOrder
    createdAt?: SortOrder
  }

  export type OrganizationShopBelongingMaxOrderByAggregateInput = {
    id?: SortOrder
    organizationId?: SortOrder
    shopId?: SortOrder
    isDeleted?: SortOrder
    createdAt?: SortOrder
  }

  export type OrganizationShopBelongingMinOrderByAggregateInput = {
    id?: SortOrder
    organizationId?: SortOrder
    shopId?: SortOrder
    isDeleted?: SortOrder
    createdAt?: SortOrder
  }

  export type OrganizationShopBelongingListRelationFilter = {
    every?: OrganizationShopBelongingWhereInput
    some?: OrganizationShopBelongingWhereInput
    none?: OrganizationShopBelongingWhereInput
  }

  export type TemporaryClosedListRelationFilter = {
    every?: TemporaryClosedWhereInput
    some?: TemporaryClosedWhereInput
    none?: TemporaryClosedWhereInput
  }

  export type AnnounceListRelationFilter = {
    every?: AnnounceWhereInput
    some?: AnnounceWhereInput
    none?: AnnounceWhereInput
  }

  export type OrganizationShopBelongingOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type TemporaryClosedOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type AnnounceOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type OrganizationCountOrderByAggregateInput = {
    id?: SortOrder
    organizationName?: SortOrder
    isDeleted?: SortOrder
    createdAt?: SortOrder
  }

  export type OrganizationMaxOrderByAggregateInput = {
    id?: SortOrder
    organizationName?: SortOrder
    isDeleted?: SortOrder
    createdAt?: SortOrder
  }

  export type OrganizationMinOrderByAggregateInput = {
    id?: SortOrder
    organizationName?: SortOrder
    isDeleted?: SortOrder
    createdAt?: SortOrder
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type ShopUserBelongingListRelationFilter = {
    every?: ShopUserBelongingWhereInput
    some?: ShopUserBelongingWhereInput
    none?: ShopUserBelongingWhereInput
  }

  export type OperationListRelationFilter = {
    every?: OperationWhereInput
    some?: OperationWhereInput
    none?: OperationWhereInput
  }

  export type StableShiftListRelationFilter = {
    every?: StableShiftWhereInput
    some?: StableShiftWhereInput
    none?: StableShiftWhereInput
  }

  export type UnstableShiftListRelationFilter = {
    every?: UnstableShiftWhereInput
    some?: UnstableShiftWhereInput
    none?: UnstableShiftWhereInput
  }

  export type RequestListRelationFilter = {
    every?: RequestWhereInput
    some?: RequestWhereInput
    none?: RequestWhereInput
  }

  export type TimeCardListRelationFilter = {
    every?: TimeCardWhereInput
    some?: TimeCardWhereInput
    none?: TimeCardWhereInput
  }

  export type InvitationListRelationFilter = {
    every?: InvitationWhereInput
    some?: InvitationWhereInput
    none?: InvitationWhereInput
  }

  export type ShopUserBelongingOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type OperationOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type StableShiftOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UnstableShiftOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type RequestOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type TimeCardOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type InvitationOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ShopCountOrderByAggregateInput = {
    id?: SortOrder
    shopName?: SortOrder
    openTime?: SortOrder
    closeTime?: SortOrder
    timeUnit?: SortOrder
    submitFrequency?: SortOrder
    avatar?: SortOrder
    useTimeCard?: SortOrder
    isDeleted?: SortOrder
    createdAt?: SortOrder
  }

  export type ShopAvgOrderByAggregateInput = {
    timeUnit?: SortOrder
  }

  export type ShopMaxOrderByAggregateInput = {
    id?: SortOrder
    shopName?: SortOrder
    openTime?: SortOrder
    closeTime?: SortOrder
    timeUnit?: SortOrder
    submitFrequency?: SortOrder
    avatar?: SortOrder
    useTimeCard?: SortOrder
    isDeleted?: SortOrder
    createdAt?: SortOrder
  }

  export type ShopMinOrderByAggregateInput = {
    id?: SortOrder
    shopName?: SortOrder
    openTime?: SortOrder
    closeTime?: SortOrder
    timeUnit?: SortOrder
    submitFrequency?: SortOrder
    avatar?: SortOrder
    useTimeCard?: SortOrder
    isDeleted?: SortOrder
    createdAt?: SortOrder
  }

  export type ShopSumOrderByAggregateInput = {
    timeUnit?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    userName?: SortOrder
    avatar?: SortOrder
    isDeleted?: SortOrder
    createdAt?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    userName?: SortOrder
    avatar?: SortOrder
    isDeleted?: SortOrder
    createdAt?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    userName?: SortOrder
    avatar?: SortOrder
    isDeleted?: SortOrder
    createdAt?: SortOrder
  }

  export type InvitationCountOrderByAggregateInput = {
    id?: SortOrder
    invitedByShopId?: SortOrder
    targetUserId?: SortOrder
    accepted?: SortOrder
    isDeleted?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type InvitationMaxOrderByAggregateInput = {
    id?: SortOrder
    invitedByShopId?: SortOrder
    targetUserId?: SortOrder
    accepted?: SortOrder
    isDeleted?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type InvitationMinOrderByAggregateInput = {
    id?: SortOrder
    invitedByShopId?: SortOrder
    targetUserId?: SortOrder
    accepted?: SortOrder
    isDeleted?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type OperationCountOrderByAggregateInput = {
    id?: SortOrder
    shopId?: SortOrder
    operationName?: SortOrder
    icon?: SortOrder
    color?: SortOrder
    isDeleted?: SortOrder
    createdAt?: SortOrder
  }

  export type OperationMaxOrderByAggregateInput = {
    id?: SortOrder
    shopId?: SortOrder
    operationName?: SortOrder
    icon?: SortOrder
    color?: SortOrder
    isDeleted?: SortOrder
    createdAt?: SortOrder
  }

  export type OperationMinOrderByAggregateInput = {
    id?: SortOrder
    shopId?: SortOrder
    operationName?: SortOrder
    icon?: SortOrder
    color?: SortOrder
    isDeleted?: SortOrder
    createdAt?: SortOrder
  }

  export type StableShiftCountOrderByAggregateInput = {
    id?: SortOrder
    shopId?: SortOrder
    userId?: SortOrder
    workFrom?: SortOrder
    workTo?: SortOrder
    breakFrom?: SortOrder
    breakTo?: SortOrder
    isDeleted?: SortOrder
    createdAt?: SortOrder
  }

  export type StableShiftMaxOrderByAggregateInput = {
    id?: SortOrder
    shopId?: SortOrder
    userId?: SortOrder
    workFrom?: SortOrder
    workTo?: SortOrder
    breakFrom?: SortOrder
    breakTo?: SortOrder
    isDeleted?: SortOrder
    createdAt?: SortOrder
  }

  export type StableShiftMinOrderByAggregateInput = {
    id?: SortOrder
    shopId?: SortOrder
    userId?: SortOrder
    workFrom?: SortOrder
    workTo?: SortOrder
    breakFrom?: SortOrder
    breakTo?: SortOrder
    isDeleted?: SortOrder
    createdAt?: SortOrder
  }

  export type UnstableShiftCountOrderByAggregateInput = {
    id?: SortOrder
    shopId?: SortOrder
    userId?: SortOrder
    workFrom?: SortOrder
    workTo?: SortOrder
    breakFrom?: SortOrder
    breakTo?: SortOrder
    isDeleted?: SortOrder
    createdAt?: SortOrder
  }

  export type UnstableShiftMaxOrderByAggregateInput = {
    id?: SortOrder
    shopId?: SortOrder
    userId?: SortOrder
    workFrom?: SortOrder
    workTo?: SortOrder
    breakFrom?: SortOrder
    breakTo?: SortOrder
    isDeleted?: SortOrder
    createdAt?: SortOrder
  }

  export type UnstableShiftMinOrderByAggregateInput = {
    id?: SortOrder
    shopId?: SortOrder
    userId?: SortOrder
    workFrom?: SortOrder
    workTo?: SortOrder
    breakFrom?: SortOrder
    breakTo?: SortOrder
    isDeleted?: SortOrder
    createdAt?: SortOrder
  }

  export type RequestCountOrderByAggregateInput = {
    id?: SortOrder
    shopId?: SortOrder
    userId?: SortOrder
    dateFrom?: SortOrder
    dateTo?: SortOrder
    done?: SortOrder
    isDeleted?: SortOrder
    createdAt?: SortOrder
  }

  export type RequestMaxOrderByAggregateInput = {
    id?: SortOrder
    shopId?: SortOrder
    userId?: SortOrder
    dateFrom?: SortOrder
    dateTo?: SortOrder
    done?: SortOrder
    isDeleted?: SortOrder
    createdAt?: SortOrder
  }

  export type RequestMinOrderByAggregateInput = {
    id?: SortOrder
    shopId?: SortOrder
    userId?: SortOrder
    dateFrom?: SortOrder
    dateTo?: SortOrder
    done?: SortOrder
    isDeleted?: SortOrder
    createdAt?: SortOrder
  }

  export type TimeCardCountOrderByAggregateInput = {
    id?: SortOrder
    shopId?: SortOrder
    userId?: SortOrder
    workFrom?: SortOrder
    workTo?: SortOrder
    breakFrom?: SortOrder
    breakTo?: SortOrder
    isDeleted?: SortOrder
    createdAt?: SortOrder
  }

  export type TimeCardMaxOrderByAggregateInput = {
    id?: SortOrder
    shopId?: SortOrder
    userId?: SortOrder
    workFrom?: SortOrder
    workTo?: SortOrder
    breakFrom?: SortOrder
    breakTo?: SortOrder
    isDeleted?: SortOrder
    createdAt?: SortOrder
  }

  export type TimeCardMinOrderByAggregateInput = {
    id?: SortOrder
    shopId?: SortOrder
    userId?: SortOrder
    workFrom?: SortOrder
    workTo?: SortOrder
    breakFrom?: SortOrder
    breakTo?: SortOrder
    isDeleted?: SortOrder
    createdAt?: SortOrder
  }

  export type TemporaryClosedCountOrderByAggregateInput = {
    id?: SortOrder
    organizationId?: SortOrder
    shopId?: SortOrder
    date?: SortOrder
    isDeleted?: SortOrder
    createdAt?: SortOrder
  }

  export type TemporaryClosedMaxOrderByAggregateInput = {
    id?: SortOrder
    organizationId?: SortOrder
    shopId?: SortOrder
    date?: SortOrder
    isDeleted?: SortOrder
    createdAt?: SortOrder
  }

  export type TemporaryClosedMinOrderByAggregateInput = {
    id?: SortOrder
    organizationId?: SortOrder
    shopId?: SortOrder
    date?: SortOrder
    isDeleted?: SortOrder
    createdAt?: SortOrder
  }

  export type AnnounceCountOrderByAggregateInput = {
    id?: SortOrder
    organizationId?: SortOrder
    shopId?: SortOrder
    message?: SortOrder
    isDeleted?: SortOrder
    createdAt?: SortOrder
  }

  export type AnnounceMaxOrderByAggregateInput = {
    id?: SortOrder
    organizationId?: SortOrder
    shopId?: SortOrder
    message?: SortOrder
    isDeleted?: SortOrder
    createdAt?: SortOrder
  }

  export type AnnounceMinOrderByAggregateInput = {
    id?: SortOrder
    organizationId?: SortOrder
    shopId?: SortOrder
    message?: SortOrder
    isDeleted?: SortOrder
    createdAt?: SortOrder
  }

  export type ShopCreateNestedOneWithoutUserInput = {
    create?: XOR<ShopCreateWithoutUserInput, ShopUncheckedCreateWithoutUserInput>
    connectOrCreate?: ShopCreateOrConnectWithoutUserInput
    connect?: ShopWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutShopInput = {
    create?: XOR<UserCreateWithoutShopInput, UserUncheckedCreateWithoutShopInput>
    connectOrCreate?: UserCreateOrConnectWithoutShopInput
    connect?: UserWhereUniqueInput
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type ShopUpdateOneRequiredWithoutUserNestedInput = {
    create?: XOR<ShopCreateWithoutUserInput, ShopUncheckedCreateWithoutUserInput>
    connectOrCreate?: ShopCreateOrConnectWithoutUserInput
    upsert?: ShopUpsertWithoutUserInput
    connect?: ShopWhereUniqueInput
    update?: XOR<XOR<ShopUpdateToOneWithWhereWithoutUserInput, ShopUpdateWithoutUserInput>, ShopUncheckedUpdateWithoutUserInput>
  }

  export type UserUpdateOneRequiredWithoutShopNestedInput = {
    create?: XOR<UserCreateWithoutShopInput, UserUncheckedCreateWithoutShopInput>
    connectOrCreate?: UserCreateOrConnectWithoutShopInput
    upsert?: UserUpsertWithoutShopInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutShopInput, UserUpdateWithoutShopInput>, UserUncheckedUpdateWithoutShopInput>
  }

  export type ShopCreateNestedOneWithoutOrganizationInput = {
    create?: XOR<ShopCreateWithoutOrganizationInput, ShopUncheckedCreateWithoutOrganizationInput>
    connectOrCreate?: ShopCreateOrConnectWithoutOrganizationInput
    connect?: ShopWhereUniqueInput
  }

  export type OrganizationCreateNestedOneWithoutShopInput = {
    create?: XOR<OrganizationCreateWithoutShopInput, OrganizationUncheckedCreateWithoutShopInput>
    connectOrCreate?: OrganizationCreateOrConnectWithoutShopInput
    connect?: OrganizationWhereUniqueInput
  }

  export type ShopUpdateOneRequiredWithoutOrganizationNestedInput = {
    create?: XOR<ShopCreateWithoutOrganizationInput, ShopUncheckedCreateWithoutOrganizationInput>
    connectOrCreate?: ShopCreateOrConnectWithoutOrganizationInput
    upsert?: ShopUpsertWithoutOrganizationInput
    connect?: ShopWhereUniqueInput
    update?: XOR<XOR<ShopUpdateToOneWithWhereWithoutOrganizationInput, ShopUpdateWithoutOrganizationInput>, ShopUncheckedUpdateWithoutOrganizationInput>
  }

  export type OrganizationUpdateOneRequiredWithoutShopNestedInput = {
    create?: XOR<OrganizationCreateWithoutShopInput, OrganizationUncheckedCreateWithoutShopInput>
    connectOrCreate?: OrganizationCreateOrConnectWithoutShopInput
    upsert?: OrganizationUpsertWithoutShopInput
    connect?: OrganizationWhereUniqueInput
    update?: XOR<XOR<OrganizationUpdateToOneWithWhereWithoutShopInput, OrganizationUpdateWithoutShopInput>, OrganizationUncheckedUpdateWithoutShopInput>
  }

  export type OrganizationShopBelongingCreateNestedManyWithoutOrganizationInput = {
    create?: XOR<OrganizationShopBelongingCreateWithoutOrganizationInput, OrganizationShopBelongingUncheckedCreateWithoutOrganizationInput> | OrganizationShopBelongingCreateWithoutOrganizationInput[] | OrganizationShopBelongingUncheckedCreateWithoutOrganizationInput[]
    connectOrCreate?: OrganizationShopBelongingCreateOrConnectWithoutOrganizationInput | OrganizationShopBelongingCreateOrConnectWithoutOrganizationInput[]
    createMany?: OrganizationShopBelongingCreateManyOrganizationInputEnvelope
    connect?: OrganizationShopBelongingWhereUniqueInput | OrganizationShopBelongingWhereUniqueInput[]
  }

  export type TemporaryClosedCreateNestedManyWithoutOrganizationInput = {
    create?: XOR<TemporaryClosedCreateWithoutOrganizationInput, TemporaryClosedUncheckedCreateWithoutOrganizationInput> | TemporaryClosedCreateWithoutOrganizationInput[] | TemporaryClosedUncheckedCreateWithoutOrganizationInput[]
    connectOrCreate?: TemporaryClosedCreateOrConnectWithoutOrganizationInput | TemporaryClosedCreateOrConnectWithoutOrganizationInput[]
    createMany?: TemporaryClosedCreateManyOrganizationInputEnvelope
    connect?: TemporaryClosedWhereUniqueInput | TemporaryClosedWhereUniqueInput[]
  }

  export type AnnounceCreateNestedManyWithoutOrganizationInput = {
    create?: XOR<AnnounceCreateWithoutOrganizationInput, AnnounceUncheckedCreateWithoutOrganizationInput> | AnnounceCreateWithoutOrganizationInput[] | AnnounceUncheckedCreateWithoutOrganizationInput[]
    connectOrCreate?: AnnounceCreateOrConnectWithoutOrganizationInput | AnnounceCreateOrConnectWithoutOrganizationInput[]
    createMany?: AnnounceCreateManyOrganizationInputEnvelope
    connect?: AnnounceWhereUniqueInput | AnnounceWhereUniqueInput[]
  }

  export type OrganizationShopBelongingUncheckedCreateNestedManyWithoutOrganizationInput = {
    create?: XOR<OrganizationShopBelongingCreateWithoutOrganizationInput, OrganizationShopBelongingUncheckedCreateWithoutOrganizationInput> | OrganizationShopBelongingCreateWithoutOrganizationInput[] | OrganizationShopBelongingUncheckedCreateWithoutOrganizationInput[]
    connectOrCreate?: OrganizationShopBelongingCreateOrConnectWithoutOrganizationInput | OrganizationShopBelongingCreateOrConnectWithoutOrganizationInput[]
    createMany?: OrganizationShopBelongingCreateManyOrganizationInputEnvelope
    connect?: OrganizationShopBelongingWhereUniqueInput | OrganizationShopBelongingWhereUniqueInput[]
  }

  export type TemporaryClosedUncheckedCreateNestedManyWithoutOrganizationInput = {
    create?: XOR<TemporaryClosedCreateWithoutOrganizationInput, TemporaryClosedUncheckedCreateWithoutOrganizationInput> | TemporaryClosedCreateWithoutOrganizationInput[] | TemporaryClosedUncheckedCreateWithoutOrganizationInput[]
    connectOrCreate?: TemporaryClosedCreateOrConnectWithoutOrganizationInput | TemporaryClosedCreateOrConnectWithoutOrganizationInput[]
    createMany?: TemporaryClosedCreateManyOrganizationInputEnvelope
    connect?: TemporaryClosedWhereUniqueInput | TemporaryClosedWhereUniqueInput[]
  }

  export type AnnounceUncheckedCreateNestedManyWithoutOrganizationInput = {
    create?: XOR<AnnounceCreateWithoutOrganizationInput, AnnounceUncheckedCreateWithoutOrganizationInput> | AnnounceCreateWithoutOrganizationInput[] | AnnounceUncheckedCreateWithoutOrganizationInput[]
    connectOrCreate?: AnnounceCreateOrConnectWithoutOrganizationInput | AnnounceCreateOrConnectWithoutOrganizationInput[]
    createMany?: AnnounceCreateManyOrganizationInputEnvelope
    connect?: AnnounceWhereUniqueInput | AnnounceWhereUniqueInput[]
  }

  export type OrganizationShopBelongingUpdateManyWithoutOrganizationNestedInput = {
    create?: XOR<OrganizationShopBelongingCreateWithoutOrganizationInput, OrganizationShopBelongingUncheckedCreateWithoutOrganizationInput> | OrganizationShopBelongingCreateWithoutOrganizationInput[] | OrganizationShopBelongingUncheckedCreateWithoutOrganizationInput[]
    connectOrCreate?: OrganizationShopBelongingCreateOrConnectWithoutOrganizationInput | OrganizationShopBelongingCreateOrConnectWithoutOrganizationInput[]
    upsert?: OrganizationShopBelongingUpsertWithWhereUniqueWithoutOrganizationInput | OrganizationShopBelongingUpsertWithWhereUniqueWithoutOrganizationInput[]
    createMany?: OrganizationShopBelongingCreateManyOrganizationInputEnvelope
    set?: OrganizationShopBelongingWhereUniqueInput | OrganizationShopBelongingWhereUniqueInput[]
    disconnect?: OrganizationShopBelongingWhereUniqueInput | OrganizationShopBelongingWhereUniqueInput[]
    delete?: OrganizationShopBelongingWhereUniqueInput | OrganizationShopBelongingWhereUniqueInput[]
    connect?: OrganizationShopBelongingWhereUniqueInput | OrganizationShopBelongingWhereUniqueInput[]
    update?: OrganizationShopBelongingUpdateWithWhereUniqueWithoutOrganizationInput | OrganizationShopBelongingUpdateWithWhereUniqueWithoutOrganizationInput[]
    updateMany?: OrganizationShopBelongingUpdateManyWithWhereWithoutOrganizationInput | OrganizationShopBelongingUpdateManyWithWhereWithoutOrganizationInput[]
    deleteMany?: OrganizationShopBelongingScalarWhereInput | OrganizationShopBelongingScalarWhereInput[]
  }

  export type TemporaryClosedUpdateManyWithoutOrganizationNestedInput = {
    create?: XOR<TemporaryClosedCreateWithoutOrganizationInput, TemporaryClosedUncheckedCreateWithoutOrganizationInput> | TemporaryClosedCreateWithoutOrganizationInput[] | TemporaryClosedUncheckedCreateWithoutOrganizationInput[]
    connectOrCreate?: TemporaryClosedCreateOrConnectWithoutOrganizationInput | TemporaryClosedCreateOrConnectWithoutOrganizationInput[]
    upsert?: TemporaryClosedUpsertWithWhereUniqueWithoutOrganizationInput | TemporaryClosedUpsertWithWhereUniqueWithoutOrganizationInput[]
    createMany?: TemporaryClosedCreateManyOrganizationInputEnvelope
    set?: TemporaryClosedWhereUniqueInput | TemporaryClosedWhereUniqueInput[]
    disconnect?: TemporaryClosedWhereUniqueInput | TemporaryClosedWhereUniqueInput[]
    delete?: TemporaryClosedWhereUniqueInput | TemporaryClosedWhereUniqueInput[]
    connect?: TemporaryClosedWhereUniqueInput | TemporaryClosedWhereUniqueInput[]
    update?: TemporaryClosedUpdateWithWhereUniqueWithoutOrganizationInput | TemporaryClosedUpdateWithWhereUniqueWithoutOrganizationInput[]
    updateMany?: TemporaryClosedUpdateManyWithWhereWithoutOrganizationInput | TemporaryClosedUpdateManyWithWhereWithoutOrganizationInput[]
    deleteMany?: TemporaryClosedScalarWhereInput | TemporaryClosedScalarWhereInput[]
  }

  export type AnnounceUpdateManyWithoutOrganizationNestedInput = {
    create?: XOR<AnnounceCreateWithoutOrganizationInput, AnnounceUncheckedCreateWithoutOrganizationInput> | AnnounceCreateWithoutOrganizationInput[] | AnnounceUncheckedCreateWithoutOrganizationInput[]
    connectOrCreate?: AnnounceCreateOrConnectWithoutOrganizationInput | AnnounceCreateOrConnectWithoutOrganizationInput[]
    upsert?: AnnounceUpsertWithWhereUniqueWithoutOrganizationInput | AnnounceUpsertWithWhereUniqueWithoutOrganizationInput[]
    createMany?: AnnounceCreateManyOrganizationInputEnvelope
    set?: AnnounceWhereUniqueInput | AnnounceWhereUniqueInput[]
    disconnect?: AnnounceWhereUniqueInput | AnnounceWhereUniqueInput[]
    delete?: AnnounceWhereUniqueInput | AnnounceWhereUniqueInput[]
    connect?: AnnounceWhereUniqueInput | AnnounceWhereUniqueInput[]
    update?: AnnounceUpdateWithWhereUniqueWithoutOrganizationInput | AnnounceUpdateWithWhereUniqueWithoutOrganizationInput[]
    updateMany?: AnnounceUpdateManyWithWhereWithoutOrganizationInput | AnnounceUpdateManyWithWhereWithoutOrganizationInput[]
    deleteMany?: AnnounceScalarWhereInput | AnnounceScalarWhereInput[]
  }

  export type OrganizationShopBelongingUncheckedUpdateManyWithoutOrganizationNestedInput = {
    create?: XOR<OrganizationShopBelongingCreateWithoutOrganizationInput, OrganizationShopBelongingUncheckedCreateWithoutOrganizationInput> | OrganizationShopBelongingCreateWithoutOrganizationInput[] | OrganizationShopBelongingUncheckedCreateWithoutOrganizationInput[]
    connectOrCreate?: OrganizationShopBelongingCreateOrConnectWithoutOrganizationInput | OrganizationShopBelongingCreateOrConnectWithoutOrganizationInput[]
    upsert?: OrganizationShopBelongingUpsertWithWhereUniqueWithoutOrganizationInput | OrganizationShopBelongingUpsertWithWhereUniqueWithoutOrganizationInput[]
    createMany?: OrganizationShopBelongingCreateManyOrganizationInputEnvelope
    set?: OrganizationShopBelongingWhereUniqueInput | OrganizationShopBelongingWhereUniqueInput[]
    disconnect?: OrganizationShopBelongingWhereUniqueInput | OrganizationShopBelongingWhereUniqueInput[]
    delete?: OrganizationShopBelongingWhereUniqueInput | OrganizationShopBelongingWhereUniqueInput[]
    connect?: OrganizationShopBelongingWhereUniqueInput | OrganizationShopBelongingWhereUniqueInput[]
    update?: OrganizationShopBelongingUpdateWithWhereUniqueWithoutOrganizationInput | OrganizationShopBelongingUpdateWithWhereUniqueWithoutOrganizationInput[]
    updateMany?: OrganizationShopBelongingUpdateManyWithWhereWithoutOrganizationInput | OrganizationShopBelongingUpdateManyWithWhereWithoutOrganizationInput[]
    deleteMany?: OrganizationShopBelongingScalarWhereInput | OrganizationShopBelongingScalarWhereInput[]
  }

  export type TemporaryClosedUncheckedUpdateManyWithoutOrganizationNestedInput = {
    create?: XOR<TemporaryClosedCreateWithoutOrganizationInput, TemporaryClosedUncheckedCreateWithoutOrganizationInput> | TemporaryClosedCreateWithoutOrganizationInput[] | TemporaryClosedUncheckedCreateWithoutOrganizationInput[]
    connectOrCreate?: TemporaryClosedCreateOrConnectWithoutOrganizationInput | TemporaryClosedCreateOrConnectWithoutOrganizationInput[]
    upsert?: TemporaryClosedUpsertWithWhereUniqueWithoutOrganizationInput | TemporaryClosedUpsertWithWhereUniqueWithoutOrganizationInput[]
    createMany?: TemporaryClosedCreateManyOrganizationInputEnvelope
    set?: TemporaryClosedWhereUniqueInput | TemporaryClosedWhereUniqueInput[]
    disconnect?: TemporaryClosedWhereUniqueInput | TemporaryClosedWhereUniqueInput[]
    delete?: TemporaryClosedWhereUniqueInput | TemporaryClosedWhereUniqueInput[]
    connect?: TemporaryClosedWhereUniqueInput | TemporaryClosedWhereUniqueInput[]
    update?: TemporaryClosedUpdateWithWhereUniqueWithoutOrganizationInput | TemporaryClosedUpdateWithWhereUniqueWithoutOrganizationInput[]
    updateMany?: TemporaryClosedUpdateManyWithWhereWithoutOrganizationInput | TemporaryClosedUpdateManyWithWhereWithoutOrganizationInput[]
    deleteMany?: TemporaryClosedScalarWhereInput | TemporaryClosedScalarWhereInput[]
  }

  export type AnnounceUncheckedUpdateManyWithoutOrganizationNestedInput = {
    create?: XOR<AnnounceCreateWithoutOrganizationInput, AnnounceUncheckedCreateWithoutOrganizationInput> | AnnounceCreateWithoutOrganizationInput[] | AnnounceUncheckedCreateWithoutOrganizationInput[]
    connectOrCreate?: AnnounceCreateOrConnectWithoutOrganizationInput | AnnounceCreateOrConnectWithoutOrganizationInput[]
    upsert?: AnnounceUpsertWithWhereUniqueWithoutOrganizationInput | AnnounceUpsertWithWhereUniqueWithoutOrganizationInput[]
    createMany?: AnnounceCreateManyOrganizationInputEnvelope
    set?: AnnounceWhereUniqueInput | AnnounceWhereUniqueInput[]
    disconnect?: AnnounceWhereUniqueInput | AnnounceWhereUniqueInput[]
    delete?: AnnounceWhereUniqueInput | AnnounceWhereUniqueInput[]
    connect?: AnnounceWhereUniqueInput | AnnounceWhereUniqueInput[]
    update?: AnnounceUpdateWithWhereUniqueWithoutOrganizationInput | AnnounceUpdateWithWhereUniqueWithoutOrganizationInput[]
    updateMany?: AnnounceUpdateManyWithWhereWithoutOrganizationInput | AnnounceUpdateManyWithWhereWithoutOrganizationInput[]
    deleteMany?: AnnounceScalarWhereInput | AnnounceScalarWhereInput[]
  }

  export type OrganizationShopBelongingCreateNestedManyWithoutShopInput = {
    create?: XOR<OrganizationShopBelongingCreateWithoutShopInput, OrganizationShopBelongingUncheckedCreateWithoutShopInput> | OrganizationShopBelongingCreateWithoutShopInput[] | OrganizationShopBelongingUncheckedCreateWithoutShopInput[]
    connectOrCreate?: OrganizationShopBelongingCreateOrConnectWithoutShopInput | OrganizationShopBelongingCreateOrConnectWithoutShopInput[]
    createMany?: OrganizationShopBelongingCreateManyShopInputEnvelope
    connect?: OrganizationShopBelongingWhereUniqueInput | OrganizationShopBelongingWhereUniqueInput[]
  }

  export type ShopUserBelongingCreateNestedManyWithoutShopInput = {
    create?: XOR<ShopUserBelongingCreateWithoutShopInput, ShopUserBelongingUncheckedCreateWithoutShopInput> | ShopUserBelongingCreateWithoutShopInput[] | ShopUserBelongingUncheckedCreateWithoutShopInput[]
    connectOrCreate?: ShopUserBelongingCreateOrConnectWithoutShopInput | ShopUserBelongingCreateOrConnectWithoutShopInput[]
    createMany?: ShopUserBelongingCreateManyShopInputEnvelope
    connect?: ShopUserBelongingWhereUniqueInput | ShopUserBelongingWhereUniqueInput[]
  }

  export type OperationCreateNestedManyWithoutShopInput = {
    create?: XOR<OperationCreateWithoutShopInput, OperationUncheckedCreateWithoutShopInput> | OperationCreateWithoutShopInput[] | OperationUncheckedCreateWithoutShopInput[]
    connectOrCreate?: OperationCreateOrConnectWithoutShopInput | OperationCreateOrConnectWithoutShopInput[]
    createMany?: OperationCreateManyShopInputEnvelope
    connect?: OperationWhereUniqueInput | OperationWhereUniqueInput[]
  }

  export type StableShiftCreateNestedManyWithoutShopInput = {
    create?: XOR<StableShiftCreateWithoutShopInput, StableShiftUncheckedCreateWithoutShopInput> | StableShiftCreateWithoutShopInput[] | StableShiftUncheckedCreateWithoutShopInput[]
    connectOrCreate?: StableShiftCreateOrConnectWithoutShopInput | StableShiftCreateOrConnectWithoutShopInput[]
    createMany?: StableShiftCreateManyShopInputEnvelope
    connect?: StableShiftWhereUniqueInput | StableShiftWhereUniqueInput[]
  }

  export type UnstableShiftCreateNestedManyWithoutShopInput = {
    create?: XOR<UnstableShiftCreateWithoutShopInput, UnstableShiftUncheckedCreateWithoutShopInput> | UnstableShiftCreateWithoutShopInput[] | UnstableShiftUncheckedCreateWithoutShopInput[]
    connectOrCreate?: UnstableShiftCreateOrConnectWithoutShopInput | UnstableShiftCreateOrConnectWithoutShopInput[]
    createMany?: UnstableShiftCreateManyShopInputEnvelope
    connect?: UnstableShiftWhereUniqueInput | UnstableShiftWhereUniqueInput[]
  }

  export type RequestCreateNestedManyWithoutShopInput = {
    create?: XOR<RequestCreateWithoutShopInput, RequestUncheckedCreateWithoutShopInput> | RequestCreateWithoutShopInput[] | RequestUncheckedCreateWithoutShopInput[]
    connectOrCreate?: RequestCreateOrConnectWithoutShopInput | RequestCreateOrConnectWithoutShopInput[]
    createMany?: RequestCreateManyShopInputEnvelope
    connect?: RequestWhereUniqueInput | RequestWhereUniqueInput[]
  }

  export type TimeCardCreateNestedManyWithoutShopInput = {
    create?: XOR<TimeCardCreateWithoutShopInput, TimeCardUncheckedCreateWithoutShopInput> | TimeCardCreateWithoutShopInput[] | TimeCardUncheckedCreateWithoutShopInput[]
    connectOrCreate?: TimeCardCreateOrConnectWithoutShopInput | TimeCardCreateOrConnectWithoutShopInput[]
    createMany?: TimeCardCreateManyShopInputEnvelope
    connect?: TimeCardWhereUniqueInput | TimeCardWhereUniqueInput[]
  }

  export type TemporaryClosedCreateNestedManyWithoutShopInput = {
    create?: XOR<TemporaryClosedCreateWithoutShopInput, TemporaryClosedUncheckedCreateWithoutShopInput> | TemporaryClosedCreateWithoutShopInput[] | TemporaryClosedUncheckedCreateWithoutShopInput[]
    connectOrCreate?: TemporaryClosedCreateOrConnectWithoutShopInput | TemporaryClosedCreateOrConnectWithoutShopInput[]
    createMany?: TemporaryClosedCreateManyShopInputEnvelope
    connect?: TemporaryClosedWhereUniqueInput | TemporaryClosedWhereUniqueInput[]
  }

  export type AnnounceCreateNestedManyWithoutShopInput = {
    create?: XOR<AnnounceCreateWithoutShopInput, AnnounceUncheckedCreateWithoutShopInput> | AnnounceCreateWithoutShopInput[] | AnnounceUncheckedCreateWithoutShopInput[]
    connectOrCreate?: AnnounceCreateOrConnectWithoutShopInput | AnnounceCreateOrConnectWithoutShopInput[]
    createMany?: AnnounceCreateManyShopInputEnvelope
    connect?: AnnounceWhereUniqueInput | AnnounceWhereUniqueInput[]
  }

  export type InvitationCreateNestedManyWithoutInvitedByInput = {
    create?: XOR<InvitationCreateWithoutInvitedByInput, InvitationUncheckedCreateWithoutInvitedByInput> | InvitationCreateWithoutInvitedByInput[] | InvitationUncheckedCreateWithoutInvitedByInput[]
    connectOrCreate?: InvitationCreateOrConnectWithoutInvitedByInput | InvitationCreateOrConnectWithoutInvitedByInput[]
    createMany?: InvitationCreateManyInvitedByInputEnvelope
    connect?: InvitationWhereUniqueInput | InvitationWhereUniqueInput[]
  }

  export type OrganizationShopBelongingUncheckedCreateNestedManyWithoutShopInput = {
    create?: XOR<OrganizationShopBelongingCreateWithoutShopInput, OrganizationShopBelongingUncheckedCreateWithoutShopInput> | OrganizationShopBelongingCreateWithoutShopInput[] | OrganizationShopBelongingUncheckedCreateWithoutShopInput[]
    connectOrCreate?: OrganizationShopBelongingCreateOrConnectWithoutShopInput | OrganizationShopBelongingCreateOrConnectWithoutShopInput[]
    createMany?: OrganizationShopBelongingCreateManyShopInputEnvelope
    connect?: OrganizationShopBelongingWhereUniqueInput | OrganizationShopBelongingWhereUniqueInput[]
  }

  export type ShopUserBelongingUncheckedCreateNestedManyWithoutShopInput = {
    create?: XOR<ShopUserBelongingCreateWithoutShopInput, ShopUserBelongingUncheckedCreateWithoutShopInput> | ShopUserBelongingCreateWithoutShopInput[] | ShopUserBelongingUncheckedCreateWithoutShopInput[]
    connectOrCreate?: ShopUserBelongingCreateOrConnectWithoutShopInput | ShopUserBelongingCreateOrConnectWithoutShopInput[]
    createMany?: ShopUserBelongingCreateManyShopInputEnvelope
    connect?: ShopUserBelongingWhereUniqueInput | ShopUserBelongingWhereUniqueInput[]
  }

  export type OperationUncheckedCreateNestedManyWithoutShopInput = {
    create?: XOR<OperationCreateWithoutShopInput, OperationUncheckedCreateWithoutShopInput> | OperationCreateWithoutShopInput[] | OperationUncheckedCreateWithoutShopInput[]
    connectOrCreate?: OperationCreateOrConnectWithoutShopInput | OperationCreateOrConnectWithoutShopInput[]
    createMany?: OperationCreateManyShopInputEnvelope
    connect?: OperationWhereUniqueInput | OperationWhereUniqueInput[]
  }

  export type StableShiftUncheckedCreateNestedManyWithoutShopInput = {
    create?: XOR<StableShiftCreateWithoutShopInput, StableShiftUncheckedCreateWithoutShopInput> | StableShiftCreateWithoutShopInput[] | StableShiftUncheckedCreateWithoutShopInput[]
    connectOrCreate?: StableShiftCreateOrConnectWithoutShopInput | StableShiftCreateOrConnectWithoutShopInput[]
    createMany?: StableShiftCreateManyShopInputEnvelope
    connect?: StableShiftWhereUniqueInput | StableShiftWhereUniqueInput[]
  }

  export type UnstableShiftUncheckedCreateNestedManyWithoutShopInput = {
    create?: XOR<UnstableShiftCreateWithoutShopInput, UnstableShiftUncheckedCreateWithoutShopInput> | UnstableShiftCreateWithoutShopInput[] | UnstableShiftUncheckedCreateWithoutShopInput[]
    connectOrCreate?: UnstableShiftCreateOrConnectWithoutShopInput | UnstableShiftCreateOrConnectWithoutShopInput[]
    createMany?: UnstableShiftCreateManyShopInputEnvelope
    connect?: UnstableShiftWhereUniqueInput | UnstableShiftWhereUniqueInput[]
  }

  export type RequestUncheckedCreateNestedManyWithoutShopInput = {
    create?: XOR<RequestCreateWithoutShopInput, RequestUncheckedCreateWithoutShopInput> | RequestCreateWithoutShopInput[] | RequestUncheckedCreateWithoutShopInput[]
    connectOrCreate?: RequestCreateOrConnectWithoutShopInput | RequestCreateOrConnectWithoutShopInput[]
    createMany?: RequestCreateManyShopInputEnvelope
    connect?: RequestWhereUniqueInput | RequestWhereUniqueInput[]
  }

  export type TimeCardUncheckedCreateNestedManyWithoutShopInput = {
    create?: XOR<TimeCardCreateWithoutShopInput, TimeCardUncheckedCreateWithoutShopInput> | TimeCardCreateWithoutShopInput[] | TimeCardUncheckedCreateWithoutShopInput[]
    connectOrCreate?: TimeCardCreateOrConnectWithoutShopInput | TimeCardCreateOrConnectWithoutShopInput[]
    createMany?: TimeCardCreateManyShopInputEnvelope
    connect?: TimeCardWhereUniqueInput | TimeCardWhereUniqueInput[]
  }

  export type TemporaryClosedUncheckedCreateNestedManyWithoutShopInput = {
    create?: XOR<TemporaryClosedCreateWithoutShopInput, TemporaryClosedUncheckedCreateWithoutShopInput> | TemporaryClosedCreateWithoutShopInput[] | TemporaryClosedUncheckedCreateWithoutShopInput[]
    connectOrCreate?: TemporaryClosedCreateOrConnectWithoutShopInput | TemporaryClosedCreateOrConnectWithoutShopInput[]
    createMany?: TemporaryClosedCreateManyShopInputEnvelope
    connect?: TemporaryClosedWhereUniqueInput | TemporaryClosedWhereUniqueInput[]
  }

  export type AnnounceUncheckedCreateNestedManyWithoutShopInput = {
    create?: XOR<AnnounceCreateWithoutShopInput, AnnounceUncheckedCreateWithoutShopInput> | AnnounceCreateWithoutShopInput[] | AnnounceUncheckedCreateWithoutShopInput[]
    connectOrCreate?: AnnounceCreateOrConnectWithoutShopInput | AnnounceCreateOrConnectWithoutShopInput[]
    createMany?: AnnounceCreateManyShopInputEnvelope
    connect?: AnnounceWhereUniqueInput | AnnounceWhereUniqueInput[]
  }

  export type InvitationUncheckedCreateNestedManyWithoutInvitedByInput = {
    create?: XOR<InvitationCreateWithoutInvitedByInput, InvitationUncheckedCreateWithoutInvitedByInput> | InvitationCreateWithoutInvitedByInput[] | InvitationUncheckedCreateWithoutInvitedByInput[]
    connectOrCreate?: InvitationCreateOrConnectWithoutInvitedByInput | InvitationCreateOrConnectWithoutInvitedByInput[]
    createMany?: InvitationCreateManyInvitedByInputEnvelope
    connect?: InvitationWhereUniqueInput | InvitationWhereUniqueInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type OrganizationShopBelongingUpdateManyWithoutShopNestedInput = {
    create?: XOR<OrganizationShopBelongingCreateWithoutShopInput, OrganizationShopBelongingUncheckedCreateWithoutShopInput> | OrganizationShopBelongingCreateWithoutShopInput[] | OrganizationShopBelongingUncheckedCreateWithoutShopInput[]
    connectOrCreate?: OrganizationShopBelongingCreateOrConnectWithoutShopInput | OrganizationShopBelongingCreateOrConnectWithoutShopInput[]
    upsert?: OrganizationShopBelongingUpsertWithWhereUniqueWithoutShopInput | OrganizationShopBelongingUpsertWithWhereUniqueWithoutShopInput[]
    createMany?: OrganizationShopBelongingCreateManyShopInputEnvelope
    set?: OrganizationShopBelongingWhereUniqueInput | OrganizationShopBelongingWhereUniqueInput[]
    disconnect?: OrganizationShopBelongingWhereUniqueInput | OrganizationShopBelongingWhereUniqueInput[]
    delete?: OrganizationShopBelongingWhereUniqueInput | OrganizationShopBelongingWhereUniqueInput[]
    connect?: OrganizationShopBelongingWhereUniqueInput | OrganizationShopBelongingWhereUniqueInput[]
    update?: OrganizationShopBelongingUpdateWithWhereUniqueWithoutShopInput | OrganizationShopBelongingUpdateWithWhereUniqueWithoutShopInput[]
    updateMany?: OrganizationShopBelongingUpdateManyWithWhereWithoutShopInput | OrganizationShopBelongingUpdateManyWithWhereWithoutShopInput[]
    deleteMany?: OrganizationShopBelongingScalarWhereInput | OrganizationShopBelongingScalarWhereInput[]
  }

  export type ShopUserBelongingUpdateManyWithoutShopNestedInput = {
    create?: XOR<ShopUserBelongingCreateWithoutShopInput, ShopUserBelongingUncheckedCreateWithoutShopInput> | ShopUserBelongingCreateWithoutShopInput[] | ShopUserBelongingUncheckedCreateWithoutShopInput[]
    connectOrCreate?: ShopUserBelongingCreateOrConnectWithoutShopInput | ShopUserBelongingCreateOrConnectWithoutShopInput[]
    upsert?: ShopUserBelongingUpsertWithWhereUniqueWithoutShopInput | ShopUserBelongingUpsertWithWhereUniqueWithoutShopInput[]
    createMany?: ShopUserBelongingCreateManyShopInputEnvelope
    set?: ShopUserBelongingWhereUniqueInput | ShopUserBelongingWhereUniqueInput[]
    disconnect?: ShopUserBelongingWhereUniqueInput | ShopUserBelongingWhereUniqueInput[]
    delete?: ShopUserBelongingWhereUniqueInput | ShopUserBelongingWhereUniqueInput[]
    connect?: ShopUserBelongingWhereUniqueInput | ShopUserBelongingWhereUniqueInput[]
    update?: ShopUserBelongingUpdateWithWhereUniqueWithoutShopInput | ShopUserBelongingUpdateWithWhereUniqueWithoutShopInput[]
    updateMany?: ShopUserBelongingUpdateManyWithWhereWithoutShopInput | ShopUserBelongingUpdateManyWithWhereWithoutShopInput[]
    deleteMany?: ShopUserBelongingScalarWhereInput | ShopUserBelongingScalarWhereInput[]
  }

  export type OperationUpdateManyWithoutShopNestedInput = {
    create?: XOR<OperationCreateWithoutShopInput, OperationUncheckedCreateWithoutShopInput> | OperationCreateWithoutShopInput[] | OperationUncheckedCreateWithoutShopInput[]
    connectOrCreate?: OperationCreateOrConnectWithoutShopInput | OperationCreateOrConnectWithoutShopInput[]
    upsert?: OperationUpsertWithWhereUniqueWithoutShopInput | OperationUpsertWithWhereUniqueWithoutShopInput[]
    createMany?: OperationCreateManyShopInputEnvelope
    set?: OperationWhereUniqueInput | OperationWhereUniqueInput[]
    disconnect?: OperationWhereUniqueInput | OperationWhereUniqueInput[]
    delete?: OperationWhereUniqueInput | OperationWhereUniqueInput[]
    connect?: OperationWhereUniqueInput | OperationWhereUniqueInput[]
    update?: OperationUpdateWithWhereUniqueWithoutShopInput | OperationUpdateWithWhereUniqueWithoutShopInput[]
    updateMany?: OperationUpdateManyWithWhereWithoutShopInput | OperationUpdateManyWithWhereWithoutShopInput[]
    deleteMany?: OperationScalarWhereInput | OperationScalarWhereInput[]
  }

  export type StableShiftUpdateManyWithoutShopNestedInput = {
    create?: XOR<StableShiftCreateWithoutShopInput, StableShiftUncheckedCreateWithoutShopInput> | StableShiftCreateWithoutShopInput[] | StableShiftUncheckedCreateWithoutShopInput[]
    connectOrCreate?: StableShiftCreateOrConnectWithoutShopInput | StableShiftCreateOrConnectWithoutShopInput[]
    upsert?: StableShiftUpsertWithWhereUniqueWithoutShopInput | StableShiftUpsertWithWhereUniqueWithoutShopInput[]
    createMany?: StableShiftCreateManyShopInputEnvelope
    set?: StableShiftWhereUniqueInput | StableShiftWhereUniqueInput[]
    disconnect?: StableShiftWhereUniqueInput | StableShiftWhereUniqueInput[]
    delete?: StableShiftWhereUniqueInput | StableShiftWhereUniqueInput[]
    connect?: StableShiftWhereUniqueInput | StableShiftWhereUniqueInput[]
    update?: StableShiftUpdateWithWhereUniqueWithoutShopInput | StableShiftUpdateWithWhereUniqueWithoutShopInput[]
    updateMany?: StableShiftUpdateManyWithWhereWithoutShopInput | StableShiftUpdateManyWithWhereWithoutShopInput[]
    deleteMany?: StableShiftScalarWhereInput | StableShiftScalarWhereInput[]
  }

  export type UnstableShiftUpdateManyWithoutShopNestedInput = {
    create?: XOR<UnstableShiftCreateWithoutShopInput, UnstableShiftUncheckedCreateWithoutShopInput> | UnstableShiftCreateWithoutShopInput[] | UnstableShiftUncheckedCreateWithoutShopInput[]
    connectOrCreate?: UnstableShiftCreateOrConnectWithoutShopInput | UnstableShiftCreateOrConnectWithoutShopInput[]
    upsert?: UnstableShiftUpsertWithWhereUniqueWithoutShopInput | UnstableShiftUpsertWithWhereUniqueWithoutShopInput[]
    createMany?: UnstableShiftCreateManyShopInputEnvelope
    set?: UnstableShiftWhereUniqueInput | UnstableShiftWhereUniqueInput[]
    disconnect?: UnstableShiftWhereUniqueInput | UnstableShiftWhereUniqueInput[]
    delete?: UnstableShiftWhereUniqueInput | UnstableShiftWhereUniqueInput[]
    connect?: UnstableShiftWhereUniqueInput | UnstableShiftWhereUniqueInput[]
    update?: UnstableShiftUpdateWithWhereUniqueWithoutShopInput | UnstableShiftUpdateWithWhereUniqueWithoutShopInput[]
    updateMany?: UnstableShiftUpdateManyWithWhereWithoutShopInput | UnstableShiftUpdateManyWithWhereWithoutShopInput[]
    deleteMany?: UnstableShiftScalarWhereInput | UnstableShiftScalarWhereInput[]
  }

  export type RequestUpdateManyWithoutShopNestedInput = {
    create?: XOR<RequestCreateWithoutShopInput, RequestUncheckedCreateWithoutShopInput> | RequestCreateWithoutShopInput[] | RequestUncheckedCreateWithoutShopInput[]
    connectOrCreate?: RequestCreateOrConnectWithoutShopInput | RequestCreateOrConnectWithoutShopInput[]
    upsert?: RequestUpsertWithWhereUniqueWithoutShopInput | RequestUpsertWithWhereUniqueWithoutShopInput[]
    createMany?: RequestCreateManyShopInputEnvelope
    set?: RequestWhereUniqueInput | RequestWhereUniqueInput[]
    disconnect?: RequestWhereUniqueInput | RequestWhereUniqueInput[]
    delete?: RequestWhereUniqueInput | RequestWhereUniqueInput[]
    connect?: RequestWhereUniqueInput | RequestWhereUniqueInput[]
    update?: RequestUpdateWithWhereUniqueWithoutShopInput | RequestUpdateWithWhereUniqueWithoutShopInput[]
    updateMany?: RequestUpdateManyWithWhereWithoutShopInput | RequestUpdateManyWithWhereWithoutShopInput[]
    deleteMany?: RequestScalarWhereInput | RequestScalarWhereInput[]
  }

  export type TimeCardUpdateManyWithoutShopNestedInput = {
    create?: XOR<TimeCardCreateWithoutShopInput, TimeCardUncheckedCreateWithoutShopInput> | TimeCardCreateWithoutShopInput[] | TimeCardUncheckedCreateWithoutShopInput[]
    connectOrCreate?: TimeCardCreateOrConnectWithoutShopInput | TimeCardCreateOrConnectWithoutShopInput[]
    upsert?: TimeCardUpsertWithWhereUniqueWithoutShopInput | TimeCardUpsertWithWhereUniqueWithoutShopInput[]
    createMany?: TimeCardCreateManyShopInputEnvelope
    set?: TimeCardWhereUniqueInput | TimeCardWhereUniqueInput[]
    disconnect?: TimeCardWhereUniqueInput | TimeCardWhereUniqueInput[]
    delete?: TimeCardWhereUniqueInput | TimeCardWhereUniqueInput[]
    connect?: TimeCardWhereUniqueInput | TimeCardWhereUniqueInput[]
    update?: TimeCardUpdateWithWhereUniqueWithoutShopInput | TimeCardUpdateWithWhereUniqueWithoutShopInput[]
    updateMany?: TimeCardUpdateManyWithWhereWithoutShopInput | TimeCardUpdateManyWithWhereWithoutShopInput[]
    deleteMany?: TimeCardScalarWhereInput | TimeCardScalarWhereInput[]
  }

  export type TemporaryClosedUpdateManyWithoutShopNestedInput = {
    create?: XOR<TemporaryClosedCreateWithoutShopInput, TemporaryClosedUncheckedCreateWithoutShopInput> | TemporaryClosedCreateWithoutShopInput[] | TemporaryClosedUncheckedCreateWithoutShopInput[]
    connectOrCreate?: TemporaryClosedCreateOrConnectWithoutShopInput | TemporaryClosedCreateOrConnectWithoutShopInput[]
    upsert?: TemporaryClosedUpsertWithWhereUniqueWithoutShopInput | TemporaryClosedUpsertWithWhereUniqueWithoutShopInput[]
    createMany?: TemporaryClosedCreateManyShopInputEnvelope
    set?: TemporaryClosedWhereUniqueInput | TemporaryClosedWhereUniqueInput[]
    disconnect?: TemporaryClosedWhereUniqueInput | TemporaryClosedWhereUniqueInput[]
    delete?: TemporaryClosedWhereUniqueInput | TemporaryClosedWhereUniqueInput[]
    connect?: TemporaryClosedWhereUniqueInput | TemporaryClosedWhereUniqueInput[]
    update?: TemporaryClosedUpdateWithWhereUniqueWithoutShopInput | TemporaryClosedUpdateWithWhereUniqueWithoutShopInput[]
    updateMany?: TemporaryClosedUpdateManyWithWhereWithoutShopInput | TemporaryClosedUpdateManyWithWhereWithoutShopInput[]
    deleteMany?: TemporaryClosedScalarWhereInput | TemporaryClosedScalarWhereInput[]
  }

  export type AnnounceUpdateManyWithoutShopNestedInput = {
    create?: XOR<AnnounceCreateWithoutShopInput, AnnounceUncheckedCreateWithoutShopInput> | AnnounceCreateWithoutShopInput[] | AnnounceUncheckedCreateWithoutShopInput[]
    connectOrCreate?: AnnounceCreateOrConnectWithoutShopInput | AnnounceCreateOrConnectWithoutShopInput[]
    upsert?: AnnounceUpsertWithWhereUniqueWithoutShopInput | AnnounceUpsertWithWhereUniqueWithoutShopInput[]
    createMany?: AnnounceCreateManyShopInputEnvelope
    set?: AnnounceWhereUniqueInput | AnnounceWhereUniqueInput[]
    disconnect?: AnnounceWhereUniqueInput | AnnounceWhereUniqueInput[]
    delete?: AnnounceWhereUniqueInput | AnnounceWhereUniqueInput[]
    connect?: AnnounceWhereUniqueInput | AnnounceWhereUniqueInput[]
    update?: AnnounceUpdateWithWhereUniqueWithoutShopInput | AnnounceUpdateWithWhereUniqueWithoutShopInput[]
    updateMany?: AnnounceUpdateManyWithWhereWithoutShopInput | AnnounceUpdateManyWithWhereWithoutShopInput[]
    deleteMany?: AnnounceScalarWhereInput | AnnounceScalarWhereInput[]
  }

  export type InvitationUpdateManyWithoutInvitedByNestedInput = {
    create?: XOR<InvitationCreateWithoutInvitedByInput, InvitationUncheckedCreateWithoutInvitedByInput> | InvitationCreateWithoutInvitedByInput[] | InvitationUncheckedCreateWithoutInvitedByInput[]
    connectOrCreate?: InvitationCreateOrConnectWithoutInvitedByInput | InvitationCreateOrConnectWithoutInvitedByInput[]
    upsert?: InvitationUpsertWithWhereUniqueWithoutInvitedByInput | InvitationUpsertWithWhereUniqueWithoutInvitedByInput[]
    createMany?: InvitationCreateManyInvitedByInputEnvelope
    set?: InvitationWhereUniqueInput | InvitationWhereUniqueInput[]
    disconnect?: InvitationWhereUniqueInput | InvitationWhereUniqueInput[]
    delete?: InvitationWhereUniqueInput | InvitationWhereUniqueInput[]
    connect?: InvitationWhereUniqueInput | InvitationWhereUniqueInput[]
    update?: InvitationUpdateWithWhereUniqueWithoutInvitedByInput | InvitationUpdateWithWhereUniqueWithoutInvitedByInput[]
    updateMany?: InvitationUpdateManyWithWhereWithoutInvitedByInput | InvitationUpdateManyWithWhereWithoutInvitedByInput[]
    deleteMany?: InvitationScalarWhereInput | InvitationScalarWhereInput[]
  }

  export type OrganizationShopBelongingUncheckedUpdateManyWithoutShopNestedInput = {
    create?: XOR<OrganizationShopBelongingCreateWithoutShopInput, OrganizationShopBelongingUncheckedCreateWithoutShopInput> | OrganizationShopBelongingCreateWithoutShopInput[] | OrganizationShopBelongingUncheckedCreateWithoutShopInput[]
    connectOrCreate?: OrganizationShopBelongingCreateOrConnectWithoutShopInput | OrganizationShopBelongingCreateOrConnectWithoutShopInput[]
    upsert?: OrganizationShopBelongingUpsertWithWhereUniqueWithoutShopInput | OrganizationShopBelongingUpsertWithWhereUniqueWithoutShopInput[]
    createMany?: OrganizationShopBelongingCreateManyShopInputEnvelope
    set?: OrganizationShopBelongingWhereUniqueInput | OrganizationShopBelongingWhereUniqueInput[]
    disconnect?: OrganizationShopBelongingWhereUniqueInput | OrganizationShopBelongingWhereUniqueInput[]
    delete?: OrganizationShopBelongingWhereUniqueInput | OrganizationShopBelongingWhereUniqueInput[]
    connect?: OrganizationShopBelongingWhereUniqueInput | OrganizationShopBelongingWhereUniqueInput[]
    update?: OrganizationShopBelongingUpdateWithWhereUniqueWithoutShopInput | OrganizationShopBelongingUpdateWithWhereUniqueWithoutShopInput[]
    updateMany?: OrganizationShopBelongingUpdateManyWithWhereWithoutShopInput | OrganizationShopBelongingUpdateManyWithWhereWithoutShopInput[]
    deleteMany?: OrganizationShopBelongingScalarWhereInput | OrganizationShopBelongingScalarWhereInput[]
  }

  export type ShopUserBelongingUncheckedUpdateManyWithoutShopNestedInput = {
    create?: XOR<ShopUserBelongingCreateWithoutShopInput, ShopUserBelongingUncheckedCreateWithoutShopInput> | ShopUserBelongingCreateWithoutShopInput[] | ShopUserBelongingUncheckedCreateWithoutShopInput[]
    connectOrCreate?: ShopUserBelongingCreateOrConnectWithoutShopInput | ShopUserBelongingCreateOrConnectWithoutShopInput[]
    upsert?: ShopUserBelongingUpsertWithWhereUniqueWithoutShopInput | ShopUserBelongingUpsertWithWhereUniqueWithoutShopInput[]
    createMany?: ShopUserBelongingCreateManyShopInputEnvelope
    set?: ShopUserBelongingWhereUniqueInput | ShopUserBelongingWhereUniqueInput[]
    disconnect?: ShopUserBelongingWhereUniqueInput | ShopUserBelongingWhereUniqueInput[]
    delete?: ShopUserBelongingWhereUniqueInput | ShopUserBelongingWhereUniqueInput[]
    connect?: ShopUserBelongingWhereUniqueInput | ShopUserBelongingWhereUniqueInput[]
    update?: ShopUserBelongingUpdateWithWhereUniqueWithoutShopInput | ShopUserBelongingUpdateWithWhereUniqueWithoutShopInput[]
    updateMany?: ShopUserBelongingUpdateManyWithWhereWithoutShopInput | ShopUserBelongingUpdateManyWithWhereWithoutShopInput[]
    deleteMany?: ShopUserBelongingScalarWhereInput | ShopUserBelongingScalarWhereInput[]
  }

  export type OperationUncheckedUpdateManyWithoutShopNestedInput = {
    create?: XOR<OperationCreateWithoutShopInput, OperationUncheckedCreateWithoutShopInput> | OperationCreateWithoutShopInput[] | OperationUncheckedCreateWithoutShopInput[]
    connectOrCreate?: OperationCreateOrConnectWithoutShopInput | OperationCreateOrConnectWithoutShopInput[]
    upsert?: OperationUpsertWithWhereUniqueWithoutShopInput | OperationUpsertWithWhereUniqueWithoutShopInput[]
    createMany?: OperationCreateManyShopInputEnvelope
    set?: OperationWhereUniqueInput | OperationWhereUniqueInput[]
    disconnect?: OperationWhereUniqueInput | OperationWhereUniqueInput[]
    delete?: OperationWhereUniqueInput | OperationWhereUniqueInput[]
    connect?: OperationWhereUniqueInput | OperationWhereUniqueInput[]
    update?: OperationUpdateWithWhereUniqueWithoutShopInput | OperationUpdateWithWhereUniqueWithoutShopInput[]
    updateMany?: OperationUpdateManyWithWhereWithoutShopInput | OperationUpdateManyWithWhereWithoutShopInput[]
    deleteMany?: OperationScalarWhereInput | OperationScalarWhereInput[]
  }

  export type StableShiftUncheckedUpdateManyWithoutShopNestedInput = {
    create?: XOR<StableShiftCreateWithoutShopInput, StableShiftUncheckedCreateWithoutShopInput> | StableShiftCreateWithoutShopInput[] | StableShiftUncheckedCreateWithoutShopInput[]
    connectOrCreate?: StableShiftCreateOrConnectWithoutShopInput | StableShiftCreateOrConnectWithoutShopInput[]
    upsert?: StableShiftUpsertWithWhereUniqueWithoutShopInput | StableShiftUpsertWithWhereUniqueWithoutShopInput[]
    createMany?: StableShiftCreateManyShopInputEnvelope
    set?: StableShiftWhereUniqueInput | StableShiftWhereUniqueInput[]
    disconnect?: StableShiftWhereUniqueInput | StableShiftWhereUniqueInput[]
    delete?: StableShiftWhereUniqueInput | StableShiftWhereUniqueInput[]
    connect?: StableShiftWhereUniqueInput | StableShiftWhereUniqueInput[]
    update?: StableShiftUpdateWithWhereUniqueWithoutShopInput | StableShiftUpdateWithWhereUniqueWithoutShopInput[]
    updateMany?: StableShiftUpdateManyWithWhereWithoutShopInput | StableShiftUpdateManyWithWhereWithoutShopInput[]
    deleteMany?: StableShiftScalarWhereInput | StableShiftScalarWhereInput[]
  }

  export type UnstableShiftUncheckedUpdateManyWithoutShopNestedInput = {
    create?: XOR<UnstableShiftCreateWithoutShopInput, UnstableShiftUncheckedCreateWithoutShopInput> | UnstableShiftCreateWithoutShopInput[] | UnstableShiftUncheckedCreateWithoutShopInput[]
    connectOrCreate?: UnstableShiftCreateOrConnectWithoutShopInput | UnstableShiftCreateOrConnectWithoutShopInput[]
    upsert?: UnstableShiftUpsertWithWhereUniqueWithoutShopInput | UnstableShiftUpsertWithWhereUniqueWithoutShopInput[]
    createMany?: UnstableShiftCreateManyShopInputEnvelope
    set?: UnstableShiftWhereUniqueInput | UnstableShiftWhereUniqueInput[]
    disconnect?: UnstableShiftWhereUniqueInput | UnstableShiftWhereUniqueInput[]
    delete?: UnstableShiftWhereUniqueInput | UnstableShiftWhereUniqueInput[]
    connect?: UnstableShiftWhereUniqueInput | UnstableShiftWhereUniqueInput[]
    update?: UnstableShiftUpdateWithWhereUniqueWithoutShopInput | UnstableShiftUpdateWithWhereUniqueWithoutShopInput[]
    updateMany?: UnstableShiftUpdateManyWithWhereWithoutShopInput | UnstableShiftUpdateManyWithWhereWithoutShopInput[]
    deleteMany?: UnstableShiftScalarWhereInput | UnstableShiftScalarWhereInput[]
  }

  export type RequestUncheckedUpdateManyWithoutShopNestedInput = {
    create?: XOR<RequestCreateWithoutShopInput, RequestUncheckedCreateWithoutShopInput> | RequestCreateWithoutShopInput[] | RequestUncheckedCreateWithoutShopInput[]
    connectOrCreate?: RequestCreateOrConnectWithoutShopInput | RequestCreateOrConnectWithoutShopInput[]
    upsert?: RequestUpsertWithWhereUniqueWithoutShopInput | RequestUpsertWithWhereUniqueWithoutShopInput[]
    createMany?: RequestCreateManyShopInputEnvelope
    set?: RequestWhereUniqueInput | RequestWhereUniqueInput[]
    disconnect?: RequestWhereUniqueInput | RequestWhereUniqueInput[]
    delete?: RequestWhereUniqueInput | RequestWhereUniqueInput[]
    connect?: RequestWhereUniqueInput | RequestWhereUniqueInput[]
    update?: RequestUpdateWithWhereUniqueWithoutShopInput | RequestUpdateWithWhereUniqueWithoutShopInput[]
    updateMany?: RequestUpdateManyWithWhereWithoutShopInput | RequestUpdateManyWithWhereWithoutShopInput[]
    deleteMany?: RequestScalarWhereInput | RequestScalarWhereInput[]
  }

  export type TimeCardUncheckedUpdateManyWithoutShopNestedInput = {
    create?: XOR<TimeCardCreateWithoutShopInput, TimeCardUncheckedCreateWithoutShopInput> | TimeCardCreateWithoutShopInput[] | TimeCardUncheckedCreateWithoutShopInput[]
    connectOrCreate?: TimeCardCreateOrConnectWithoutShopInput | TimeCardCreateOrConnectWithoutShopInput[]
    upsert?: TimeCardUpsertWithWhereUniqueWithoutShopInput | TimeCardUpsertWithWhereUniqueWithoutShopInput[]
    createMany?: TimeCardCreateManyShopInputEnvelope
    set?: TimeCardWhereUniqueInput | TimeCardWhereUniqueInput[]
    disconnect?: TimeCardWhereUniqueInput | TimeCardWhereUniqueInput[]
    delete?: TimeCardWhereUniqueInput | TimeCardWhereUniqueInput[]
    connect?: TimeCardWhereUniqueInput | TimeCardWhereUniqueInput[]
    update?: TimeCardUpdateWithWhereUniqueWithoutShopInput | TimeCardUpdateWithWhereUniqueWithoutShopInput[]
    updateMany?: TimeCardUpdateManyWithWhereWithoutShopInput | TimeCardUpdateManyWithWhereWithoutShopInput[]
    deleteMany?: TimeCardScalarWhereInput | TimeCardScalarWhereInput[]
  }

  export type TemporaryClosedUncheckedUpdateManyWithoutShopNestedInput = {
    create?: XOR<TemporaryClosedCreateWithoutShopInput, TemporaryClosedUncheckedCreateWithoutShopInput> | TemporaryClosedCreateWithoutShopInput[] | TemporaryClosedUncheckedCreateWithoutShopInput[]
    connectOrCreate?: TemporaryClosedCreateOrConnectWithoutShopInput | TemporaryClosedCreateOrConnectWithoutShopInput[]
    upsert?: TemporaryClosedUpsertWithWhereUniqueWithoutShopInput | TemporaryClosedUpsertWithWhereUniqueWithoutShopInput[]
    createMany?: TemporaryClosedCreateManyShopInputEnvelope
    set?: TemporaryClosedWhereUniqueInput | TemporaryClosedWhereUniqueInput[]
    disconnect?: TemporaryClosedWhereUniqueInput | TemporaryClosedWhereUniqueInput[]
    delete?: TemporaryClosedWhereUniqueInput | TemporaryClosedWhereUniqueInput[]
    connect?: TemporaryClosedWhereUniqueInput | TemporaryClosedWhereUniqueInput[]
    update?: TemporaryClosedUpdateWithWhereUniqueWithoutShopInput | TemporaryClosedUpdateWithWhereUniqueWithoutShopInput[]
    updateMany?: TemporaryClosedUpdateManyWithWhereWithoutShopInput | TemporaryClosedUpdateManyWithWhereWithoutShopInput[]
    deleteMany?: TemporaryClosedScalarWhereInput | TemporaryClosedScalarWhereInput[]
  }

  export type AnnounceUncheckedUpdateManyWithoutShopNestedInput = {
    create?: XOR<AnnounceCreateWithoutShopInput, AnnounceUncheckedCreateWithoutShopInput> | AnnounceCreateWithoutShopInput[] | AnnounceUncheckedCreateWithoutShopInput[]
    connectOrCreate?: AnnounceCreateOrConnectWithoutShopInput | AnnounceCreateOrConnectWithoutShopInput[]
    upsert?: AnnounceUpsertWithWhereUniqueWithoutShopInput | AnnounceUpsertWithWhereUniqueWithoutShopInput[]
    createMany?: AnnounceCreateManyShopInputEnvelope
    set?: AnnounceWhereUniqueInput | AnnounceWhereUniqueInput[]
    disconnect?: AnnounceWhereUniqueInput | AnnounceWhereUniqueInput[]
    delete?: AnnounceWhereUniqueInput | AnnounceWhereUniqueInput[]
    connect?: AnnounceWhereUniqueInput | AnnounceWhereUniqueInput[]
    update?: AnnounceUpdateWithWhereUniqueWithoutShopInput | AnnounceUpdateWithWhereUniqueWithoutShopInput[]
    updateMany?: AnnounceUpdateManyWithWhereWithoutShopInput | AnnounceUpdateManyWithWhereWithoutShopInput[]
    deleteMany?: AnnounceScalarWhereInput | AnnounceScalarWhereInput[]
  }

  export type InvitationUncheckedUpdateManyWithoutInvitedByNestedInput = {
    create?: XOR<InvitationCreateWithoutInvitedByInput, InvitationUncheckedCreateWithoutInvitedByInput> | InvitationCreateWithoutInvitedByInput[] | InvitationUncheckedCreateWithoutInvitedByInput[]
    connectOrCreate?: InvitationCreateOrConnectWithoutInvitedByInput | InvitationCreateOrConnectWithoutInvitedByInput[]
    upsert?: InvitationUpsertWithWhereUniqueWithoutInvitedByInput | InvitationUpsertWithWhereUniqueWithoutInvitedByInput[]
    createMany?: InvitationCreateManyInvitedByInputEnvelope
    set?: InvitationWhereUniqueInput | InvitationWhereUniqueInput[]
    disconnect?: InvitationWhereUniqueInput | InvitationWhereUniqueInput[]
    delete?: InvitationWhereUniqueInput | InvitationWhereUniqueInput[]
    connect?: InvitationWhereUniqueInput | InvitationWhereUniqueInput[]
    update?: InvitationUpdateWithWhereUniqueWithoutInvitedByInput | InvitationUpdateWithWhereUniqueWithoutInvitedByInput[]
    updateMany?: InvitationUpdateManyWithWhereWithoutInvitedByInput | InvitationUpdateManyWithWhereWithoutInvitedByInput[]
    deleteMany?: InvitationScalarWhereInput | InvitationScalarWhereInput[]
  }

  export type ShopUserBelongingCreateNestedManyWithoutUserInput = {
    create?: XOR<ShopUserBelongingCreateWithoutUserInput, ShopUserBelongingUncheckedCreateWithoutUserInput> | ShopUserBelongingCreateWithoutUserInput[] | ShopUserBelongingUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ShopUserBelongingCreateOrConnectWithoutUserInput | ShopUserBelongingCreateOrConnectWithoutUserInput[]
    createMany?: ShopUserBelongingCreateManyUserInputEnvelope
    connect?: ShopUserBelongingWhereUniqueInput | ShopUserBelongingWhereUniqueInput[]
  }

  export type StableShiftCreateNestedManyWithoutUserInput = {
    create?: XOR<StableShiftCreateWithoutUserInput, StableShiftUncheckedCreateWithoutUserInput> | StableShiftCreateWithoutUserInput[] | StableShiftUncheckedCreateWithoutUserInput[]
    connectOrCreate?: StableShiftCreateOrConnectWithoutUserInput | StableShiftCreateOrConnectWithoutUserInput[]
    createMany?: StableShiftCreateManyUserInputEnvelope
    connect?: StableShiftWhereUniqueInput | StableShiftWhereUniqueInput[]
  }

  export type UnstableShiftCreateNestedManyWithoutUserInput = {
    create?: XOR<UnstableShiftCreateWithoutUserInput, UnstableShiftUncheckedCreateWithoutUserInput> | UnstableShiftCreateWithoutUserInput[] | UnstableShiftUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UnstableShiftCreateOrConnectWithoutUserInput | UnstableShiftCreateOrConnectWithoutUserInput[]
    createMany?: UnstableShiftCreateManyUserInputEnvelope
    connect?: UnstableShiftWhereUniqueInput | UnstableShiftWhereUniqueInput[]
  }

  export type RequestCreateNestedManyWithoutUserInput = {
    create?: XOR<RequestCreateWithoutUserInput, RequestUncheckedCreateWithoutUserInput> | RequestCreateWithoutUserInput[] | RequestUncheckedCreateWithoutUserInput[]
    connectOrCreate?: RequestCreateOrConnectWithoutUserInput | RequestCreateOrConnectWithoutUserInput[]
    createMany?: RequestCreateManyUserInputEnvelope
    connect?: RequestWhereUniqueInput | RequestWhereUniqueInput[]
  }

  export type TimeCardCreateNestedManyWithoutUserInput = {
    create?: XOR<TimeCardCreateWithoutUserInput, TimeCardUncheckedCreateWithoutUserInput> | TimeCardCreateWithoutUserInput[] | TimeCardUncheckedCreateWithoutUserInput[]
    connectOrCreate?: TimeCardCreateOrConnectWithoutUserInput | TimeCardCreateOrConnectWithoutUserInput[]
    createMany?: TimeCardCreateManyUserInputEnvelope
    connect?: TimeCardWhereUniqueInput | TimeCardWhereUniqueInput[]
  }

  export type InvitationCreateNestedManyWithoutTargetUserInput = {
    create?: XOR<InvitationCreateWithoutTargetUserInput, InvitationUncheckedCreateWithoutTargetUserInput> | InvitationCreateWithoutTargetUserInput[] | InvitationUncheckedCreateWithoutTargetUserInput[]
    connectOrCreate?: InvitationCreateOrConnectWithoutTargetUserInput | InvitationCreateOrConnectWithoutTargetUserInput[]
    createMany?: InvitationCreateManyTargetUserInputEnvelope
    connect?: InvitationWhereUniqueInput | InvitationWhereUniqueInput[]
  }

  export type ShopUserBelongingUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<ShopUserBelongingCreateWithoutUserInput, ShopUserBelongingUncheckedCreateWithoutUserInput> | ShopUserBelongingCreateWithoutUserInput[] | ShopUserBelongingUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ShopUserBelongingCreateOrConnectWithoutUserInput | ShopUserBelongingCreateOrConnectWithoutUserInput[]
    createMany?: ShopUserBelongingCreateManyUserInputEnvelope
    connect?: ShopUserBelongingWhereUniqueInput | ShopUserBelongingWhereUniqueInput[]
  }

  export type StableShiftUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<StableShiftCreateWithoutUserInput, StableShiftUncheckedCreateWithoutUserInput> | StableShiftCreateWithoutUserInput[] | StableShiftUncheckedCreateWithoutUserInput[]
    connectOrCreate?: StableShiftCreateOrConnectWithoutUserInput | StableShiftCreateOrConnectWithoutUserInput[]
    createMany?: StableShiftCreateManyUserInputEnvelope
    connect?: StableShiftWhereUniqueInput | StableShiftWhereUniqueInput[]
  }

  export type UnstableShiftUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<UnstableShiftCreateWithoutUserInput, UnstableShiftUncheckedCreateWithoutUserInput> | UnstableShiftCreateWithoutUserInput[] | UnstableShiftUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UnstableShiftCreateOrConnectWithoutUserInput | UnstableShiftCreateOrConnectWithoutUserInput[]
    createMany?: UnstableShiftCreateManyUserInputEnvelope
    connect?: UnstableShiftWhereUniqueInput | UnstableShiftWhereUniqueInput[]
  }

  export type RequestUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<RequestCreateWithoutUserInput, RequestUncheckedCreateWithoutUserInput> | RequestCreateWithoutUserInput[] | RequestUncheckedCreateWithoutUserInput[]
    connectOrCreate?: RequestCreateOrConnectWithoutUserInput | RequestCreateOrConnectWithoutUserInput[]
    createMany?: RequestCreateManyUserInputEnvelope
    connect?: RequestWhereUniqueInput | RequestWhereUniqueInput[]
  }

  export type TimeCardUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<TimeCardCreateWithoutUserInput, TimeCardUncheckedCreateWithoutUserInput> | TimeCardCreateWithoutUserInput[] | TimeCardUncheckedCreateWithoutUserInput[]
    connectOrCreate?: TimeCardCreateOrConnectWithoutUserInput | TimeCardCreateOrConnectWithoutUserInput[]
    createMany?: TimeCardCreateManyUserInputEnvelope
    connect?: TimeCardWhereUniqueInput | TimeCardWhereUniqueInput[]
  }

  export type InvitationUncheckedCreateNestedManyWithoutTargetUserInput = {
    create?: XOR<InvitationCreateWithoutTargetUserInput, InvitationUncheckedCreateWithoutTargetUserInput> | InvitationCreateWithoutTargetUserInput[] | InvitationUncheckedCreateWithoutTargetUserInput[]
    connectOrCreate?: InvitationCreateOrConnectWithoutTargetUserInput | InvitationCreateOrConnectWithoutTargetUserInput[]
    createMany?: InvitationCreateManyTargetUserInputEnvelope
    connect?: InvitationWhereUniqueInput | InvitationWhereUniqueInput[]
  }

  export type ShopUserBelongingUpdateManyWithoutUserNestedInput = {
    create?: XOR<ShopUserBelongingCreateWithoutUserInput, ShopUserBelongingUncheckedCreateWithoutUserInput> | ShopUserBelongingCreateWithoutUserInput[] | ShopUserBelongingUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ShopUserBelongingCreateOrConnectWithoutUserInput | ShopUserBelongingCreateOrConnectWithoutUserInput[]
    upsert?: ShopUserBelongingUpsertWithWhereUniqueWithoutUserInput | ShopUserBelongingUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: ShopUserBelongingCreateManyUserInputEnvelope
    set?: ShopUserBelongingWhereUniqueInput | ShopUserBelongingWhereUniqueInput[]
    disconnect?: ShopUserBelongingWhereUniqueInput | ShopUserBelongingWhereUniqueInput[]
    delete?: ShopUserBelongingWhereUniqueInput | ShopUserBelongingWhereUniqueInput[]
    connect?: ShopUserBelongingWhereUniqueInput | ShopUserBelongingWhereUniqueInput[]
    update?: ShopUserBelongingUpdateWithWhereUniqueWithoutUserInput | ShopUserBelongingUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: ShopUserBelongingUpdateManyWithWhereWithoutUserInput | ShopUserBelongingUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: ShopUserBelongingScalarWhereInput | ShopUserBelongingScalarWhereInput[]
  }

  export type StableShiftUpdateManyWithoutUserNestedInput = {
    create?: XOR<StableShiftCreateWithoutUserInput, StableShiftUncheckedCreateWithoutUserInput> | StableShiftCreateWithoutUserInput[] | StableShiftUncheckedCreateWithoutUserInput[]
    connectOrCreate?: StableShiftCreateOrConnectWithoutUserInput | StableShiftCreateOrConnectWithoutUserInput[]
    upsert?: StableShiftUpsertWithWhereUniqueWithoutUserInput | StableShiftUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: StableShiftCreateManyUserInputEnvelope
    set?: StableShiftWhereUniqueInput | StableShiftWhereUniqueInput[]
    disconnect?: StableShiftWhereUniqueInput | StableShiftWhereUniqueInput[]
    delete?: StableShiftWhereUniqueInput | StableShiftWhereUniqueInput[]
    connect?: StableShiftWhereUniqueInput | StableShiftWhereUniqueInput[]
    update?: StableShiftUpdateWithWhereUniqueWithoutUserInput | StableShiftUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: StableShiftUpdateManyWithWhereWithoutUserInput | StableShiftUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: StableShiftScalarWhereInput | StableShiftScalarWhereInput[]
  }

  export type UnstableShiftUpdateManyWithoutUserNestedInput = {
    create?: XOR<UnstableShiftCreateWithoutUserInput, UnstableShiftUncheckedCreateWithoutUserInput> | UnstableShiftCreateWithoutUserInput[] | UnstableShiftUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UnstableShiftCreateOrConnectWithoutUserInput | UnstableShiftCreateOrConnectWithoutUserInput[]
    upsert?: UnstableShiftUpsertWithWhereUniqueWithoutUserInput | UnstableShiftUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: UnstableShiftCreateManyUserInputEnvelope
    set?: UnstableShiftWhereUniqueInput | UnstableShiftWhereUniqueInput[]
    disconnect?: UnstableShiftWhereUniqueInput | UnstableShiftWhereUniqueInput[]
    delete?: UnstableShiftWhereUniqueInput | UnstableShiftWhereUniqueInput[]
    connect?: UnstableShiftWhereUniqueInput | UnstableShiftWhereUniqueInput[]
    update?: UnstableShiftUpdateWithWhereUniqueWithoutUserInput | UnstableShiftUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: UnstableShiftUpdateManyWithWhereWithoutUserInput | UnstableShiftUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: UnstableShiftScalarWhereInput | UnstableShiftScalarWhereInput[]
  }

  export type RequestUpdateManyWithoutUserNestedInput = {
    create?: XOR<RequestCreateWithoutUserInput, RequestUncheckedCreateWithoutUserInput> | RequestCreateWithoutUserInput[] | RequestUncheckedCreateWithoutUserInput[]
    connectOrCreate?: RequestCreateOrConnectWithoutUserInput | RequestCreateOrConnectWithoutUserInput[]
    upsert?: RequestUpsertWithWhereUniqueWithoutUserInput | RequestUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: RequestCreateManyUserInputEnvelope
    set?: RequestWhereUniqueInput | RequestWhereUniqueInput[]
    disconnect?: RequestWhereUniqueInput | RequestWhereUniqueInput[]
    delete?: RequestWhereUniqueInput | RequestWhereUniqueInput[]
    connect?: RequestWhereUniqueInput | RequestWhereUniqueInput[]
    update?: RequestUpdateWithWhereUniqueWithoutUserInput | RequestUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: RequestUpdateManyWithWhereWithoutUserInput | RequestUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: RequestScalarWhereInput | RequestScalarWhereInput[]
  }

  export type TimeCardUpdateManyWithoutUserNestedInput = {
    create?: XOR<TimeCardCreateWithoutUserInput, TimeCardUncheckedCreateWithoutUserInput> | TimeCardCreateWithoutUserInput[] | TimeCardUncheckedCreateWithoutUserInput[]
    connectOrCreate?: TimeCardCreateOrConnectWithoutUserInput | TimeCardCreateOrConnectWithoutUserInput[]
    upsert?: TimeCardUpsertWithWhereUniqueWithoutUserInput | TimeCardUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: TimeCardCreateManyUserInputEnvelope
    set?: TimeCardWhereUniqueInput | TimeCardWhereUniqueInput[]
    disconnect?: TimeCardWhereUniqueInput | TimeCardWhereUniqueInput[]
    delete?: TimeCardWhereUniqueInput | TimeCardWhereUniqueInput[]
    connect?: TimeCardWhereUniqueInput | TimeCardWhereUniqueInput[]
    update?: TimeCardUpdateWithWhereUniqueWithoutUserInput | TimeCardUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: TimeCardUpdateManyWithWhereWithoutUserInput | TimeCardUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: TimeCardScalarWhereInput | TimeCardScalarWhereInput[]
  }

  export type InvitationUpdateManyWithoutTargetUserNestedInput = {
    create?: XOR<InvitationCreateWithoutTargetUserInput, InvitationUncheckedCreateWithoutTargetUserInput> | InvitationCreateWithoutTargetUserInput[] | InvitationUncheckedCreateWithoutTargetUserInput[]
    connectOrCreate?: InvitationCreateOrConnectWithoutTargetUserInput | InvitationCreateOrConnectWithoutTargetUserInput[]
    upsert?: InvitationUpsertWithWhereUniqueWithoutTargetUserInput | InvitationUpsertWithWhereUniqueWithoutTargetUserInput[]
    createMany?: InvitationCreateManyTargetUserInputEnvelope
    set?: InvitationWhereUniqueInput | InvitationWhereUniqueInput[]
    disconnect?: InvitationWhereUniqueInput | InvitationWhereUniqueInput[]
    delete?: InvitationWhereUniqueInput | InvitationWhereUniqueInput[]
    connect?: InvitationWhereUniqueInput | InvitationWhereUniqueInput[]
    update?: InvitationUpdateWithWhereUniqueWithoutTargetUserInput | InvitationUpdateWithWhereUniqueWithoutTargetUserInput[]
    updateMany?: InvitationUpdateManyWithWhereWithoutTargetUserInput | InvitationUpdateManyWithWhereWithoutTargetUserInput[]
    deleteMany?: InvitationScalarWhereInput | InvitationScalarWhereInput[]
  }

  export type ShopUserBelongingUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<ShopUserBelongingCreateWithoutUserInput, ShopUserBelongingUncheckedCreateWithoutUserInput> | ShopUserBelongingCreateWithoutUserInput[] | ShopUserBelongingUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ShopUserBelongingCreateOrConnectWithoutUserInput | ShopUserBelongingCreateOrConnectWithoutUserInput[]
    upsert?: ShopUserBelongingUpsertWithWhereUniqueWithoutUserInput | ShopUserBelongingUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: ShopUserBelongingCreateManyUserInputEnvelope
    set?: ShopUserBelongingWhereUniqueInput | ShopUserBelongingWhereUniqueInput[]
    disconnect?: ShopUserBelongingWhereUniqueInput | ShopUserBelongingWhereUniqueInput[]
    delete?: ShopUserBelongingWhereUniqueInput | ShopUserBelongingWhereUniqueInput[]
    connect?: ShopUserBelongingWhereUniqueInput | ShopUserBelongingWhereUniqueInput[]
    update?: ShopUserBelongingUpdateWithWhereUniqueWithoutUserInput | ShopUserBelongingUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: ShopUserBelongingUpdateManyWithWhereWithoutUserInput | ShopUserBelongingUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: ShopUserBelongingScalarWhereInput | ShopUserBelongingScalarWhereInput[]
  }

  export type StableShiftUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<StableShiftCreateWithoutUserInput, StableShiftUncheckedCreateWithoutUserInput> | StableShiftCreateWithoutUserInput[] | StableShiftUncheckedCreateWithoutUserInput[]
    connectOrCreate?: StableShiftCreateOrConnectWithoutUserInput | StableShiftCreateOrConnectWithoutUserInput[]
    upsert?: StableShiftUpsertWithWhereUniqueWithoutUserInput | StableShiftUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: StableShiftCreateManyUserInputEnvelope
    set?: StableShiftWhereUniqueInput | StableShiftWhereUniqueInput[]
    disconnect?: StableShiftWhereUniqueInput | StableShiftWhereUniqueInput[]
    delete?: StableShiftWhereUniqueInput | StableShiftWhereUniqueInput[]
    connect?: StableShiftWhereUniqueInput | StableShiftWhereUniqueInput[]
    update?: StableShiftUpdateWithWhereUniqueWithoutUserInput | StableShiftUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: StableShiftUpdateManyWithWhereWithoutUserInput | StableShiftUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: StableShiftScalarWhereInput | StableShiftScalarWhereInput[]
  }

  export type UnstableShiftUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<UnstableShiftCreateWithoutUserInput, UnstableShiftUncheckedCreateWithoutUserInput> | UnstableShiftCreateWithoutUserInput[] | UnstableShiftUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UnstableShiftCreateOrConnectWithoutUserInput | UnstableShiftCreateOrConnectWithoutUserInput[]
    upsert?: UnstableShiftUpsertWithWhereUniqueWithoutUserInput | UnstableShiftUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: UnstableShiftCreateManyUserInputEnvelope
    set?: UnstableShiftWhereUniqueInput | UnstableShiftWhereUniqueInput[]
    disconnect?: UnstableShiftWhereUniqueInput | UnstableShiftWhereUniqueInput[]
    delete?: UnstableShiftWhereUniqueInput | UnstableShiftWhereUniqueInput[]
    connect?: UnstableShiftWhereUniqueInput | UnstableShiftWhereUniqueInput[]
    update?: UnstableShiftUpdateWithWhereUniqueWithoutUserInput | UnstableShiftUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: UnstableShiftUpdateManyWithWhereWithoutUserInput | UnstableShiftUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: UnstableShiftScalarWhereInput | UnstableShiftScalarWhereInput[]
  }

  export type RequestUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<RequestCreateWithoutUserInput, RequestUncheckedCreateWithoutUserInput> | RequestCreateWithoutUserInput[] | RequestUncheckedCreateWithoutUserInput[]
    connectOrCreate?: RequestCreateOrConnectWithoutUserInput | RequestCreateOrConnectWithoutUserInput[]
    upsert?: RequestUpsertWithWhereUniqueWithoutUserInput | RequestUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: RequestCreateManyUserInputEnvelope
    set?: RequestWhereUniqueInput | RequestWhereUniqueInput[]
    disconnect?: RequestWhereUniqueInput | RequestWhereUniqueInput[]
    delete?: RequestWhereUniqueInput | RequestWhereUniqueInput[]
    connect?: RequestWhereUniqueInput | RequestWhereUniqueInput[]
    update?: RequestUpdateWithWhereUniqueWithoutUserInput | RequestUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: RequestUpdateManyWithWhereWithoutUserInput | RequestUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: RequestScalarWhereInput | RequestScalarWhereInput[]
  }

  export type TimeCardUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<TimeCardCreateWithoutUserInput, TimeCardUncheckedCreateWithoutUserInput> | TimeCardCreateWithoutUserInput[] | TimeCardUncheckedCreateWithoutUserInput[]
    connectOrCreate?: TimeCardCreateOrConnectWithoutUserInput | TimeCardCreateOrConnectWithoutUserInput[]
    upsert?: TimeCardUpsertWithWhereUniqueWithoutUserInput | TimeCardUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: TimeCardCreateManyUserInputEnvelope
    set?: TimeCardWhereUniqueInput | TimeCardWhereUniqueInput[]
    disconnect?: TimeCardWhereUniqueInput | TimeCardWhereUniqueInput[]
    delete?: TimeCardWhereUniqueInput | TimeCardWhereUniqueInput[]
    connect?: TimeCardWhereUniqueInput | TimeCardWhereUniqueInput[]
    update?: TimeCardUpdateWithWhereUniqueWithoutUserInput | TimeCardUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: TimeCardUpdateManyWithWhereWithoutUserInput | TimeCardUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: TimeCardScalarWhereInput | TimeCardScalarWhereInput[]
  }

  export type InvitationUncheckedUpdateManyWithoutTargetUserNestedInput = {
    create?: XOR<InvitationCreateWithoutTargetUserInput, InvitationUncheckedCreateWithoutTargetUserInput> | InvitationCreateWithoutTargetUserInput[] | InvitationUncheckedCreateWithoutTargetUserInput[]
    connectOrCreate?: InvitationCreateOrConnectWithoutTargetUserInput | InvitationCreateOrConnectWithoutTargetUserInput[]
    upsert?: InvitationUpsertWithWhereUniqueWithoutTargetUserInput | InvitationUpsertWithWhereUniqueWithoutTargetUserInput[]
    createMany?: InvitationCreateManyTargetUserInputEnvelope
    set?: InvitationWhereUniqueInput | InvitationWhereUniqueInput[]
    disconnect?: InvitationWhereUniqueInput | InvitationWhereUniqueInput[]
    delete?: InvitationWhereUniqueInput | InvitationWhereUniqueInput[]
    connect?: InvitationWhereUniqueInput | InvitationWhereUniqueInput[]
    update?: InvitationUpdateWithWhereUniqueWithoutTargetUserInput | InvitationUpdateWithWhereUniqueWithoutTargetUserInput[]
    updateMany?: InvitationUpdateManyWithWhereWithoutTargetUserInput | InvitationUpdateManyWithWhereWithoutTargetUserInput[]
    deleteMany?: InvitationScalarWhereInput | InvitationScalarWhereInput[]
  }

  export type ShopCreateNestedOneWithoutInvitationInput = {
    create?: XOR<ShopCreateWithoutInvitationInput, ShopUncheckedCreateWithoutInvitationInput>
    connectOrCreate?: ShopCreateOrConnectWithoutInvitationInput
    connect?: ShopWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutInvitationInput = {
    create?: XOR<UserCreateWithoutInvitationInput, UserUncheckedCreateWithoutInvitationInput>
    connectOrCreate?: UserCreateOrConnectWithoutInvitationInput
    connect?: UserWhereUniqueInput
  }

  export type ShopUpdateOneRequiredWithoutInvitationNestedInput = {
    create?: XOR<ShopCreateWithoutInvitationInput, ShopUncheckedCreateWithoutInvitationInput>
    connectOrCreate?: ShopCreateOrConnectWithoutInvitationInput
    upsert?: ShopUpsertWithoutInvitationInput
    connect?: ShopWhereUniqueInput
    update?: XOR<XOR<ShopUpdateToOneWithWhereWithoutInvitationInput, ShopUpdateWithoutInvitationInput>, ShopUncheckedUpdateWithoutInvitationInput>
  }

  export type UserUpdateOneRequiredWithoutInvitationNestedInput = {
    create?: XOR<UserCreateWithoutInvitationInput, UserUncheckedCreateWithoutInvitationInput>
    connectOrCreate?: UserCreateOrConnectWithoutInvitationInput
    upsert?: UserUpsertWithoutInvitationInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutInvitationInput, UserUpdateWithoutInvitationInput>, UserUncheckedUpdateWithoutInvitationInput>
  }

  export type ShopCreateNestedOneWithoutOperationInput = {
    create?: XOR<ShopCreateWithoutOperationInput, ShopUncheckedCreateWithoutOperationInput>
    connectOrCreate?: ShopCreateOrConnectWithoutOperationInput
    connect?: ShopWhereUniqueInput
  }

  export type ShopUpdateOneRequiredWithoutOperationNestedInput = {
    create?: XOR<ShopCreateWithoutOperationInput, ShopUncheckedCreateWithoutOperationInput>
    connectOrCreate?: ShopCreateOrConnectWithoutOperationInput
    upsert?: ShopUpsertWithoutOperationInput
    connect?: ShopWhereUniqueInput
    update?: XOR<XOR<ShopUpdateToOneWithWhereWithoutOperationInput, ShopUpdateWithoutOperationInput>, ShopUncheckedUpdateWithoutOperationInput>
  }

  export type ShopCreateNestedOneWithoutStableShiftInput = {
    create?: XOR<ShopCreateWithoutStableShiftInput, ShopUncheckedCreateWithoutStableShiftInput>
    connectOrCreate?: ShopCreateOrConnectWithoutStableShiftInput
    connect?: ShopWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutStableShiftInput = {
    create?: XOR<UserCreateWithoutStableShiftInput, UserUncheckedCreateWithoutStableShiftInput>
    connectOrCreate?: UserCreateOrConnectWithoutStableShiftInput
    connect?: UserWhereUniqueInput
  }

  export type ShopUpdateOneRequiredWithoutStableShiftNestedInput = {
    create?: XOR<ShopCreateWithoutStableShiftInput, ShopUncheckedCreateWithoutStableShiftInput>
    connectOrCreate?: ShopCreateOrConnectWithoutStableShiftInput
    upsert?: ShopUpsertWithoutStableShiftInput
    connect?: ShopWhereUniqueInput
    update?: XOR<XOR<ShopUpdateToOneWithWhereWithoutStableShiftInput, ShopUpdateWithoutStableShiftInput>, ShopUncheckedUpdateWithoutStableShiftInput>
  }

  export type UserUpdateOneRequiredWithoutStableShiftNestedInput = {
    create?: XOR<UserCreateWithoutStableShiftInput, UserUncheckedCreateWithoutStableShiftInput>
    connectOrCreate?: UserCreateOrConnectWithoutStableShiftInput
    upsert?: UserUpsertWithoutStableShiftInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutStableShiftInput, UserUpdateWithoutStableShiftInput>, UserUncheckedUpdateWithoutStableShiftInput>
  }

  export type ShopCreateNestedOneWithoutUnstableShiftInput = {
    create?: XOR<ShopCreateWithoutUnstableShiftInput, ShopUncheckedCreateWithoutUnstableShiftInput>
    connectOrCreate?: ShopCreateOrConnectWithoutUnstableShiftInput
    connect?: ShopWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutUnstableShiftInput = {
    create?: XOR<UserCreateWithoutUnstableShiftInput, UserUncheckedCreateWithoutUnstableShiftInput>
    connectOrCreate?: UserCreateOrConnectWithoutUnstableShiftInput
    connect?: UserWhereUniqueInput
  }

  export type ShopUpdateOneRequiredWithoutUnstableShiftNestedInput = {
    create?: XOR<ShopCreateWithoutUnstableShiftInput, ShopUncheckedCreateWithoutUnstableShiftInput>
    connectOrCreate?: ShopCreateOrConnectWithoutUnstableShiftInput
    upsert?: ShopUpsertWithoutUnstableShiftInput
    connect?: ShopWhereUniqueInput
    update?: XOR<XOR<ShopUpdateToOneWithWhereWithoutUnstableShiftInput, ShopUpdateWithoutUnstableShiftInput>, ShopUncheckedUpdateWithoutUnstableShiftInput>
  }

  export type UserUpdateOneRequiredWithoutUnstableShiftNestedInput = {
    create?: XOR<UserCreateWithoutUnstableShiftInput, UserUncheckedCreateWithoutUnstableShiftInput>
    connectOrCreate?: UserCreateOrConnectWithoutUnstableShiftInput
    upsert?: UserUpsertWithoutUnstableShiftInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutUnstableShiftInput, UserUpdateWithoutUnstableShiftInput>, UserUncheckedUpdateWithoutUnstableShiftInput>
  }

  export type ShopCreateNestedOneWithoutRequestInput = {
    create?: XOR<ShopCreateWithoutRequestInput, ShopUncheckedCreateWithoutRequestInput>
    connectOrCreate?: ShopCreateOrConnectWithoutRequestInput
    connect?: ShopWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutRequestInput = {
    create?: XOR<UserCreateWithoutRequestInput, UserUncheckedCreateWithoutRequestInput>
    connectOrCreate?: UserCreateOrConnectWithoutRequestInput
    connect?: UserWhereUniqueInput
  }

  export type ShopUpdateOneRequiredWithoutRequestNestedInput = {
    create?: XOR<ShopCreateWithoutRequestInput, ShopUncheckedCreateWithoutRequestInput>
    connectOrCreate?: ShopCreateOrConnectWithoutRequestInput
    upsert?: ShopUpsertWithoutRequestInput
    connect?: ShopWhereUniqueInput
    update?: XOR<XOR<ShopUpdateToOneWithWhereWithoutRequestInput, ShopUpdateWithoutRequestInput>, ShopUncheckedUpdateWithoutRequestInput>
  }

  export type UserUpdateOneRequiredWithoutRequestNestedInput = {
    create?: XOR<UserCreateWithoutRequestInput, UserUncheckedCreateWithoutRequestInput>
    connectOrCreate?: UserCreateOrConnectWithoutRequestInput
    upsert?: UserUpsertWithoutRequestInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutRequestInput, UserUpdateWithoutRequestInput>, UserUncheckedUpdateWithoutRequestInput>
  }

  export type ShopCreateNestedOneWithoutTimeCardInput = {
    create?: XOR<ShopCreateWithoutTimeCardInput, ShopUncheckedCreateWithoutTimeCardInput>
    connectOrCreate?: ShopCreateOrConnectWithoutTimeCardInput
    connect?: ShopWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutTimeCardInput = {
    create?: XOR<UserCreateWithoutTimeCardInput, UserUncheckedCreateWithoutTimeCardInput>
    connectOrCreate?: UserCreateOrConnectWithoutTimeCardInput
    connect?: UserWhereUniqueInput
  }

  export type ShopUpdateOneRequiredWithoutTimeCardNestedInput = {
    create?: XOR<ShopCreateWithoutTimeCardInput, ShopUncheckedCreateWithoutTimeCardInput>
    connectOrCreate?: ShopCreateOrConnectWithoutTimeCardInput
    upsert?: ShopUpsertWithoutTimeCardInput
    connect?: ShopWhereUniqueInput
    update?: XOR<XOR<ShopUpdateToOneWithWhereWithoutTimeCardInput, ShopUpdateWithoutTimeCardInput>, ShopUncheckedUpdateWithoutTimeCardInput>
  }

  export type UserUpdateOneRequiredWithoutTimeCardNestedInput = {
    create?: XOR<UserCreateWithoutTimeCardInput, UserUncheckedCreateWithoutTimeCardInput>
    connectOrCreate?: UserCreateOrConnectWithoutTimeCardInput
    upsert?: UserUpsertWithoutTimeCardInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutTimeCardInput, UserUpdateWithoutTimeCardInput>, UserUncheckedUpdateWithoutTimeCardInput>
  }

  export type OrganizationCreateNestedOneWithoutTemporaryClosedInput = {
    create?: XOR<OrganizationCreateWithoutTemporaryClosedInput, OrganizationUncheckedCreateWithoutTemporaryClosedInput>
    connectOrCreate?: OrganizationCreateOrConnectWithoutTemporaryClosedInput
    connect?: OrganizationWhereUniqueInput
  }

  export type ShopCreateNestedOneWithoutTemporaryClosedInput = {
    create?: XOR<ShopCreateWithoutTemporaryClosedInput, ShopUncheckedCreateWithoutTemporaryClosedInput>
    connectOrCreate?: ShopCreateOrConnectWithoutTemporaryClosedInput
    connect?: ShopWhereUniqueInput
  }

  export type OrganizationUpdateOneRequiredWithoutTemporaryClosedNestedInput = {
    create?: XOR<OrganizationCreateWithoutTemporaryClosedInput, OrganizationUncheckedCreateWithoutTemporaryClosedInput>
    connectOrCreate?: OrganizationCreateOrConnectWithoutTemporaryClosedInput
    upsert?: OrganizationUpsertWithoutTemporaryClosedInput
    connect?: OrganizationWhereUniqueInput
    update?: XOR<XOR<OrganizationUpdateToOneWithWhereWithoutTemporaryClosedInput, OrganizationUpdateWithoutTemporaryClosedInput>, OrganizationUncheckedUpdateWithoutTemporaryClosedInput>
  }

  export type ShopUpdateOneRequiredWithoutTemporaryClosedNestedInput = {
    create?: XOR<ShopCreateWithoutTemporaryClosedInput, ShopUncheckedCreateWithoutTemporaryClosedInput>
    connectOrCreate?: ShopCreateOrConnectWithoutTemporaryClosedInput
    upsert?: ShopUpsertWithoutTemporaryClosedInput
    connect?: ShopWhereUniqueInput
    update?: XOR<XOR<ShopUpdateToOneWithWhereWithoutTemporaryClosedInput, ShopUpdateWithoutTemporaryClosedInput>, ShopUncheckedUpdateWithoutTemporaryClosedInput>
  }

  export type OrganizationCreateNestedOneWithoutAnnounceInput = {
    create?: XOR<OrganizationCreateWithoutAnnounceInput, OrganizationUncheckedCreateWithoutAnnounceInput>
    connectOrCreate?: OrganizationCreateOrConnectWithoutAnnounceInput
    connect?: OrganizationWhereUniqueInput
  }

  export type ShopCreateNestedOneWithoutAnnounceInput = {
    create?: XOR<ShopCreateWithoutAnnounceInput, ShopUncheckedCreateWithoutAnnounceInput>
    connectOrCreate?: ShopCreateOrConnectWithoutAnnounceInput
    connect?: ShopWhereUniqueInput
  }

  export type OrganizationUpdateOneRequiredWithoutAnnounceNestedInput = {
    create?: XOR<OrganizationCreateWithoutAnnounceInput, OrganizationUncheckedCreateWithoutAnnounceInput>
    connectOrCreate?: OrganizationCreateOrConnectWithoutAnnounceInput
    upsert?: OrganizationUpsertWithoutAnnounceInput
    connect?: OrganizationWhereUniqueInput
    update?: XOR<XOR<OrganizationUpdateToOneWithWhereWithoutAnnounceInput, OrganizationUpdateWithoutAnnounceInput>, OrganizationUncheckedUpdateWithoutAnnounceInput>
  }

  export type ShopUpdateOneRequiredWithoutAnnounceNestedInput = {
    create?: XOR<ShopCreateWithoutAnnounceInput, ShopUncheckedCreateWithoutAnnounceInput>
    connectOrCreate?: ShopCreateOrConnectWithoutAnnounceInput
    upsert?: ShopUpsertWithoutAnnounceInput
    connect?: ShopWhereUniqueInput
    update?: XOR<XOR<ShopUpdateToOneWithWhereWithoutAnnounceInput, ShopUpdateWithoutAnnounceInput>, ShopUncheckedUpdateWithoutAnnounceInput>
  }

  export type NestedUuidFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedUuidFilter<$PrismaModel> | string
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedUuidWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedUuidWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type ShopCreateWithoutUserInput = {
    id?: string
    shopName: string
    openTime: string
    closeTime: string
    timeUnit: number
    submitFrequency: string
    avatar: string
    useTimeCard: boolean
    isDeleted?: boolean
    createdAt?: Date | string
    organization?: OrganizationShopBelongingCreateNestedManyWithoutShopInput
    operation?: OperationCreateNestedManyWithoutShopInput
    stableShift?: StableShiftCreateNestedManyWithoutShopInput
    unstableShift?: UnstableShiftCreateNestedManyWithoutShopInput
    request?: RequestCreateNestedManyWithoutShopInput
    timeCard?: TimeCardCreateNestedManyWithoutShopInput
    temporaryClosed?: TemporaryClosedCreateNestedManyWithoutShopInput
    announce?: AnnounceCreateNestedManyWithoutShopInput
    Invitation?: InvitationCreateNestedManyWithoutInvitedByInput
  }

  export type ShopUncheckedCreateWithoutUserInput = {
    id?: string
    shopName: string
    openTime: string
    closeTime: string
    timeUnit: number
    submitFrequency: string
    avatar: string
    useTimeCard: boolean
    isDeleted?: boolean
    createdAt?: Date | string
    organization?: OrganizationShopBelongingUncheckedCreateNestedManyWithoutShopInput
    operation?: OperationUncheckedCreateNestedManyWithoutShopInput
    stableShift?: StableShiftUncheckedCreateNestedManyWithoutShopInput
    unstableShift?: UnstableShiftUncheckedCreateNestedManyWithoutShopInput
    request?: RequestUncheckedCreateNestedManyWithoutShopInput
    timeCard?: TimeCardUncheckedCreateNestedManyWithoutShopInput
    temporaryClosed?: TemporaryClosedUncheckedCreateNestedManyWithoutShopInput
    announce?: AnnounceUncheckedCreateNestedManyWithoutShopInput
    Invitation?: InvitationUncheckedCreateNestedManyWithoutInvitedByInput
  }

  export type ShopCreateOrConnectWithoutUserInput = {
    where: ShopWhereUniqueInput
    create: XOR<ShopCreateWithoutUserInput, ShopUncheckedCreateWithoutUserInput>
  }

  export type UserCreateWithoutShopInput = {
    id?: string
    userId?: string
    userName: string
    avatar?: string
    isDeleted?: boolean
    createdAt?: Date | string
    stableShift?: StableShiftCreateNestedManyWithoutUserInput
    unstableShift?: UnstableShiftCreateNestedManyWithoutUserInput
    request?: RequestCreateNestedManyWithoutUserInput
    timeCard?: TimeCardCreateNestedManyWithoutUserInput
    Invitation?: InvitationCreateNestedManyWithoutTargetUserInput
  }

  export type UserUncheckedCreateWithoutShopInput = {
    id?: string
    userId?: string
    userName: string
    avatar?: string
    isDeleted?: boolean
    createdAt?: Date | string
    stableShift?: StableShiftUncheckedCreateNestedManyWithoutUserInput
    unstableShift?: UnstableShiftUncheckedCreateNestedManyWithoutUserInput
    request?: RequestUncheckedCreateNestedManyWithoutUserInput
    timeCard?: TimeCardUncheckedCreateNestedManyWithoutUserInput
    Invitation?: InvitationUncheckedCreateNestedManyWithoutTargetUserInput
  }

  export type UserCreateOrConnectWithoutShopInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutShopInput, UserUncheckedCreateWithoutShopInput>
  }

  export type ShopUpsertWithoutUserInput = {
    update: XOR<ShopUpdateWithoutUserInput, ShopUncheckedUpdateWithoutUserInput>
    create: XOR<ShopCreateWithoutUserInput, ShopUncheckedCreateWithoutUserInput>
    where?: ShopWhereInput
  }

  export type ShopUpdateToOneWithWhereWithoutUserInput = {
    where?: ShopWhereInput
    data: XOR<ShopUpdateWithoutUserInput, ShopUncheckedUpdateWithoutUserInput>
  }

  export type ShopUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    shopName?: StringFieldUpdateOperationsInput | string
    openTime?: StringFieldUpdateOperationsInput | string
    closeTime?: StringFieldUpdateOperationsInput | string
    timeUnit?: IntFieldUpdateOperationsInput | number
    submitFrequency?: StringFieldUpdateOperationsInput | string
    avatar?: StringFieldUpdateOperationsInput | string
    useTimeCard?: BoolFieldUpdateOperationsInput | boolean
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    organization?: OrganizationShopBelongingUpdateManyWithoutShopNestedInput
    operation?: OperationUpdateManyWithoutShopNestedInput
    stableShift?: StableShiftUpdateManyWithoutShopNestedInput
    unstableShift?: UnstableShiftUpdateManyWithoutShopNestedInput
    request?: RequestUpdateManyWithoutShopNestedInput
    timeCard?: TimeCardUpdateManyWithoutShopNestedInput
    temporaryClosed?: TemporaryClosedUpdateManyWithoutShopNestedInput
    announce?: AnnounceUpdateManyWithoutShopNestedInput
    Invitation?: InvitationUpdateManyWithoutInvitedByNestedInput
  }

  export type ShopUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    shopName?: StringFieldUpdateOperationsInput | string
    openTime?: StringFieldUpdateOperationsInput | string
    closeTime?: StringFieldUpdateOperationsInput | string
    timeUnit?: IntFieldUpdateOperationsInput | number
    submitFrequency?: StringFieldUpdateOperationsInput | string
    avatar?: StringFieldUpdateOperationsInput | string
    useTimeCard?: BoolFieldUpdateOperationsInput | boolean
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    organization?: OrganizationShopBelongingUncheckedUpdateManyWithoutShopNestedInput
    operation?: OperationUncheckedUpdateManyWithoutShopNestedInput
    stableShift?: StableShiftUncheckedUpdateManyWithoutShopNestedInput
    unstableShift?: UnstableShiftUncheckedUpdateManyWithoutShopNestedInput
    request?: RequestUncheckedUpdateManyWithoutShopNestedInput
    timeCard?: TimeCardUncheckedUpdateManyWithoutShopNestedInput
    temporaryClosed?: TemporaryClosedUncheckedUpdateManyWithoutShopNestedInput
    announce?: AnnounceUncheckedUpdateManyWithoutShopNestedInput
    Invitation?: InvitationUncheckedUpdateManyWithoutInvitedByNestedInput
  }

  export type UserUpsertWithoutShopInput = {
    update: XOR<UserUpdateWithoutShopInput, UserUncheckedUpdateWithoutShopInput>
    create: XOR<UserCreateWithoutShopInput, UserUncheckedCreateWithoutShopInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutShopInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutShopInput, UserUncheckedUpdateWithoutShopInput>
  }

  export type UserUpdateWithoutShopInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    userName?: StringFieldUpdateOperationsInput | string
    avatar?: StringFieldUpdateOperationsInput | string
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    stableShift?: StableShiftUpdateManyWithoutUserNestedInput
    unstableShift?: UnstableShiftUpdateManyWithoutUserNestedInput
    request?: RequestUpdateManyWithoutUserNestedInput
    timeCard?: TimeCardUpdateManyWithoutUserNestedInput
    Invitation?: InvitationUpdateManyWithoutTargetUserNestedInput
  }

  export type UserUncheckedUpdateWithoutShopInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    userName?: StringFieldUpdateOperationsInput | string
    avatar?: StringFieldUpdateOperationsInput | string
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    stableShift?: StableShiftUncheckedUpdateManyWithoutUserNestedInput
    unstableShift?: UnstableShiftUncheckedUpdateManyWithoutUserNestedInput
    request?: RequestUncheckedUpdateManyWithoutUserNestedInput
    timeCard?: TimeCardUncheckedUpdateManyWithoutUserNestedInput
    Invitation?: InvitationUncheckedUpdateManyWithoutTargetUserNestedInput
  }

  export type ShopCreateWithoutOrganizationInput = {
    id?: string
    shopName: string
    openTime: string
    closeTime: string
    timeUnit: number
    submitFrequency: string
    avatar: string
    useTimeCard: boolean
    isDeleted?: boolean
    createdAt?: Date | string
    user?: ShopUserBelongingCreateNestedManyWithoutShopInput
    operation?: OperationCreateNestedManyWithoutShopInput
    stableShift?: StableShiftCreateNestedManyWithoutShopInput
    unstableShift?: UnstableShiftCreateNestedManyWithoutShopInput
    request?: RequestCreateNestedManyWithoutShopInput
    timeCard?: TimeCardCreateNestedManyWithoutShopInput
    temporaryClosed?: TemporaryClosedCreateNestedManyWithoutShopInput
    announce?: AnnounceCreateNestedManyWithoutShopInput
    Invitation?: InvitationCreateNestedManyWithoutInvitedByInput
  }

  export type ShopUncheckedCreateWithoutOrganizationInput = {
    id?: string
    shopName: string
    openTime: string
    closeTime: string
    timeUnit: number
    submitFrequency: string
    avatar: string
    useTimeCard: boolean
    isDeleted?: boolean
    createdAt?: Date | string
    user?: ShopUserBelongingUncheckedCreateNestedManyWithoutShopInput
    operation?: OperationUncheckedCreateNestedManyWithoutShopInput
    stableShift?: StableShiftUncheckedCreateNestedManyWithoutShopInput
    unstableShift?: UnstableShiftUncheckedCreateNestedManyWithoutShopInput
    request?: RequestUncheckedCreateNestedManyWithoutShopInput
    timeCard?: TimeCardUncheckedCreateNestedManyWithoutShopInput
    temporaryClosed?: TemporaryClosedUncheckedCreateNestedManyWithoutShopInput
    announce?: AnnounceUncheckedCreateNestedManyWithoutShopInput
    Invitation?: InvitationUncheckedCreateNestedManyWithoutInvitedByInput
  }

  export type ShopCreateOrConnectWithoutOrganizationInput = {
    where: ShopWhereUniqueInput
    create: XOR<ShopCreateWithoutOrganizationInput, ShopUncheckedCreateWithoutOrganizationInput>
  }

  export type OrganizationCreateWithoutShopInput = {
    id?: string
    organizationName: string
    isDeleted?: boolean
    createdAt?: Date | string
    temporaryClosed?: TemporaryClosedCreateNestedManyWithoutOrganizationInput
    announce?: AnnounceCreateNestedManyWithoutOrganizationInput
  }

  export type OrganizationUncheckedCreateWithoutShopInput = {
    id?: string
    organizationName: string
    isDeleted?: boolean
    createdAt?: Date | string
    temporaryClosed?: TemporaryClosedUncheckedCreateNestedManyWithoutOrganizationInput
    announce?: AnnounceUncheckedCreateNestedManyWithoutOrganizationInput
  }

  export type OrganizationCreateOrConnectWithoutShopInput = {
    where: OrganizationWhereUniqueInput
    create: XOR<OrganizationCreateWithoutShopInput, OrganizationUncheckedCreateWithoutShopInput>
  }

  export type ShopUpsertWithoutOrganizationInput = {
    update: XOR<ShopUpdateWithoutOrganizationInput, ShopUncheckedUpdateWithoutOrganizationInput>
    create: XOR<ShopCreateWithoutOrganizationInput, ShopUncheckedCreateWithoutOrganizationInput>
    where?: ShopWhereInput
  }

  export type ShopUpdateToOneWithWhereWithoutOrganizationInput = {
    where?: ShopWhereInput
    data: XOR<ShopUpdateWithoutOrganizationInput, ShopUncheckedUpdateWithoutOrganizationInput>
  }

  export type ShopUpdateWithoutOrganizationInput = {
    id?: StringFieldUpdateOperationsInput | string
    shopName?: StringFieldUpdateOperationsInput | string
    openTime?: StringFieldUpdateOperationsInput | string
    closeTime?: StringFieldUpdateOperationsInput | string
    timeUnit?: IntFieldUpdateOperationsInput | number
    submitFrequency?: StringFieldUpdateOperationsInput | string
    avatar?: StringFieldUpdateOperationsInput | string
    useTimeCard?: BoolFieldUpdateOperationsInput | boolean
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: ShopUserBelongingUpdateManyWithoutShopNestedInput
    operation?: OperationUpdateManyWithoutShopNestedInput
    stableShift?: StableShiftUpdateManyWithoutShopNestedInput
    unstableShift?: UnstableShiftUpdateManyWithoutShopNestedInput
    request?: RequestUpdateManyWithoutShopNestedInput
    timeCard?: TimeCardUpdateManyWithoutShopNestedInput
    temporaryClosed?: TemporaryClosedUpdateManyWithoutShopNestedInput
    announce?: AnnounceUpdateManyWithoutShopNestedInput
    Invitation?: InvitationUpdateManyWithoutInvitedByNestedInput
  }

  export type ShopUncheckedUpdateWithoutOrganizationInput = {
    id?: StringFieldUpdateOperationsInput | string
    shopName?: StringFieldUpdateOperationsInput | string
    openTime?: StringFieldUpdateOperationsInput | string
    closeTime?: StringFieldUpdateOperationsInput | string
    timeUnit?: IntFieldUpdateOperationsInput | number
    submitFrequency?: StringFieldUpdateOperationsInput | string
    avatar?: StringFieldUpdateOperationsInput | string
    useTimeCard?: BoolFieldUpdateOperationsInput | boolean
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: ShopUserBelongingUncheckedUpdateManyWithoutShopNestedInput
    operation?: OperationUncheckedUpdateManyWithoutShopNestedInput
    stableShift?: StableShiftUncheckedUpdateManyWithoutShopNestedInput
    unstableShift?: UnstableShiftUncheckedUpdateManyWithoutShopNestedInput
    request?: RequestUncheckedUpdateManyWithoutShopNestedInput
    timeCard?: TimeCardUncheckedUpdateManyWithoutShopNestedInput
    temporaryClosed?: TemporaryClosedUncheckedUpdateManyWithoutShopNestedInput
    announce?: AnnounceUncheckedUpdateManyWithoutShopNestedInput
    Invitation?: InvitationUncheckedUpdateManyWithoutInvitedByNestedInput
  }

  export type OrganizationUpsertWithoutShopInput = {
    update: XOR<OrganizationUpdateWithoutShopInput, OrganizationUncheckedUpdateWithoutShopInput>
    create: XOR<OrganizationCreateWithoutShopInput, OrganizationUncheckedCreateWithoutShopInput>
    where?: OrganizationWhereInput
  }

  export type OrganizationUpdateToOneWithWhereWithoutShopInput = {
    where?: OrganizationWhereInput
    data: XOR<OrganizationUpdateWithoutShopInput, OrganizationUncheckedUpdateWithoutShopInput>
  }

  export type OrganizationUpdateWithoutShopInput = {
    id?: StringFieldUpdateOperationsInput | string
    organizationName?: StringFieldUpdateOperationsInput | string
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    temporaryClosed?: TemporaryClosedUpdateManyWithoutOrganizationNestedInput
    announce?: AnnounceUpdateManyWithoutOrganizationNestedInput
  }

  export type OrganizationUncheckedUpdateWithoutShopInput = {
    id?: StringFieldUpdateOperationsInput | string
    organizationName?: StringFieldUpdateOperationsInput | string
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    temporaryClosed?: TemporaryClosedUncheckedUpdateManyWithoutOrganizationNestedInput
    announce?: AnnounceUncheckedUpdateManyWithoutOrganizationNestedInput
  }

  export type OrganizationShopBelongingCreateWithoutOrganizationInput = {
    id?: string
    isDeleted: boolean
    createdAt?: Date | string
    shop: ShopCreateNestedOneWithoutOrganizationInput
  }

  export type OrganizationShopBelongingUncheckedCreateWithoutOrganizationInput = {
    id?: string
    shopId: string
    isDeleted: boolean
    createdAt?: Date | string
  }

  export type OrganizationShopBelongingCreateOrConnectWithoutOrganizationInput = {
    where: OrganizationShopBelongingWhereUniqueInput
    create: XOR<OrganizationShopBelongingCreateWithoutOrganizationInput, OrganizationShopBelongingUncheckedCreateWithoutOrganizationInput>
  }

  export type OrganizationShopBelongingCreateManyOrganizationInputEnvelope = {
    data: OrganizationShopBelongingCreateManyOrganizationInput | OrganizationShopBelongingCreateManyOrganizationInput[]
    skipDuplicates?: boolean
  }

  export type TemporaryClosedCreateWithoutOrganizationInput = {
    id?: string
    date: Date | string
    isDeleted?: boolean
    createdAt?: Date | string
    shop: ShopCreateNestedOneWithoutTemporaryClosedInput
  }

  export type TemporaryClosedUncheckedCreateWithoutOrganizationInput = {
    id?: string
    shopId: string
    date: Date | string
    isDeleted?: boolean
    createdAt?: Date | string
  }

  export type TemporaryClosedCreateOrConnectWithoutOrganizationInput = {
    where: TemporaryClosedWhereUniqueInput
    create: XOR<TemporaryClosedCreateWithoutOrganizationInput, TemporaryClosedUncheckedCreateWithoutOrganizationInput>
  }

  export type TemporaryClosedCreateManyOrganizationInputEnvelope = {
    data: TemporaryClosedCreateManyOrganizationInput | TemporaryClosedCreateManyOrganizationInput[]
    skipDuplicates?: boolean
  }

  export type AnnounceCreateWithoutOrganizationInput = {
    id?: string
    message: string
    isDeleted?: boolean
    createdAt?: Date | string
    shop: ShopCreateNestedOneWithoutAnnounceInput
  }

  export type AnnounceUncheckedCreateWithoutOrganizationInput = {
    id?: string
    shopId: string
    message: string
    isDeleted?: boolean
    createdAt?: Date | string
  }

  export type AnnounceCreateOrConnectWithoutOrganizationInput = {
    where: AnnounceWhereUniqueInput
    create: XOR<AnnounceCreateWithoutOrganizationInput, AnnounceUncheckedCreateWithoutOrganizationInput>
  }

  export type AnnounceCreateManyOrganizationInputEnvelope = {
    data: AnnounceCreateManyOrganizationInput | AnnounceCreateManyOrganizationInput[]
    skipDuplicates?: boolean
  }

  export type OrganizationShopBelongingUpsertWithWhereUniqueWithoutOrganizationInput = {
    where: OrganizationShopBelongingWhereUniqueInput
    update: XOR<OrganizationShopBelongingUpdateWithoutOrganizationInput, OrganizationShopBelongingUncheckedUpdateWithoutOrganizationInput>
    create: XOR<OrganizationShopBelongingCreateWithoutOrganizationInput, OrganizationShopBelongingUncheckedCreateWithoutOrganizationInput>
  }

  export type OrganizationShopBelongingUpdateWithWhereUniqueWithoutOrganizationInput = {
    where: OrganizationShopBelongingWhereUniqueInput
    data: XOR<OrganizationShopBelongingUpdateWithoutOrganizationInput, OrganizationShopBelongingUncheckedUpdateWithoutOrganizationInput>
  }

  export type OrganizationShopBelongingUpdateManyWithWhereWithoutOrganizationInput = {
    where: OrganizationShopBelongingScalarWhereInput
    data: XOR<OrganizationShopBelongingUpdateManyMutationInput, OrganizationShopBelongingUncheckedUpdateManyWithoutOrganizationInput>
  }

  export type OrganizationShopBelongingScalarWhereInput = {
    AND?: OrganizationShopBelongingScalarWhereInput | OrganizationShopBelongingScalarWhereInput[]
    OR?: OrganizationShopBelongingScalarWhereInput[]
    NOT?: OrganizationShopBelongingScalarWhereInput | OrganizationShopBelongingScalarWhereInput[]
    id?: UuidFilter<"OrganizationShopBelonging"> | string
    organizationId?: UuidFilter<"OrganizationShopBelonging"> | string
    shopId?: UuidFilter<"OrganizationShopBelonging"> | string
    isDeleted?: BoolFilter<"OrganizationShopBelonging"> | boolean
    createdAt?: DateTimeFilter<"OrganizationShopBelonging"> | Date | string
  }

  export type TemporaryClosedUpsertWithWhereUniqueWithoutOrganizationInput = {
    where: TemporaryClosedWhereUniqueInput
    update: XOR<TemporaryClosedUpdateWithoutOrganizationInput, TemporaryClosedUncheckedUpdateWithoutOrganizationInput>
    create: XOR<TemporaryClosedCreateWithoutOrganizationInput, TemporaryClosedUncheckedCreateWithoutOrganizationInput>
  }

  export type TemporaryClosedUpdateWithWhereUniqueWithoutOrganizationInput = {
    where: TemporaryClosedWhereUniqueInput
    data: XOR<TemporaryClosedUpdateWithoutOrganizationInput, TemporaryClosedUncheckedUpdateWithoutOrganizationInput>
  }

  export type TemporaryClosedUpdateManyWithWhereWithoutOrganizationInput = {
    where: TemporaryClosedScalarWhereInput
    data: XOR<TemporaryClosedUpdateManyMutationInput, TemporaryClosedUncheckedUpdateManyWithoutOrganizationInput>
  }

  export type TemporaryClosedScalarWhereInput = {
    AND?: TemporaryClosedScalarWhereInput | TemporaryClosedScalarWhereInput[]
    OR?: TemporaryClosedScalarWhereInput[]
    NOT?: TemporaryClosedScalarWhereInput | TemporaryClosedScalarWhereInput[]
    id?: UuidFilter<"TemporaryClosed"> | string
    organizationId?: UuidFilter<"TemporaryClosed"> | string
    shopId?: UuidFilter<"TemporaryClosed"> | string
    date?: DateTimeFilter<"TemporaryClosed"> | Date | string
    isDeleted?: BoolFilter<"TemporaryClosed"> | boolean
    createdAt?: DateTimeFilter<"TemporaryClosed"> | Date | string
  }

  export type AnnounceUpsertWithWhereUniqueWithoutOrganizationInput = {
    where: AnnounceWhereUniqueInput
    update: XOR<AnnounceUpdateWithoutOrganizationInput, AnnounceUncheckedUpdateWithoutOrganizationInput>
    create: XOR<AnnounceCreateWithoutOrganizationInput, AnnounceUncheckedCreateWithoutOrganizationInput>
  }

  export type AnnounceUpdateWithWhereUniqueWithoutOrganizationInput = {
    where: AnnounceWhereUniqueInput
    data: XOR<AnnounceUpdateWithoutOrganizationInput, AnnounceUncheckedUpdateWithoutOrganizationInput>
  }

  export type AnnounceUpdateManyWithWhereWithoutOrganizationInput = {
    where: AnnounceScalarWhereInput
    data: XOR<AnnounceUpdateManyMutationInput, AnnounceUncheckedUpdateManyWithoutOrganizationInput>
  }

  export type AnnounceScalarWhereInput = {
    AND?: AnnounceScalarWhereInput | AnnounceScalarWhereInput[]
    OR?: AnnounceScalarWhereInput[]
    NOT?: AnnounceScalarWhereInput | AnnounceScalarWhereInput[]
    id?: UuidFilter<"Announce"> | string
    organizationId?: UuidFilter<"Announce"> | string
    shopId?: UuidFilter<"Announce"> | string
    message?: StringFilter<"Announce"> | string
    isDeleted?: BoolFilter<"Announce"> | boolean
    createdAt?: DateTimeFilter<"Announce"> | Date | string
  }

  export type OrganizationShopBelongingCreateWithoutShopInput = {
    id?: string
    isDeleted: boolean
    createdAt?: Date | string
    organization: OrganizationCreateNestedOneWithoutShopInput
  }

  export type OrganizationShopBelongingUncheckedCreateWithoutShopInput = {
    id?: string
    organizationId: string
    isDeleted: boolean
    createdAt?: Date | string
  }

  export type OrganizationShopBelongingCreateOrConnectWithoutShopInput = {
    where: OrganizationShopBelongingWhereUniqueInput
    create: XOR<OrganizationShopBelongingCreateWithoutShopInput, OrganizationShopBelongingUncheckedCreateWithoutShopInput>
  }

  export type OrganizationShopBelongingCreateManyShopInputEnvelope = {
    data: OrganizationShopBelongingCreateManyShopInput | OrganizationShopBelongingCreateManyShopInput[]
    skipDuplicates?: boolean
  }

  export type ShopUserBelongingCreateWithoutShopInput = {
    id?: string
    isDeleted?: boolean
    createdAt?: Date | string
    user: UserCreateNestedOneWithoutShopInput
  }

  export type ShopUserBelongingUncheckedCreateWithoutShopInput = {
    id?: string
    userId: string
    isDeleted?: boolean
    createdAt?: Date | string
  }

  export type ShopUserBelongingCreateOrConnectWithoutShopInput = {
    where: ShopUserBelongingWhereUniqueInput
    create: XOR<ShopUserBelongingCreateWithoutShopInput, ShopUserBelongingUncheckedCreateWithoutShopInput>
  }

  export type ShopUserBelongingCreateManyShopInputEnvelope = {
    data: ShopUserBelongingCreateManyShopInput | ShopUserBelongingCreateManyShopInput[]
    skipDuplicates?: boolean
  }

  export type OperationCreateWithoutShopInput = {
    id?: string
    operationName: string
    icon: string
    color: string
    isDeleted?: boolean
    createdAt?: Date | string
  }

  export type OperationUncheckedCreateWithoutShopInput = {
    id?: string
    operationName: string
    icon: string
    color: string
    isDeleted?: boolean
    createdAt?: Date | string
  }

  export type OperationCreateOrConnectWithoutShopInput = {
    where: OperationWhereUniqueInput
    create: XOR<OperationCreateWithoutShopInput, OperationUncheckedCreateWithoutShopInput>
  }

  export type OperationCreateManyShopInputEnvelope = {
    data: OperationCreateManyShopInput | OperationCreateManyShopInput[]
    skipDuplicates?: boolean
  }

  export type StableShiftCreateWithoutShopInput = {
    id?: string
    workFrom: Date | string
    workTo: Date | string
    breakFrom: Date | string
    breakTo: Date | string
    isDeleted?: boolean
    createdAt?: Date | string
    user: UserCreateNestedOneWithoutStableShiftInput
  }

  export type StableShiftUncheckedCreateWithoutShopInput = {
    id?: string
    userId: string
    workFrom: Date | string
    workTo: Date | string
    breakFrom: Date | string
    breakTo: Date | string
    isDeleted?: boolean
    createdAt?: Date | string
  }

  export type StableShiftCreateOrConnectWithoutShopInput = {
    where: StableShiftWhereUniqueInput
    create: XOR<StableShiftCreateWithoutShopInput, StableShiftUncheckedCreateWithoutShopInput>
  }

  export type StableShiftCreateManyShopInputEnvelope = {
    data: StableShiftCreateManyShopInput | StableShiftCreateManyShopInput[]
    skipDuplicates?: boolean
  }

  export type UnstableShiftCreateWithoutShopInput = {
    id?: string
    workFrom: Date | string
    workTo: Date | string
    breakFrom: Date | string
    breakTo: Date | string
    isDeleted?: boolean
    createdAt?: Date | string
    user: UserCreateNestedOneWithoutUnstableShiftInput
  }

  export type UnstableShiftUncheckedCreateWithoutShopInput = {
    id?: string
    userId: string
    workFrom: Date | string
    workTo: Date | string
    breakFrom: Date | string
    breakTo: Date | string
    isDeleted?: boolean
    createdAt?: Date | string
  }

  export type UnstableShiftCreateOrConnectWithoutShopInput = {
    where: UnstableShiftWhereUniqueInput
    create: XOR<UnstableShiftCreateWithoutShopInput, UnstableShiftUncheckedCreateWithoutShopInput>
  }

  export type UnstableShiftCreateManyShopInputEnvelope = {
    data: UnstableShiftCreateManyShopInput | UnstableShiftCreateManyShopInput[]
    skipDuplicates?: boolean
  }

  export type RequestCreateWithoutShopInput = {
    id?: string
    dateFrom: Date | string
    dateTo: Date | string
    done?: boolean
    isDeleted?: boolean
    createdAt?: Date | string
    user: UserCreateNestedOneWithoutRequestInput
  }

  export type RequestUncheckedCreateWithoutShopInput = {
    id?: string
    userId: string
    dateFrom: Date | string
    dateTo: Date | string
    done?: boolean
    isDeleted?: boolean
    createdAt?: Date | string
  }

  export type RequestCreateOrConnectWithoutShopInput = {
    where: RequestWhereUniqueInput
    create: XOR<RequestCreateWithoutShopInput, RequestUncheckedCreateWithoutShopInput>
  }

  export type RequestCreateManyShopInputEnvelope = {
    data: RequestCreateManyShopInput | RequestCreateManyShopInput[]
    skipDuplicates?: boolean
  }

  export type TimeCardCreateWithoutShopInput = {
    id?: string
    workFrom: Date | string
    workTo: Date | string
    breakFrom: Date | string
    breakTo: Date | string
    isDeleted?: boolean
    createdAt?: Date | string
    user: UserCreateNestedOneWithoutTimeCardInput
  }

  export type TimeCardUncheckedCreateWithoutShopInput = {
    id?: string
    userId: string
    workFrom: Date | string
    workTo: Date | string
    breakFrom: Date | string
    breakTo: Date | string
    isDeleted?: boolean
    createdAt?: Date | string
  }

  export type TimeCardCreateOrConnectWithoutShopInput = {
    where: TimeCardWhereUniqueInput
    create: XOR<TimeCardCreateWithoutShopInput, TimeCardUncheckedCreateWithoutShopInput>
  }

  export type TimeCardCreateManyShopInputEnvelope = {
    data: TimeCardCreateManyShopInput | TimeCardCreateManyShopInput[]
    skipDuplicates?: boolean
  }

  export type TemporaryClosedCreateWithoutShopInput = {
    id?: string
    date: Date | string
    isDeleted?: boolean
    createdAt?: Date | string
    organization: OrganizationCreateNestedOneWithoutTemporaryClosedInput
  }

  export type TemporaryClosedUncheckedCreateWithoutShopInput = {
    id?: string
    organizationId: string
    date: Date | string
    isDeleted?: boolean
    createdAt?: Date | string
  }

  export type TemporaryClosedCreateOrConnectWithoutShopInput = {
    where: TemporaryClosedWhereUniqueInput
    create: XOR<TemporaryClosedCreateWithoutShopInput, TemporaryClosedUncheckedCreateWithoutShopInput>
  }

  export type TemporaryClosedCreateManyShopInputEnvelope = {
    data: TemporaryClosedCreateManyShopInput | TemporaryClosedCreateManyShopInput[]
    skipDuplicates?: boolean
  }

  export type AnnounceCreateWithoutShopInput = {
    id?: string
    message: string
    isDeleted?: boolean
    createdAt?: Date | string
    organization: OrganizationCreateNestedOneWithoutAnnounceInput
  }

  export type AnnounceUncheckedCreateWithoutShopInput = {
    id?: string
    organizationId: string
    message: string
    isDeleted?: boolean
    createdAt?: Date | string
  }

  export type AnnounceCreateOrConnectWithoutShopInput = {
    where: AnnounceWhereUniqueInput
    create: XOR<AnnounceCreateWithoutShopInput, AnnounceUncheckedCreateWithoutShopInput>
  }

  export type AnnounceCreateManyShopInputEnvelope = {
    data: AnnounceCreateManyShopInput | AnnounceCreateManyShopInput[]
    skipDuplicates?: boolean
  }

  export type InvitationCreateWithoutInvitedByInput = {
    id?: string
    accepted?: boolean
    isDeleted?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    targetUser: UserCreateNestedOneWithoutInvitationInput
  }

  export type InvitationUncheckedCreateWithoutInvitedByInput = {
    id?: string
    targetUserId: string
    accepted?: boolean
    isDeleted?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type InvitationCreateOrConnectWithoutInvitedByInput = {
    where: InvitationWhereUniqueInput
    create: XOR<InvitationCreateWithoutInvitedByInput, InvitationUncheckedCreateWithoutInvitedByInput>
  }

  export type InvitationCreateManyInvitedByInputEnvelope = {
    data: InvitationCreateManyInvitedByInput | InvitationCreateManyInvitedByInput[]
    skipDuplicates?: boolean
  }

  export type OrganizationShopBelongingUpsertWithWhereUniqueWithoutShopInput = {
    where: OrganizationShopBelongingWhereUniqueInput
    update: XOR<OrganizationShopBelongingUpdateWithoutShopInput, OrganizationShopBelongingUncheckedUpdateWithoutShopInput>
    create: XOR<OrganizationShopBelongingCreateWithoutShopInput, OrganizationShopBelongingUncheckedCreateWithoutShopInput>
  }

  export type OrganizationShopBelongingUpdateWithWhereUniqueWithoutShopInput = {
    where: OrganizationShopBelongingWhereUniqueInput
    data: XOR<OrganizationShopBelongingUpdateWithoutShopInput, OrganizationShopBelongingUncheckedUpdateWithoutShopInput>
  }

  export type OrganizationShopBelongingUpdateManyWithWhereWithoutShopInput = {
    where: OrganizationShopBelongingScalarWhereInput
    data: XOR<OrganizationShopBelongingUpdateManyMutationInput, OrganizationShopBelongingUncheckedUpdateManyWithoutShopInput>
  }

  export type ShopUserBelongingUpsertWithWhereUniqueWithoutShopInput = {
    where: ShopUserBelongingWhereUniqueInput
    update: XOR<ShopUserBelongingUpdateWithoutShopInput, ShopUserBelongingUncheckedUpdateWithoutShopInput>
    create: XOR<ShopUserBelongingCreateWithoutShopInput, ShopUserBelongingUncheckedCreateWithoutShopInput>
  }

  export type ShopUserBelongingUpdateWithWhereUniqueWithoutShopInput = {
    where: ShopUserBelongingWhereUniqueInput
    data: XOR<ShopUserBelongingUpdateWithoutShopInput, ShopUserBelongingUncheckedUpdateWithoutShopInput>
  }

  export type ShopUserBelongingUpdateManyWithWhereWithoutShopInput = {
    where: ShopUserBelongingScalarWhereInput
    data: XOR<ShopUserBelongingUpdateManyMutationInput, ShopUserBelongingUncheckedUpdateManyWithoutShopInput>
  }

  export type ShopUserBelongingScalarWhereInput = {
    AND?: ShopUserBelongingScalarWhereInput | ShopUserBelongingScalarWhereInput[]
    OR?: ShopUserBelongingScalarWhereInput[]
    NOT?: ShopUserBelongingScalarWhereInput | ShopUserBelongingScalarWhereInput[]
    id?: UuidFilter<"ShopUserBelonging"> | string
    shopId?: UuidFilter<"ShopUserBelonging"> | string
    userId?: StringFilter<"ShopUserBelonging"> | string
    isDeleted?: BoolFilter<"ShopUserBelonging"> | boolean
    createdAt?: DateTimeFilter<"ShopUserBelonging"> | Date | string
  }

  export type OperationUpsertWithWhereUniqueWithoutShopInput = {
    where: OperationWhereUniqueInput
    update: XOR<OperationUpdateWithoutShopInput, OperationUncheckedUpdateWithoutShopInput>
    create: XOR<OperationCreateWithoutShopInput, OperationUncheckedCreateWithoutShopInput>
  }

  export type OperationUpdateWithWhereUniqueWithoutShopInput = {
    where: OperationWhereUniqueInput
    data: XOR<OperationUpdateWithoutShopInput, OperationUncheckedUpdateWithoutShopInput>
  }

  export type OperationUpdateManyWithWhereWithoutShopInput = {
    where: OperationScalarWhereInput
    data: XOR<OperationUpdateManyMutationInput, OperationUncheckedUpdateManyWithoutShopInput>
  }

  export type OperationScalarWhereInput = {
    AND?: OperationScalarWhereInput | OperationScalarWhereInput[]
    OR?: OperationScalarWhereInput[]
    NOT?: OperationScalarWhereInput | OperationScalarWhereInput[]
    id?: UuidFilter<"Operation"> | string
    shopId?: UuidFilter<"Operation"> | string
    operationName?: StringFilter<"Operation"> | string
    icon?: StringFilter<"Operation"> | string
    color?: StringFilter<"Operation"> | string
    isDeleted?: BoolFilter<"Operation"> | boolean
    createdAt?: DateTimeFilter<"Operation"> | Date | string
  }

  export type StableShiftUpsertWithWhereUniqueWithoutShopInput = {
    where: StableShiftWhereUniqueInput
    update: XOR<StableShiftUpdateWithoutShopInput, StableShiftUncheckedUpdateWithoutShopInput>
    create: XOR<StableShiftCreateWithoutShopInput, StableShiftUncheckedCreateWithoutShopInput>
  }

  export type StableShiftUpdateWithWhereUniqueWithoutShopInput = {
    where: StableShiftWhereUniqueInput
    data: XOR<StableShiftUpdateWithoutShopInput, StableShiftUncheckedUpdateWithoutShopInput>
  }

  export type StableShiftUpdateManyWithWhereWithoutShopInput = {
    where: StableShiftScalarWhereInput
    data: XOR<StableShiftUpdateManyMutationInput, StableShiftUncheckedUpdateManyWithoutShopInput>
  }

  export type StableShiftScalarWhereInput = {
    AND?: StableShiftScalarWhereInput | StableShiftScalarWhereInput[]
    OR?: StableShiftScalarWhereInput[]
    NOT?: StableShiftScalarWhereInput | StableShiftScalarWhereInput[]
    id?: UuidFilter<"StableShift"> | string
    shopId?: UuidFilter<"StableShift"> | string
    userId?: StringFilter<"StableShift"> | string
    workFrom?: DateTimeFilter<"StableShift"> | Date | string
    workTo?: DateTimeFilter<"StableShift"> | Date | string
    breakFrom?: DateTimeFilter<"StableShift"> | Date | string
    breakTo?: DateTimeFilter<"StableShift"> | Date | string
    isDeleted?: BoolFilter<"StableShift"> | boolean
    createdAt?: DateTimeFilter<"StableShift"> | Date | string
  }

  export type UnstableShiftUpsertWithWhereUniqueWithoutShopInput = {
    where: UnstableShiftWhereUniqueInput
    update: XOR<UnstableShiftUpdateWithoutShopInput, UnstableShiftUncheckedUpdateWithoutShopInput>
    create: XOR<UnstableShiftCreateWithoutShopInput, UnstableShiftUncheckedCreateWithoutShopInput>
  }

  export type UnstableShiftUpdateWithWhereUniqueWithoutShopInput = {
    where: UnstableShiftWhereUniqueInput
    data: XOR<UnstableShiftUpdateWithoutShopInput, UnstableShiftUncheckedUpdateWithoutShopInput>
  }

  export type UnstableShiftUpdateManyWithWhereWithoutShopInput = {
    where: UnstableShiftScalarWhereInput
    data: XOR<UnstableShiftUpdateManyMutationInput, UnstableShiftUncheckedUpdateManyWithoutShopInput>
  }

  export type UnstableShiftScalarWhereInput = {
    AND?: UnstableShiftScalarWhereInput | UnstableShiftScalarWhereInput[]
    OR?: UnstableShiftScalarWhereInput[]
    NOT?: UnstableShiftScalarWhereInput | UnstableShiftScalarWhereInput[]
    id?: UuidFilter<"UnstableShift"> | string
    shopId?: UuidFilter<"UnstableShift"> | string
    userId?: StringFilter<"UnstableShift"> | string
    workFrom?: DateTimeFilter<"UnstableShift"> | Date | string
    workTo?: DateTimeFilter<"UnstableShift"> | Date | string
    breakFrom?: DateTimeFilter<"UnstableShift"> | Date | string
    breakTo?: DateTimeFilter<"UnstableShift"> | Date | string
    isDeleted?: BoolFilter<"UnstableShift"> | boolean
    createdAt?: DateTimeFilter<"UnstableShift"> | Date | string
  }

  export type RequestUpsertWithWhereUniqueWithoutShopInput = {
    where: RequestWhereUniqueInput
    update: XOR<RequestUpdateWithoutShopInput, RequestUncheckedUpdateWithoutShopInput>
    create: XOR<RequestCreateWithoutShopInput, RequestUncheckedCreateWithoutShopInput>
  }

  export type RequestUpdateWithWhereUniqueWithoutShopInput = {
    where: RequestWhereUniqueInput
    data: XOR<RequestUpdateWithoutShopInput, RequestUncheckedUpdateWithoutShopInput>
  }

  export type RequestUpdateManyWithWhereWithoutShopInput = {
    where: RequestScalarWhereInput
    data: XOR<RequestUpdateManyMutationInput, RequestUncheckedUpdateManyWithoutShopInput>
  }

  export type RequestScalarWhereInput = {
    AND?: RequestScalarWhereInput | RequestScalarWhereInput[]
    OR?: RequestScalarWhereInput[]
    NOT?: RequestScalarWhereInput | RequestScalarWhereInput[]
    id?: UuidFilter<"Request"> | string
    shopId?: UuidFilter<"Request"> | string
    userId?: StringFilter<"Request"> | string
    dateFrom?: DateTimeFilter<"Request"> | Date | string
    dateTo?: DateTimeFilter<"Request"> | Date | string
    done?: BoolFilter<"Request"> | boolean
    isDeleted?: BoolFilter<"Request"> | boolean
    createdAt?: DateTimeFilter<"Request"> | Date | string
  }

  export type TimeCardUpsertWithWhereUniqueWithoutShopInput = {
    where: TimeCardWhereUniqueInput
    update: XOR<TimeCardUpdateWithoutShopInput, TimeCardUncheckedUpdateWithoutShopInput>
    create: XOR<TimeCardCreateWithoutShopInput, TimeCardUncheckedCreateWithoutShopInput>
  }

  export type TimeCardUpdateWithWhereUniqueWithoutShopInput = {
    where: TimeCardWhereUniqueInput
    data: XOR<TimeCardUpdateWithoutShopInput, TimeCardUncheckedUpdateWithoutShopInput>
  }

  export type TimeCardUpdateManyWithWhereWithoutShopInput = {
    where: TimeCardScalarWhereInput
    data: XOR<TimeCardUpdateManyMutationInput, TimeCardUncheckedUpdateManyWithoutShopInput>
  }

  export type TimeCardScalarWhereInput = {
    AND?: TimeCardScalarWhereInput | TimeCardScalarWhereInput[]
    OR?: TimeCardScalarWhereInput[]
    NOT?: TimeCardScalarWhereInput | TimeCardScalarWhereInput[]
    id?: UuidFilter<"TimeCard"> | string
    shopId?: UuidFilter<"TimeCard"> | string
    userId?: StringFilter<"TimeCard"> | string
    workFrom?: DateTimeFilter<"TimeCard"> | Date | string
    workTo?: DateTimeFilter<"TimeCard"> | Date | string
    breakFrom?: DateTimeFilter<"TimeCard"> | Date | string
    breakTo?: DateTimeFilter<"TimeCard"> | Date | string
    isDeleted?: BoolFilter<"TimeCard"> | boolean
    createdAt?: DateTimeFilter<"TimeCard"> | Date | string
  }

  export type TemporaryClosedUpsertWithWhereUniqueWithoutShopInput = {
    where: TemporaryClosedWhereUniqueInput
    update: XOR<TemporaryClosedUpdateWithoutShopInput, TemporaryClosedUncheckedUpdateWithoutShopInput>
    create: XOR<TemporaryClosedCreateWithoutShopInput, TemporaryClosedUncheckedCreateWithoutShopInput>
  }

  export type TemporaryClosedUpdateWithWhereUniqueWithoutShopInput = {
    where: TemporaryClosedWhereUniqueInput
    data: XOR<TemporaryClosedUpdateWithoutShopInput, TemporaryClosedUncheckedUpdateWithoutShopInput>
  }

  export type TemporaryClosedUpdateManyWithWhereWithoutShopInput = {
    where: TemporaryClosedScalarWhereInput
    data: XOR<TemporaryClosedUpdateManyMutationInput, TemporaryClosedUncheckedUpdateManyWithoutShopInput>
  }

  export type AnnounceUpsertWithWhereUniqueWithoutShopInput = {
    where: AnnounceWhereUniqueInput
    update: XOR<AnnounceUpdateWithoutShopInput, AnnounceUncheckedUpdateWithoutShopInput>
    create: XOR<AnnounceCreateWithoutShopInput, AnnounceUncheckedCreateWithoutShopInput>
  }

  export type AnnounceUpdateWithWhereUniqueWithoutShopInput = {
    where: AnnounceWhereUniqueInput
    data: XOR<AnnounceUpdateWithoutShopInput, AnnounceUncheckedUpdateWithoutShopInput>
  }

  export type AnnounceUpdateManyWithWhereWithoutShopInput = {
    where: AnnounceScalarWhereInput
    data: XOR<AnnounceUpdateManyMutationInput, AnnounceUncheckedUpdateManyWithoutShopInput>
  }

  export type InvitationUpsertWithWhereUniqueWithoutInvitedByInput = {
    where: InvitationWhereUniqueInput
    update: XOR<InvitationUpdateWithoutInvitedByInput, InvitationUncheckedUpdateWithoutInvitedByInput>
    create: XOR<InvitationCreateWithoutInvitedByInput, InvitationUncheckedCreateWithoutInvitedByInput>
  }

  export type InvitationUpdateWithWhereUniqueWithoutInvitedByInput = {
    where: InvitationWhereUniqueInput
    data: XOR<InvitationUpdateWithoutInvitedByInput, InvitationUncheckedUpdateWithoutInvitedByInput>
  }

  export type InvitationUpdateManyWithWhereWithoutInvitedByInput = {
    where: InvitationScalarWhereInput
    data: XOR<InvitationUpdateManyMutationInput, InvitationUncheckedUpdateManyWithoutInvitedByInput>
  }

  export type InvitationScalarWhereInput = {
    AND?: InvitationScalarWhereInput | InvitationScalarWhereInput[]
    OR?: InvitationScalarWhereInput[]
    NOT?: InvitationScalarWhereInput | InvitationScalarWhereInput[]
    id?: UuidFilter<"Invitation"> | string
    invitedByShopId?: UuidFilter<"Invitation"> | string
    targetUserId?: UuidFilter<"Invitation"> | string
    accepted?: BoolFilter<"Invitation"> | boolean
    isDeleted?: BoolFilter<"Invitation"> | boolean
    createdAt?: DateTimeFilter<"Invitation"> | Date | string
    updatedAt?: DateTimeFilter<"Invitation"> | Date | string
  }

  export type ShopUserBelongingCreateWithoutUserInput = {
    id?: string
    isDeleted?: boolean
    createdAt?: Date | string
    shop: ShopCreateNestedOneWithoutUserInput
  }

  export type ShopUserBelongingUncheckedCreateWithoutUserInput = {
    id?: string
    shopId: string
    isDeleted?: boolean
    createdAt?: Date | string
  }

  export type ShopUserBelongingCreateOrConnectWithoutUserInput = {
    where: ShopUserBelongingWhereUniqueInput
    create: XOR<ShopUserBelongingCreateWithoutUserInput, ShopUserBelongingUncheckedCreateWithoutUserInput>
  }

  export type ShopUserBelongingCreateManyUserInputEnvelope = {
    data: ShopUserBelongingCreateManyUserInput | ShopUserBelongingCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type StableShiftCreateWithoutUserInput = {
    id?: string
    workFrom: Date | string
    workTo: Date | string
    breakFrom: Date | string
    breakTo: Date | string
    isDeleted?: boolean
    createdAt?: Date | string
    shop: ShopCreateNestedOneWithoutStableShiftInput
  }

  export type StableShiftUncheckedCreateWithoutUserInput = {
    id?: string
    shopId: string
    workFrom: Date | string
    workTo: Date | string
    breakFrom: Date | string
    breakTo: Date | string
    isDeleted?: boolean
    createdAt?: Date | string
  }

  export type StableShiftCreateOrConnectWithoutUserInput = {
    where: StableShiftWhereUniqueInput
    create: XOR<StableShiftCreateWithoutUserInput, StableShiftUncheckedCreateWithoutUserInput>
  }

  export type StableShiftCreateManyUserInputEnvelope = {
    data: StableShiftCreateManyUserInput | StableShiftCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type UnstableShiftCreateWithoutUserInput = {
    id?: string
    workFrom: Date | string
    workTo: Date | string
    breakFrom: Date | string
    breakTo: Date | string
    isDeleted?: boolean
    createdAt?: Date | string
    shop: ShopCreateNestedOneWithoutUnstableShiftInput
  }

  export type UnstableShiftUncheckedCreateWithoutUserInput = {
    id?: string
    shopId: string
    workFrom: Date | string
    workTo: Date | string
    breakFrom: Date | string
    breakTo: Date | string
    isDeleted?: boolean
    createdAt?: Date | string
  }

  export type UnstableShiftCreateOrConnectWithoutUserInput = {
    where: UnstableShiftWhereUniqueInput
    create: XOR<UnstableShiftCreateWithoutUserInput, UnstableShiftUncheckedCreateWithoutUserInput>
  }

  export type UnstableShiftCreateManyUserInputEnvelope = {
    data: UnstableShiftCreateManyUserInput | UnstableShiftCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type RequestCreateWithoutUserInput = {
    id?: string
    dateFrom: Date | string
    dateTo: Date | string
    done?: boolean
    isDeleted?: boolean
    createdAt?: Date | string
    shop: ShopCreateNestedOneWithoutRequestInput
  }

  export type RequestUncheckedCreateWithoutUserInput = {
    id?: string
    shopId: string
    dateFrom: Date | string
    dateTo: Date | string
    done?: boolean
    isDeleted?: boolean
    createdAt?: Date | string
  }

  export type RequestCreateOrConnectWithoutUserInput = {
    where: RequestWhereUniqueInput
    create: XOR<RequestCreateWithoutUserInput, RequestUncheckedCreateWithoutUserInput>
  }

  export type RequestCreateManyUserInputEnvelope = {
    data: RequestCreateManyUserInput | RequestCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type TimeCardCreateWithoutUserInput = {
    id?: string
    workFrom: Date | string
    workTo: Date | string
    breakFrom: Date | string
    breakTo: Date | string
    isDeleted?: boolean
    createdAt?: Date | string
    shop: ShopCreateNestedOneWithoutTimeCardInput
  }

  export type TimeCardUncheckedCreateWithoutUserInput = {
    id?: string
    shopId: string
    workFrom: Date | string
    workTo: Date | string
    breakFrom: Date | string
    breakTo: Date | string
    isDeleted?: boolean
    createdAt?: Date | string
  }

  export type TimeCardCreateOrConnectWithoutUserInput = {
    where: TimeCardWhereUniqueInput
    create: XOR<TimeCardCreateWithoutUserInput, TimeCardUncheckedCreateWithoutUserInput>
  }

  export type TimeCardCreateManyUserInputEnvelope = {
    data: TimeCardCreateManyUserInput | TimeCardCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type InvitationCreateWithoutTargetUserInput = {
    id?: string
    accepted?: boolean
    isDeleted?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    invitedBy: ShopCreateNestedOneWithoutInvitationInput
  }

  export type InvitationUncheckedCreateWithoutTargetUserInput = {
    id?: string
    invitedByShopId: string
    accepted?: boolean
    isDeleted?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type InvitationCreateOrConnectWithoutTargetUserInput = {
    where: InvitationWhereUniqueInput
    create: XOR<InvitationCreateWithoutTargetUserInput, InvitationUncheckedCreateWithoutTargetUserInput>
  }

  export type InvitationCreateManyTargetUserInputEnvelope = {
    data: InvitationCreateManyTargetUserInput | InvitationCreateManyTargetUserInput[]
    skipDuplicates?: boolean
  }

  export type ShopUserBelongingUpsertWithWhereUniqueWithoutUserInput = {
    where: ShopUserBelongingWhereUniqueInput
    update: XOR<ShopUserBelongingUpdateWithoutUserInput, ShopUserBelongingUncheckedUpdateWithoutUserInput>
    create: XOR<ShopUserBelongingCreateWithoutUserInput, ShopUserBelongingUncheckedCreateWithoutUserInput>
  }

  export type ShopUserBelongingUpdateWithWhereUniqueWithoutUserInput = {
    where: ShopUserBelongingWhereUniqueInput
    data: XOR<ShopUserBelongingUpdateWithoutUserInput, ShopUserBelongingUncheckedUpdateWithoutUserInput>
  }

  export type ShopUserBelongingUpdateManyWithWhereWithoutUserInput = {
    where: ShopUserBelongingScalarWhereInput
    data: XOR<ShopUserBelongingUpdateManyMutationInput, ShopUserBelongingUncheckedUpdateManyWithoutUserInput>
  }

  export type StableShiftUpsertWithWhereUniqueWithoutUserInput = {
    where: StableShiftWhereUniqueInput
    update: XOR<StableShiftUpdateWithoutUserInput, StableShiftUncheckedUpdateWithoutUserInput>
    create: XOR<StableShiftCreateWithoutUserInput, StableShiftUncheckedCreateWithoutUserInput>
  }

  export type StableShiftUpdateWithWhereUniqueWithoutUserInput = {
    where: StableShiftWhereUniqueInput
    data: XOR<StableShiftUpdateWithoutUserInput, StableShiftUncheckedUpdateWithoutUserInput>
  }

  export type StableShiftUpdateManyWithWhereWithoutUserInput = {
    where: StableShiftScalarWhereInput
    data: XOR<StableShiftUpdateManyMutationInput, StableShiftUncheckedUpdateManyWithoutUserInput>
  }

  export type UnstableShiftUpsertWithWhereUniqueWithoutUserInput = {
    where: UnstableShiftWhereUniqueInput
    update: XOR<UnstableShiftUpdateWithoutUserInput, UnstableShiftUncheckedUpdateWithoutUserInput>
    create: XOR<UnstableShiftCreateWithoutUserInput, UnstableShiftUncheckedCreateWithoutUserInput>
  }

  export type UnstableShiftUpdateWithWhereUniqueWithoutUserInput = {
    where: UnstableShiftWhereUniqueInput
    data: XOR<UnstableShiftUpdateWithoutUserInput, UnstableShiftUncheckedUpdateWithoutUserInput>
  }

  export type UnstableShiftUpdateManyWithWhereWithoutUserInput = {
    where: UnstableShiftScalarWhereInput
    data: XOR<UnstableShiftUpdateManyMutationInput, UnstableShiftUncheckedUpdateManyWithoutUserInput>
  }

  export type RequestUpsertWithWhereUniqueWithoutUserInput = {
    where: RequestWhereUniqueInput
    update: XOR<RequestUpdateWithoutUserInput, RequestUncheckedUpdateWithoutUserInput>
    create: XOR<RequestCreateWithoutUserInput, RequestUncheckedCreateWithoutUserInput>
  }

  export type RequestUpdateWithWhereUniqueWithoutUserInput = {
    where: RequestWhereUniqueInput
    data: XOR<RequestUpdateWithoutUserInput, RequestUncheckedUpdateWithoutUserInput>
  }

  export type RequestUpdateManyWithWhereWithoutUserInput = {
    where: RequestScalarWhereInput
    data: XOR<RequestUpdateManyMutationInput, RequestUncheckedUpdateManyWithoutUserInput>
  }

  export type TimeCardUpsertWithWhereUniqueWithoutUserInput = {
    where: TimeCardWhereUniqueInput
    update: XOR<TimeCardUpdateWithoutUserInput, TimeCardUncheckedUpdateWithoutUserInput>
    create: XOR<TimeCardCreateWithoutUserInput, TimeCardUncheckedCreateWithoutUserInput>
  }

  export type TimeCardUpdateWithWhereUniqueWithoutUserInput = {
    where: TimeCardWhereUniqueInput
    data: XOR<TimeCardUpdateWithoutUserInput, TimeCardUncheckedUpdateWithoutUserInput>
  }

  export type TimeCardUpdateManyWithWhereWithoutUserInput = {
    where: TimeCardScalarWhereInput
    data: XOR<TimeCardUpdateManyMutationInput, TimeCardUncheckedUpdateManyWithoutUserInput>
  }

  export type InvitationUpsertWithWhereUniqueWithoutTargetUserInput = {
    where: InvitationWhereUniqueInput
    update: XOR<InvitationUpdateWithoutTargetUserInput, InvitationUncheckedUpdateWithoutTargetUserInput>
    create: XOR<InvitationCreateWithoutTargetUserInput, InvitationUncheckedCreateWithoutTargetUserInput>
  }

  export type InvitationUpdateWithWhereUniqueWithoutTargetUserInput = {
    where: InvitationWhereUniqueInput
    data: XOR<InvitationUpdateWithoutTargetUserInput, InvitationUncheckedUpdateWithoutTargetUserInput>
  }

  export type InvitationUpdateManyWithWhereWithoutTargetUserInput = {
    where: InvitationScalarWhereInput
    data: XOR<InvitationUpdateManyMutationInput, InvitationUncheckedUpdateManyWithoutTargetUserInput>
  }

  export type ShopCreateWithoutInvitationInput = {
    id?: string
    shopName: string
    openTime: string
    closeTime: string
    timeUnit: number
    submitFrequency: string
    avatar: string
    useTimeCard: boolean
    isDeleted?: boolean
    createdAt?: Date | string
    organization?: OrganizationShopBelongingCreateNestedManyWithoutShopInput
    user?: ShopUserBelongingCreateNestedManyWithoutShopInput
    operation?: OperationCreateNestedManyWithoutShopInput
    stableShift?: StableShiftCreateNestedManyWithoutShopInput
    unstableShift?: UnstableShiftCreateNestedManyWithoutShopInput
    request?: RequestCreateNestedManyWithoutShopInput
    timeCard?: TimeCardCreateNestedManyWithoutShopInput
    temporaryClosed?: TemporaryClosedCreateNestedManyWithoutShopInput
    announce?: AnnounceCreateNestedManyWithoutShopInput
  }

  export type ShopUncheckedCreateWithoutInvitationInput = {
    id?: string
    shopName: string
    openTime: string
    closeTime: string
    timeUnit: number
    submitFrequency: string
    avatar: string
    useTimeCard: boolean
    isDeleted?: boolean
    createdAt?: Date | string
    organization?: OrganizationShopBelongingUncheckedCreateNestedManyWithoutShopInput
    user?: ShopUserBelongingUncheckedCreateNestedManyWithoutShopInput
    operation?: OperationUncheckedCreateNestedManyWithoutShopInput
    stableShift?: StableShiftUncheckedCreateNestedManyWithoutShopInput
    unstableShift?: UnstableShiftUncheckedCreateNestedManyWithoutShopInput
    request?: RequestUncheckedCreateNestedManyWithoutShopInput
    timeCard?: TimeCardUncheckedCreateNestedManyWithoutShopInput
    temporaryClosed?: TemporaryClosedUncheckedCreateNestedManyWithoutShopInput
    announce?: AnnounceUncheckedCreateNestedManyWithoutShopInput
  }

  export type ShopCreateOrConnectWithoutInvitationInput = {
    where: ShopWhereUniqueInput
    create: XOR<ShopCreateWithoutInvitationInput, ShopUncheckedCreateWithoutInvitationInput>
  }

  export type UserCreateWithoutInvitationInput = {
    id?: string
    userId?: string
    userName: string
    avatar?: string
    isDeleted?: boolean
    createdAt?: Date | string
    shop?: ShopUserBelongingCreateNestedManyWithoutUserInput
    stableShift?: StableShiftCreateNestedManyWithoutUserInput
    unstableShift?: UnstableShiftCreateNestedManyWithoutUserInput
    request?: RequestCreateNestedManyWithoutUserInput
    timeCard?: TimeCardCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutInvitationInput = {
    id?: string
    userId?: string
    userName: string
    avatar?: string
    isDeleted?: boolean
    createdAt?: Date | string
    shop?: ShopUserBelongingUncheckedCreateNestedManyWithoutUserInput
    stableShift?: StableShiftUncheckedCreateNestedManyWithoutUserInput
    unstableShift?: UnstableShiftUncheckedCreateNestedManyWithoutUserInput
    request?: RequestUncheckedCreateNestedManyWithoutUserInput
    timeCard?: TimeCardUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutInvitationInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutInvitationInput, UserUncheckedCreateWithoutInvitationInput>
  }

  export type ShopUpsertWithoutInvitationInput = {
    update: XOR<ShopUpdateWithoutInvitationInput, ShopUncheckedUpdateWithoutInvitationInput>
    create: XOR<ShopCreateWithoutInvitationInput, ShopUncheckedCreateWithoutInvitationInput>
    where?: ShopWhereInput
  }

  export type ShopUpdateToOneWithWhereWithoutInvitationInput = {
    where?: ShopWhereInput
    data: XOR<ShopUpdateWithoutInvitationInput, ShopUncheckedUpdateWithoutInvitationInput>
  }

  export type ShopUpdateWithoutInvitationInput = {
    id?: StringFieldUpdateOperationsInput | string
    shopName?: StringFieldUpdateOperationsInput | string
    openTime?: StringFieldUpdateOperationsInput | string
    closeTime?: StringFieldUpdateOperationsInput | string
    timeUnit?: IntFieldUpdateOperationsInput | number
    submitFrequency?: StringFieldUpdateOperationsInput | string
    avatar?: StringFieldUpdateOperationsInput | string
    useTimeCard?: BoolFieldUpdateOperationsInput | boolean
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    organization?: OrganizationShopBelongingUpdateManyWithoutShopNestedInput
    user?: ShopUserBelongingUpdateManyWithoutShopNestedInput
    operation?: OperationUpdateManyWithoutShopNestedInput
    stableShift?: StableShiftUpdateManyWithoutShopNestedInput
    unstableShift?: UnstableShiftUpdateManyWithoutShopNestedInput
    request?: RequestUpdateManyWithoutShopNestedInput
    timeCard?: TimeCardUpdateManyWithoutShopNestedInput
    temporaryClosed?: TemporaryClosedUpdateManyWithoutShopNestedInput
    announce?: AnnounceUpdateManyWithoutShopNestedInput
  }

  export type ShopUncheckedUpdateWithoutInvitationInput = {
    id?: StringFieldUpdateOperationsInput | string
    shopName?: StringFieldUpdateOperationsInput | string
    openTime?: StringFieldUpdateOperationsInput | string
    closeTime?: StringFieldUpdateOperationsInput | string
    timeUnit?: IntFieldUpdateOperationsInput | number
    submitFrequency?: StringFieldUpdateOperationsInput | string
    avatar?: StringFieldUpdateOperationsInput | string
    useTimeCard?: BoolFieldUpdateOperationsInput | boolean
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    organization?: OrganizationShopBelongingUncheckedUpdateManyWithoutShopNestedInput
    user?: ShopUserBelongingUncheckedUpdateManyWithoutShopNestedInput
    operation?: OperationUncheckedUpdateManyWithoutShopNestedInput
    stableShift?: StableShiftUncheckedUpdateManyWithoutShopNestedInput
    unstableShift?: UnstableShiftUncheckedUpdateManyWithoutShopNestedInput
    request?: RequestUncheckedUpdateManyWithoutShopNestedInput
    timeCard?: TimeCardUncheckedUpdateManyWithoutShopNestedInput
    temporaryClosed?: TemporaryClosedUncheckedUpdateManyWithoutShopNestedInput
    announce?: AnnounceUncheckedUpdateManyWithoutShopNestedInput
  }

  export type UserUpsertWithoutInvitationInput = {
    update: XOR<UserUpdateWithoutInvitationInput, UserUncheckedUpdateWithoutInvitationInput>
    create: XOR<UserCreateWithoutInvitationInput, UserUncheckedCreateWithoutInvitationInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutInvitationInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutInvitationInput, UserUncheckedUpdateWithoutInvitationInput>
  }

  export type UserUpdateWithoutInvitationInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    userName?: StringFieldUpdateOperationsInput | string
    avatar?: StringFieldUpdateOperationsInput | string
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    shop?: ShopUserBelongingUpdateManyWithoutUserNestedInput
    stableShift?: StableShiftUpdateManyWithoutUserNestedInput
    unstableShift?: UnstableShiftUpdateManyWithoutUserNestedInput
    request?: RequestUpdateManyWithoutUserNestedInput
    timeCard?: TimeCardUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutInvitationInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    userName?: StringFieldUpdateOperationsInput | string
    avatar?: StringFieldUpdateOperationsInput | string
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    shop?: ShopUserBelongingUncheckedUpdateManyWithoutUserNestedInput
    stableShift?: StableShiftUncheckedUpdateManyWithoutUserNestedInput
    unstableShift?: UnstableShiftUncheckedUpdateManyWithoutUserNestedInput
    request?: RequestUncheckedUpdateManyWithoutUserNestedInput
    timeCard?: TimeCardUncheckedUpdateManyWithoutUserNestedInput
  }

  export type ShopCreateWithoutOperationInput = {
    id?: string
    shopName: string
    openTime: string
    closeTime: string
    timeUnit: number
    submitFrequency: string
    avatar: string
    useTimeCard: boolean
    isDeleted?: boolean
    createdAt?: Date | string
    organization?: OrganizationShopBelongingCreateNestedManyWithoutShopInput
    user?: ShopUserBelongingCreateNestedManyWithoutShopInput
    stableShift?: StableShiftCreateNestedManyWithoutShopInput
    unstableShift?: UnstableShiftCreateNestedManyWithoutShopInput
    request?: RequestCreateNestedManyWithoutShopInput
    timeCard?: TimeCardCreateNestedManyWithoutShopInput
    temporaryClosed?: TemporaryClosedCreateNestedManyWithoutShopInput
    announce?: AnnounceCreateNestedManyWithoutShopInput
    Invitation?: InvitationCreateNestedManyWithoutInvitedByInput
  }

  export type ShopUncheckedCreateWithoutOperationInput = {
    id?: string
    shopName: string
    openTime: string
    closeTime: string
    timeUnit: number
    submitFrequency: string
    avatar: string
    useTimeCard: boolean
    isDeleted?: boolean
    createdAt?: Date | string
    organization?: OrganizationShopBelongingUncheckedCreateNestedManyWithoutShopInput
    user?: ShopUserBelongingUncheckedCreateNestedManyWithoutShopInput
    stableShift?: StableShiftUncheckedCreateNestedManyWithoutShopInput
    unstableShift?: UnstableShiftUncheckedCreateNestedManyWithoutShopInput
    request?: RequestUncheckedCreateNestedManyWithoutShopInput
    timeCard?: TimeCardUncheckedCreateNestedManyWithoutShopInput
    temporaryClosed?: TemporaryClosedUncheckedCreateNestedManyWithoutShopInput
    announce?: AnnounceUncheckedCreateNestedManyWithoutShopInput
    Invitation?: InvitationUncheckedCreateNestedManyWithoutInvitedByInput
  }

  export type ShopCreateOrConnectWithoutOperationInput = {
    where: ShopWhereUniqueInput
    create: XOR<ShopCreateWithoutOperationInput, ShopUncheckedCreateWithoutOperationInput>
  }

  export type ShopUpsertWithoutOperationInput = {
    update: XOR<ShopUpdateWithoutOperationInput, ShopUncheckedUpdateWithoutOperationInput>
    create: XOR<ShopCreateWithoutOperationInput, ShopUncheckedCreateWithoutOperationInput>
    where?: ShopWhereInput
  }

  export type ShopUpdateToOneWithWhereWithoutOperationInput = {
    where?: ShopWhereInput
    data: XOR<ShopUpdateWithoutOperationInput, ShopUncheckedUpdateWithoutOperationInput>
  }

  export type ShopUpdateWithoutOperationInput = {
    id?: StringFieldUpdateOperationsInput | string
    shopName?: StringFieldUpdateOperationsInput | string
    openTime?: StringFieldUpdateOperationsInput | string
    closeTime?: StringFieldUpdateOperationsInput | string
    timeUnit?: IntFieldUpdateOperationsInput | number
    submitFrequency?: StringFieldUpdateOperationsInput | string
    avatar?: StringFieldUpdateOperationsInput | string
    useTimeCard?: BoolFieldUpdateOperationsInput | boolean
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    organization?: OrganizationShopBelongingUpdateManyWithoutShopNestedInput
    user?: ShopUserBelongingUpdateManyWithoutShopNestedInput
    stableShift?: StableShiftUpdateManyWithoutShopNestedInput
    unstableShift?: UnstableShiftUpdateManyWithoutShopNestedInput
    request?: RequestUpdateManyWithoutShopNestedInput
    timeCard?: TimeCardUpdateManyWithoutShopNestedInput
    temporaryClosed?: TemporaryClosedUpdateManyWithoutShopNestedInput
    announce?: AnnounceUpdateManyWithoutShopNestedInput
    Invitation?: InvitationUpdateManyWithoutInvitedByNestedInput
  }

  export type ShopUncheckedUpdateWithoutOperationInput = {
    id?: StringFieldUpdateOperationsInput | string
    shopName?: StringFieldUpdateOperationsInput | string
    openTime?: StringFieldUpdateOperationsInput | string
    closeTime?: StringFieldUpdateOperationsInput | string
    timeUnit?: IntFieldUpdateOperationsInput | number
    submitFrequency?: StringFieldUpdateOperationsInput | string
    avatar?: StringFieldUpdateOperationsInput | string
    useTimeCard?: BoolFieldUpdateOperationsInput | boolean
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    organization?: OrganizationShopBelongingUncheckedUpdateManyWithoutShopNestedInput
    user?: ShopUserBelongingUncheckedUpdateManyWithoutShopNestedInput
    stableShift?: StableShiftUncheckedUpdateManyWithoutShopNestedInput
    unstableShift?: UnstableShiftUncheckedUpdateManyWithoutShopNestedInput
    request?: RequestUncheckedUpdateManyWithoutShopNestedInput
    timeCard?: TimeCardUncheckedUpdateManyWithoutShopNestedInput
    temporaryClosed?: TemporaryClosedUncheckedUpdateManyWithoutShopNestedInput
    announce?: AnnounceUncheckedUpdateManyWithoutShopNestedInput
    Invitation?: InvitationUncheckedUpdateManyWithoutInvitedByNestedInput
  }

  export type ShopCreateWithoutStableShiftInput = {
    id?: string
    shopName: string
    openTime: string
    closeTime: string
    timeUnit: number
    submitFrequency: string
    avatar: string
    useTimeCard: boolean
    isDeleted?: boolean
    createdAt?: Date | string
    organization?: OrganizationShopBelongingCreateNestedManyWithoutShopInput
    user?: ShopUserBelongingCreateNestedManyWithoutShopInput
    operation?: OperationCreateNestedManyWithoutShopInput
    unstableShift?: UnstableShiftCreateNestedManyWithoutShopInput
    request?: RequestCreateNestedManyWithoutShopInput
    timeCard?: TimeCardCreateNestedManyWithoutShopInput
    temporaryClosed?: TemporaryClosedCreateNestedManyWithoutShopInput
    announce?: AnnounceCreateNestedManyWithoutShopInput
    Invitation?: InvitationCreateNestedManyWithoutInvitedByInput
  }

  export type ShopUncheckedCreateWithoutStableShiftInput = {
    id?: string
    shopName: string
    openTime: string
    closeTime: string
    timeUnit: number
    submitFrequency: string
    avatar: string
    useTimeCard: boolean
    isDeleted?: boolean
    createdAt?: Date | string
    organization?: OrganizationShopBelongingUncheckedCreateNestedManyWithoutShopInput
    user?: ShopUserBelongingUncheckedCreateNestedManyWithoutShopInput
    operation?: OperationUncheckedCreateNestedManyWithoutShopInput
    unstableShift?: UnstableShiftUncheckedCreateNestedManyWithoutShopInput
    request?: RequestUncheckedCreateNestedManyWithoutShopInput
    timeCard?: TimeCardUncheckedCreateNestedManyWithoutShopInput
    temporaryClosed?: TemporaryClosedUncheckedCreateNestedManyWithoutShopInput
    announce?: AnnounceUncheckedCreateNestedManyWithoutShopInput
    Invitation?: InvitationUncheckedCreateNestedManyWithoutInvitedByInput
  }

  export type ShopCreateOrConnectWithoutStableShiftInput = {
    where: ShopWhereUniqueInput
    create: XOR<ShopCreateWithoutStableShiftInput, ShopUncheckedCreateWithoutStableShiftInput>
  }

  export type UserCreateWithoutStableShiftInput = {
    id?: string
    userId?: string
    userName: string
    avatar?: string
    isDeleted?: boolean
    createdAt?: Date | string
    shop?: ShopUserBelongingCreateNestedManyWithoutUserInput
    unstableShift?: UnstableShiftCreateNestedManyWithoutUserInput
    request?: RequestCreateNestedManyWithoutUserInput
    timeCard?: TimeCardCreateNestedManyWithoutUserInput
    Invitation?: InvitationCreateNestedManyWithoutTargetUserInput
  }

  export type UserUncheckedCreateWithoutStableShiftInput = {
    id?: string
    userId?: string
    userName: string
    avatar?: string
    isDeleted?: boolean
    createdAt?: Date | string
    shop?: ShopUserBelongingUncheckedCreateNestedManyWithoutUserInput
    unstableShift?: UnstableShiftUncheckedCreateNestedManyWithoutUserInput
    request?: RequestUncheckedCreateNestedManyWithoutUserInput
    timeCard?: TimeCardUncheckedCreateNestedManyWithoutUserInput
    Invitation?: InvitationUncheckedCreateNestedManyWithoutTargetUserInput
  }

  export type UserCreateOrConnectWithoutStableShiftInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutStableShiftInput, UserUncheckedCreateWithoutStableShiftInput>
  }

  export type ShopUpsertWithoutStableShiftInput = {
    update: XOR<ShopUpdateWithoutStableShiftInput, ShopUncheckedUpdateWithoutStableShiftInput>
    create: XOR<ShopCreateWithoutStableShiftInput, ShopUncheckedCreateWithoutStableShiftInput>
    where?: ShopWhereInput
  }

  export type ShopUpdateToOneWithWhereWithoutStableShiftInput = {
    where?: ShopWhereInput
    data: XOR<ShopUpdateWithoutStableShiftInput, ShopUncheckedUpdateWithoutStableShiftInput>
  }

  export type ShopUpdateWithoutStableShiftInput = {
    id?: StringFieldUpdateOperationsInput | string
    shopName?: StringFieldUpdateOperationsInput | string
    openTime?: StringFieldUpdateOperationsInput | string
    closeTime?: StringFieldUpdateOperationsInput | string
    timeUnit?: IntFieldUpdateOperationsInput | number
    submitFrequency?: StringFieldUpdateOperationsInput | string
    avatar?: StringFieldUpdateOperationsInput | string
    useTimeCard?: BoolFieldUpdateOperationsInput | boolean
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    organization?: OrganizationShopBelongingUpdateManyWithoutShopNestedInput
    user?: ShopUserBelongingUpdateManyWithoutShopNestedInput
    operation?: OperationUpdateManyWithoutShopNestedInput
    unstableShift?: UnstableShiftUpdateManyWithoutShopNestedInput
    request?: RequestUpdateManyWithoutShopNestedInput
    timeCard?: TimeCardUpdateManyWithoutShopNestedInput
    temporaryClosed?: TemporaryClosedUpdateManyWithoutShopNestedInput
    announce?: AnnounceUpdateManyWithoutShopNestedInput
    Invitation?: InvitationUpdateManyWithoutInvitedByNestedInput
  }

  export type ShopUncheckedUpdateWithoutStableShiftInput = {
    id?: StringFieldUpdateOperationsInput | string
    shopName?: StringFieldUpdateOperationsInput | string
    openTime?: StringFieldUpdateOperationsInput | string
    closeTime?: StringFieldUpdateOperationsInput | string
    timeUnit?: IntFieldUpdateOperationsInput | number
    submitFrequency?: StringFieldUpdateOperationsInput | string
    avatar?: StringFieldUpdateOperationsInput | string
    useTimeCard?: BoolFieldUpdateOperationsInput | boolean
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    organization?: OrganizationShopBelongingUncheckedUpdateManyWithoutShopNestedInput
    user?: ShopUserBelongingUncheckedUpdateManyWithoutShopNestedInput
    operation?: OperationUncheckedUpdateManyWithoutShopNestedInput
    unstableShift?: UnstableShiftUncheckedUpdateManyWithoutShopNestedInput
    request?: RequestUncheckedUpdateManyWithoutShopNestedInput
    timeCard?: TimeCardUncheckedUpdateManyWithoutShopNestedInput
    temporaryClosed?: TemporaryClosedUncheckedUpdateManyWithoutShopNestedInput
    announce?: AnnounceUncheckedUpdateManyWithoutShopNestedInput
    Invitation?: InvitationUncheckedUpdateManyWithoutInvitedByNestedInput
  }

  export type UserUpsertWithoutStableShiftInput = {
    update: XOR<UserUpdateWithoutStableShiftInput, UserUncheckedUpdateWithoutStableShiftInput>
    create: XOR<UserCreateWithoutStableShiftInput, UserUncheckedCreateWithoutStableShiftInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutStableShiftInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutStableShiftInput, UserUncheckedUpdateWithoutStableShiftInput>
  }

  export type UserUpdateWithoutStableShiftInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    userName?: StringFieldUpdateOperationsInput | string
    avatar?: StringFieldUpdateOperationsInput | string
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    shop?: ShopUserBelongingUpdateManyWithoutUserNestedInput
    unstableShift?: UnstableShiftUpdateManyWithoutUserNestedInput
    request?: RequestUpdateManyWithoutUserNestedInput
    timeCard?: TimeCardUpdateManyWithoutUserNestedInput
    Invitation?: InvitationUpdateManyWithoutTargetUserNestedInput
  }

  export type UserUncheckedUpdateWithoutStableShiftInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    userName?: StringFieldUpdateOperationsInput | string
    avatar?: StringFieldUpdateOperationsInput | string
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    shop?: ShopUserBelongingUncheckedUpdateManyWithoutUserNestedInput
    unstableShift?: UnstableShiftUncheckedUpdateManyWithoutUserNestedInput
    request?: RequestUncheckedUpdateManyWithoutUserNestedInput
    timeCard?: TimeCardUncheckedUpdateManyWithoutUserNestedInput
    Invitation?: InvitationUncheckedUpdateManyWithoutTargetUserNestedInput
  }

  export type ShopCreateWithoutUnstableShiftInput = {
    id?: string
    shopName: string
    openTime: string
    closeTime: string
    timeUnit: number
    submitFrequency: string
    avatar: string
    useTimeCard: boolean
    isDeleted?: boolean
    createdAt?: Date | string
    organization?: OrganizationShopBelongingCreateNestedManyWithoutShopInput
    user?: ShopUserBelongingCreateNestedManyWithoutShopInput
    operation?: OperationCreateNestedManyWithoutShopInput
    stableShift?: StableShiftCreateNestedManyWithoutShopInput
    request?: RequestCreateNestedManyWithoutShopInput
    timeCard?: TimeCardCreateNestedManyWithoutShopInput
    temporaryClosed?: TemporaryClosedCreateNestedManyWithoutShopInput
    announce?: AnnounceCreateNestedManyWithoutShopInput
    Invitation?: InvitationCreateNestedManyWithoutInvitedByInput
  }

  export type ShopUncheckedCreateWithoutUnstableShiftInput = {
    id?: string
    shopName: string
    openTime: string
    closeTime: string
    timeUnit: number
    submitFrequency: string
    avatar: string
    useTimeCard: boolean
    isDeleted?: boolean
    createdAt?: Date | string
    organization?: OrganizationShopBelongingUncheckedCreateNestedManyWithoutShopInput
    user?: ShopUserBelongingUncheckedCreateNestedManyWithoutShopInput
    operation?: OperationUncheckedCreateNestedManyWithoutShopInput
    stableShift?: StableShiftUncheckedCreateNestedManyWithoutShopInput
    request?: RequestUncheckedCreateNestedManyWithoutShopInput
    timeCard?: TimeCardUncheckedCreateNestedManyWithoutShopInput
    temporaryClosed?: TemporaryClosedUncheckedCreateNestedManyWithoutShopInput
    announce?: AnnounceUncheckedCreateNestedManyWithoutShopInput
    Invitation?: InvitationUncheckedCreateNestedManyWithoutInvitedByInput
  }

  export type ShopCreateOrConnectWithoutUnstableShiftInput = {
    where: ShopWhereUniqueInput
    create: XOR<ShopCreateWithoutUnstableShiftInput, ShopUncheckedCreateWithoutUnstableShiftInput>
  }

  export type UserCreateWithoutUnstableShiftInput = {
    id?: string
    userId?: string
    userName: string
    avatar?: string
    isDeleted?: boolean
    createdAt?: Date | string
    shop?: ShopUserBelongingCreateNestedManyWithoutUserInput
    stableShift?: StableShiftCreateNestedManyWithoutUserInput
    request?: RequestCreateNestedManyWithoutUserInput
    timeCard?: TimeCardCreateNestedManyWithoutUserInput
    Invitation?: InvitationCreateNestedManyWithoutTargetUserInput
  }

  export type UserUncheckedCreateWithoutUnstableShiftInput = {
    id?: string
    userId?: string
    userName: string
    avatar?: string
    isDeleted?: boolean
    createdAt?: Date | string
    shop?: ShopUserBelongingUncheckedCreateNestedManyWithoutUserInput
    stableShift?: StableShiftUncheckedCreateNestedManyWithoutUserInput
    request?: RequestUncheckedCreateNestedManyWithoutUserInput
    timeCard?: TimeCardUncheckedCreateNestedManyWithoutUserInput
    Invitation?: InvitationUncheckedCreateNestedManyWithoutTargetUserInput
  }

  export type UserCreateOrConnectWithoutUnstableShiftInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutUnstableShiftInput, UserUncheckedCreateWithoutUnstableShiftInput>
  }

  export type ShopUpsertWithoutUnstableShiftInput = {
    update: XOR<ShopUpdateWithoutUnstableShiftInput, ShopUncheckedUpdateWithoutUnstableShiftInput>
    create: XOR<ShopCreateWithoutUnstableShiftInput, ShopUncheckedCreateWithoutUnstableShiftInput>
    where?: ShopWhereInput
  }

  export type ShopUpdateToOneWithWhereWithoutUnstableShiftInput = {
    where?: ShopWhereInput
    data: XOR<ShopUpdateWithoutUnstableShiftInput, ShopUncheckedUpdateWithoutUnstableShiftInput>
  }

  export type ShopUpdateWithoutUnstableShiftInput = {
    id?: StringFieldUpdateOperationsInput | string
    shopName?: StringFieldUpdateOperationsInput | string
    openTime?: StringFieldUpdateOperationsInput | string
    closeTime?: StringFieldUpdateOperationsInput | string
    timeUnit?: IntFieldUpdateOperationsInput | number
    submitFrequency?: StringFieldUpdateOperationsInput | string
    avatar?: StringFieldUpdateOperationsInput | string
    useTimeCard?: BoolFieldUpdateOperationsInput | boolean
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    organization?: OrganizationShopBelongingUpdateManyWithoutShopNestedInput
    user?: ShopUserBelongingUpdateManyWithoutShopNestedInput
    operation?: OperationUpdateManyWithoutShopNestedInput
    stableShift?: StableShiftUpdateManyWithoutShopNestedInput
    request?: RequestUpdateManyWithoutShopNestedInput
    timeCard?: TimeCardUpdateManyWithoutShopNestedInput
    temporaryClosed?: TemporaryClosedUpdateManyWithoutShopNestedInput
    announce?: AnnounceUpdateManyWithoutShopNestedInput
    Invitation?: InvitationUpdateManyWithoutInvitedByNestedInput
  }

  export type ShopUncheckedUpdateWithoutUnstableShiftInput = {
    id?: StringFieldUpdateOperationsInput | string
    shopName?: StringFieldUpdateOperationsInput | string
    openTime?: StringFieldUpdateOperationsInput | string
    closeTime?: StringFieldUpdateOperationsInput | string
    timeUnit?: IntFieldUpdateOperationsInput | number
    submitFrequency?: StringFieldUpdateOperationsInput | string
    avatar?: StringFieldUpdateOperationsInput | string
    useTimeCard?: BoolFieldUpdateOperationsInput | boolean
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    organization?: OrganizationShopBelongingUncheckedUpdateManyWithoutShopNestedInput
    user?: ShopUserBelongingUncheckedUpdateManyWithoutShopNestedInput
    operation?: OperationUncheckedUpdateManyWithoutShopNestedInput
    stableShift?: StableShiftUncheckedUpdateManyWithoutShopNestedInput
    request?: RequestUncheckedUpdateManyWithoutShopNestedInput
    timeCard?: TimeCardUncheckedUpdateManyWithoutShopNestedInput
    temporaryClosed?: TemporaryClosedUncheckedUpdateManyWithoutShopNestedInput
    announce?: AnnounceUncheckedUpdateManyWithoutShopNestedInput
    Invitation?: InvitationUncheckedUpdateManyWithoutInvitedByNestedInput
  }

  export type UserUpsertWithoutUnstableShiftInput = {
    update: XOR<UserUpdateWithoutUnstableShiftInput, UserUncheckedUpdateWithoutUnstableShiftInput>
    create: XOR<UserCreateWithoutUnstableShiftInput, UserUncheckedCreateWithoutUnstableShiftInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutUnstableShiftInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutUnstableShiftInput, UserUncheckedUpdateWithoutUnstableShiftInput>
  }

  export type UserUpdateWithoutUnstableShiftInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    userName?: StringFieldUpdateOperationsInput | string
    avatar?: StringFieldUpdateOperationsInput | string
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    shop?: ShopUserBelongingUpdateManyWithoutUserNestedInput
    stableShift?: StableShiftUpdateManyWithoutUserNestedInput
    request?: RequestUpdateManyWithoutUserNestedInput
    timeCard?: TimeCardUpdateManyWithoutUserNestedInput
    Invitation?: InvitationUpdateManyWithoutTargetUserNestedInput
  }

  export type UserUncheckedUpdateWithoutUnstableShiftInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    userName?: StringFieldUpdateOperationsInput | string
    avatar?: StringFieldUpdateOperationsInput | string
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    shop?: ShopUserBelongingUncheckedUpdateManyWithoutUserNestedInput
    stableShift?: StableShiftUncheckedUpdateManyWithoutUserNestedInput
    request?: RequestUncheckedUpdateManyWithoutUserNestedInput
    timeCard?: TimeCardUncheckedUpdateManyWithoutUserNestedInput
    Invitation?: InvitationUncheckedUpdateManyWithoutTargetUserNestedInput
  }

  export type ShopCreateWithoutRequestInput = {
    id?: string
    shopName: string
    openTime: string
    closeTime: string
    timeUnit: number
    submitFrequency: string
    avatar: string
    useTimeCard: boolean
    isDeleted?: boolean
    createdAt?: Date | string
    organization?: OrganizationShopBelongingCreateNestedManyWithoutShopInput
    user?: ShopUserBelongingCreateNestedManyWithoutShopInput
    operation?: OperationCreateNestedManyWithoutShopInput
    stableShift?: StableShiftCreateNestedManyWithoutShopInput
    unstableShift?: UnstableShiftCreateNestedManyWithoutShopInput
    timeCard?: TimeCardCreateNestedManyWithoutShopInput
    temporaryClosed?: TemporaryClosedCreateNestedManyWithoutShopInput
    announce?: AnnounceCreateNestedManyWithoutShopInput
    Invitation?: InvitationCreateNestedManyWithoutInvitedByInput
  }

  export type ShopUncheckedCreateWithoutRequestInput = {
    id?: string
    shopName: string
    openTime: string
    closeTime: string
    timeUnit: number
    submitFrequency: string
    avatar: string
    useTimeCard: boolean
    isDeleted?: boolean
    createdAt?: Date | string
    organization?: OrganizationShopBelongingUncheckedCreateNestedManyWithoutShopInput
    user?: ShopUserBelongingUncheckedCreateNestedManyWithoutShopInput
    operation?: OperationUncheckedCreateNestedManyWithoutShopInput
    stableShift?: StableShiftUncheckedCreateNestedManyWithoutShopInput
    unstableShift?: UnstableShiftUncheckedCreateNestedManyWithoutShopInput
    timeCard?: TimeCardUncheckedCreateNestedManyWithoutShopInput
    temporaryClosed?: TemporaryClosedUncheckedCreateNestedManyWithoutShopInput
    announce?: AnnounceUncheckedCreateNestedManyWithoutShopInput
    Invitation?: InvitationUncheckedCreateNestedManyWithoutInvitedByInput
  }

  export type ShopCreateOrConnectWithoutRequestInput = {
    where: ShopWhereUniqueInput
    create: XOR<ShopCreateWithoutRequestInput, ShopUncheckedCreateWithoutRequestInput>
  }

  export type UserCreateWithoutRequestInput = {
    id?: string
    userId?: string
    userName: string
    avatar?: string
    isDeleted?: boolean
    createdAt?: Date | string
    shop?: ShopUserBelongingCreateNestedManyWithoutUserInput
    stableShift?: StableShiftCreateNestedManyWithoutUserInput
    unstableShift?: UnstableShiftCreateNestedManyWithoutUserInput
    timeCard?: TimeCardCreateNestedManyWithoutUserInput
    Invitation?: InvitationCreateNestedManyWithoutTargetUserInput
  }

  export type UserUncheckedCreateWithoutRequestInput = {
    id?: string
    userId?: string
    userName: string
    avatar?: string
    isDeleted?: boolean
    createdAt?: Date | string
    shop?: ShopUserBelongingUncheckedCreateNestedManyWithoutUserInput
    stableShift?: StableShiftUncheckedCreateNestedManyWithoutUserInput
    unstableShift?: UnstableShiftUncheckedCreateNestedManyWithoutUserInput
    timeCard?: TimeCardUncheckedCreateNestedManyWithoutUserInput
    Invitation?: InvitationUncheckedCreateNestedManyWithoutTargetUserInput
  }

  export type UserCreateOrConnectWithoutRequestInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutRequestInput, UserUncheckedCreateWithoutRequestInput>
  }

  export type ShopUpsertWithoutRequestInput = {
    update: XOR<ShopUpdateWithoutRequestInput, ShopUncheckedUpdateWithoutRequestInput>
    create: XOR<ShopCreateWithoutRequestInput, ShopUncheckedCreateWithoutRequestInput>
    where?: ShopWhereInput
  }

  export type ShopUpdateToOneWithWhereWithoutRequestInput = {
    where?: ShopWhereInput
    data: XOR<ShopUpdateWithoutRequestInput, ShopUncheckedUpdateWithoutRequestInput>
  }

  export type ShopUpdateWithoutRequestInput = {
    id?: StringFieldUpdateOperationsInput | string
    shopName?: StringFieldUpdateOperationsInput | string
    openTime?: StringFieldUpdateOperationsInput | string
    closeTime?: StringFieldUpdateOperationsInput | string
    timeUnit?: IntFieldUpdateOperationsInput | number
    submitFrequency?: StringFieldUpdateOperationsInput | string
    avatar?: StringFieldUpdateOperationsInput | string
    useTimeCard?: BoolFieldUpdateOperationsInput | boolean
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    organization?: OrganizationShopBelongingUpdateManyWithoutShopNestedInput
    user?: ShopUserBelongingUpdateManyWithoutShopNestedInput
    operation?: OperationUpdateManyWithoutShopNestedInput
    stableShift?: StableShiftUpdateManyWithoutShopNestedInput
    unstableShift?: UnstableShiftUpdateManyWithoutShopNestedInput
    timeCard?: TimeCardUpdateManyWithoutShopNestedInput
    temporaryClosed?: TemporaryClosedUpdateManyWithoutShopNestedInput
    announce?: AnnounceUpdateManyWithoutShopNestedInput
    Invitation?: InvitationUpdateManyWithoutInvitedByNestedInput
  }

  export type ShopUncheckedUpdateWithoutRequestInput = {
    id?: StringFieldUpdateOperationsInput | string
    shopName?: StringFieldUpdateOperationsInput | string
    openTime?: StringFieldUpdateOperationsInput | string
    closeTime?: StringFieldUpdateOperationsInput | string
    timeUnit?: IntFieldUpdateOperationsInput | number
    submitFrequency?: StringFieldUpdateOperationsInput | string
    avatar?: StringFieldUpdateOperationsInput | string
    useTimeCard?: BoolFieldUpdateOperationsInput | boolean
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    organization?: OrganizationShopBelongingUncheckedUpdateManyWithoutShopNestedInput
    user?: ShopUserBelongingUncheckedUpdateManyWithoutShopNestedInput
    operation?: OperationUncheckedUpdateManyWithoutShopNestedInput
    stableShift?: StableShiftUncheckedUpdateManyWithoutShopNestedInput
    unstableShift?: UnstableShiftUncheckedUpdateManyWithoutShopNestedInput
    timeCard?: TimeCardUncheckedUpdateManyWithoutShopNestedInput
    temporaryClosed?: TemporaryClosedUncheckedUpdateManyWithoutShopNestedInput
    announce?: AnnounceUncheckedUpdateManyWithoutShopNestedInput
    Invitation?: InvitationUncheckedUpdateManyWithoutInvitedByNestedInput
  }

  export type UserUpsertWithoutRequestInput = {
    update: XOR<UserUpdateWithoutRequestInput, UserUncheckedUpdateWithoutRequestInput>
    create: XOR<UserCreateWithoutRequestInput, UserUncheckedCreateWithoutRequestInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutRequestInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutRequestInput, UserUncheckedUpdateWithoutRequestInput>
  }

  export type UserUpdateWithoutRequestInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    userName?: StringFieldUpdateOperationsInput | string
    avatar?: StringFieldUpdateOperationsInput | string
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    shop?: ShopUserBelongingUpdateManyWithoutUserNestedInput
    stableShift?: StableShiftUpdateManyWithoutUserNestedInput
    unstableShift?: UnstableShiftUpdateManyWithoutUserNestedInput
    timeCard?: TimeCardUpdateManyWithoutUserNestedInput
    Invitation?: InvitationUpdateManyWithoutTargetUserNestedInput
  }

  export type UserUncheckedUpdateWithoutRequestInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    userName?: StringFieldUpdateOperationsInput | string
    avatar?: StringFieldUpdateOperationsInput | string
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    shop?: ShopUserBelongingUncheckedUpdateManyWithoutUserNestedInput
    stableShift?: StableShiftUncheckedUpdateManyWithoutUserNestedInput
    unstableShift?: UnstableShiftUncheckedUpdateManyWithoutUserNestedInput
    timeCard?: TimeCardUncheckedUpdateManyWithoutUserNestedInput
    Invitation?: InvitationUncheckedUpdateManyWithoutTargetUserNestedInput
  }

  export type ShopCreateWithoutTimeCardInput = {
    id?: string
    shopName: string
    openTime: string
    closeTime: string
    timeUnit: number
    submitFrequency: string
    avatar: string
    useTimeCard: boolean
    isDeleted?: boolean
    createdAt?: Date | string
    organization?: OrganizationShopBelongingCreateNestedManyWithoutShopInput
    user?: ShopUserBelongingCreateNestedManyWithoutShopInput
    operation?: OperationCreateNestedManyWithoutShopInput
    stableShift?: StableShiftCreateNestedManyWithoutShopInput
    unstableShift?: UnstableShiftCreateNestedManyWithoutShopInput
    request?: RequestCreateNestedManyWithoutShopInput
    temporaryClosed?: TemporaryClosedCreateNestedManyWithoutShopInput
    announce?: AnnounceCreateNestedManyWithoutShopInput
    Invitation?: InvitationCreateNestedManyWithoutInvitedByInput
  }

  export type ShopUncheckedCreateWithoutTimeCardInput = {
    id?: string
    shopName: string
    openTime: string
    closeTime: string
    timeUnit: number
    submitFrequency: string
    avatar: string
    useTimeCard: boolean
    isDeleted?: boolean
    createdAt?: Date | string
    organization?: OrganizationShopBelongingUncheckedCreateNestedManyWithoutShopInput
    user?: ShopUserBelongingUncheckedCreateNestedManyWithoutShopInput
    operation?: OperationUncheckedCreateNestedManyWithoutShopInput
    stableShift?: StableShiftUncheckedCreateNestedManyWithoutShopInput
    unstableShift?: UnstableShiftUncheckedCreateNestedManyWithoutShopInput
    request?: RequestUncheckedCreateNestedManyWithoutShopInput
    temporaryClosed?: TemporaryClosedUncheckedCreateNestedManyWithoutShopInput
    announce?: AnnounceUncheckedCreateNestedManyWithoutShopInput
    Invitation?: InvitationUncheckedCreateNestedManyWithoutInvitedByInput
  }

  export type ShopCreateOrConnectWithoutTimeCardInput = {
    where: ShopWhereUniqueInput
    create: XOR<ShopCreateWithoutTimeCardInput, ShopUncheckedCreateWithoutTimeCardInput>
  }

  export type UserCreateWithoutTimeCardInput = {
    id?: string
    userId?: string
    userName: string
    avatar?: string
    isDeleted?: boolean
    createdAt?: Date | string
    shop?: ShopUserBelongingCreateNestedManyWithoutUserInput
    stableShift?: StableShiftCreateNestedManyWithoutUserInput
    unstableShift?: UnstableShiftCreateNestedManyWithoutUserInput
    request?: RequestCreateNestedManyWithoutUserInput
    Invitation?: InvitationCreateNestedManyWithoutTargetUserInput
  }

  export type UserUncheckedCreateWithoutTimeCardInput = {
    id?: string
    userId?: string
    userName: string
    avatar?: string
    isDeleted?: boolean
    createdAt?: Date | string
    shop?: ShopUserBelongingUncheckedCreateNestedManyWithoutUserInput
    stableShift?: StableShiftUncheckedCreateNestedManyWithoutUserInput
    unstableShift?: UnstableShiftUncheckedCreateNestedManyWithoutUserInput
    request?: RequestUncheckedCreateNestedManyWithoutUserInput
    Invitation?: InvitationUncheckedCreateNestedManyWithoutTargetUserInput
  }

  export type UserCreateOrConnectWithoutTimeCardInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutTimeCardInput, UserUncheckedCreateWithoutTimeCardInput>
  }

  export type ShopUpsertWithoutTimeCardInput = {
    update: XOR<ShopUpdateWithoutTimeCardInput, ShopUncheckedUpdateWithoutTimeCardInput>
    create: XOR<ShopCreateWithoutTimeCardInput, ShopUncheckedCreateWithoutTimeCardInput>
    where?: ShopWhereInput
  }

  export type ShopUpdateToOneWithWhereWithoutTimeCardInput = {
    where?: ShopWhereInput
    data: XOR<ShopUpdateWithoutTimeCardInput, ShopUncheckedUpdateWithoutTimeCardInput>
  }

  export type ShopUpdateWithoutTimeCardInput = {
    id?: StringFieldUpdateOperationsInput | string
    shopName?: StringFieldUpdateOperationsInput | string
    openTime?: StringFieldUpdateOperationsInput | string
    closeTime?: StringFieldUpdateOperationsInput | string
    timeUnit?: IntFieldUpdateOperationsInput | number
    submitFrequency?: StringFieldUpdateOperationsInput | string
    avatar?: StringFieldUpdateOperationsInput | string
    useTimeCard?: BoolFieldUpdateOperationsInput | boolean
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    organization?: OrganizationShopBelongingUpdateManyWithoutShopNestedInput
    user?: ShopUserBelongingUpdateManyWithoutShopNestedInput
    operation?: OperationUpdateManyWithoutShopNestedInput
    stableShift?: StableShiftUpdateManyWithoutShopNestedInput
    unstableShift?: UnstableShiftUpdateManyWithoutShopNestedInput
    request?: RequestUpdateManyWithoutShopNestedInput
    temporaryClosed?: TemporaryClosedUpdateManyWithoutShopNestedInput
    announce?: AnnounceUpdateManyWithoutShopNestedInput
    Invitation?: InvitationUpdateManyWithoutInvitedByNestedInput
  }

  export type ShopUncheckedUpdateWithoutTimeCardInput = {
    id?: StringFieldUpdateOperationsInput | string
    shopName?: StringFieldUpdateOperationsInput | string
    openTime?: StringFieldUpdateOperationsInput | string
    closeTime?: StringFieldUpdateOperationsInput | string
    timeUnit?: IntFieldUpdateOperationsInput | number
    submitFrequency?: StringFieldUpdateOperationsInput | string
    avatar?: StringFieldUpdateOperationsInput | string
    useTimeCard?: BoolFieldUpdateOperationsInput | boolean
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    organization?: OrganizationShopBelongingUncheckedUpdateManyWithoutShopNestedInput
    user?: ShopUserBelongingUncheckedUpdateManyWithoutShopNestedInput
    operation?: OperationUncheckedUpdateManyWithoutShopNestedInput
    stableShift?: StableShiftUncheckedUpdateManyWithoutShopNestedInput
    unstableShift?: UnstableShiftUncheckedUpdateManyWithoutShopNestedInput
    request?: RequestUncheckedUpdateManyWithoutShopNestedInput
    temporaryClosed?: TemporaryClosedUncheckedUpdateManyWithoutShopNestedInput
    announce?: AnnounceUncheckedUpdateManyWithoutShopNestedInput
    Invitation?: InvitationUncheckedUpdateManyWithoutInvitedByNestedInput
  }

  export type UserUpsertWithoutTimeCardInput = {
    update: XOR<UserUpdateWithoutTimeCardInput, UserUncheckedUpdateWithoutTimeCardInput>
    create: XOR<UserCreateWithoutTimeCardInput, UserUncheckedCreateWithoutTimeCardInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutTimeCardInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutTimeCardInput, UserUncheckedUpdateWithoutTimeCardInput>
  }

  export type UserUpdateWithoutTimeCardInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    userName?: StringFieldUpdateOperationsInput | string
    avatar?: StringFieldUpdateOperationsInput | string
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    shop?: ShopUserBelongingUpdateManyWithoutUserNestedInput
    stableShift?: StableShiftUpdateManyWithoutUserNestedInput
    unstableShift?: UnstableShiftUpdateManyWithoutUserNestedInput
    request?: RequestUpdateManyWithoutUserNestedInput
    Invitation?: InvitationUpdateManyWithoutTargetUserNestedInput
  }

  export type UserUncheckedUpdateWithoutTimeCardInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    userName?: StringFieldUpdateOperationsInput | string
    avatar?: StringFieldUpdateOperationsInput | string
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    shop?: ShopUserBelongingUncheckedUpdateManyWithoutUserNestedInput
    stableShift?: StableShiftUncheckedUpdateManyWithoutUserNestedInput
    unstableShift?: UnstableShiftUncheckedUpdateManyWithoutUserNestedInput
    request?: RequestUncheckedUpdateManyWithoutUserNestedInput
    Invitation?: InvitationUncheckedUpdateManyWithoutTargetUserNestedInput
  }

  export type OrganizationCreateWithoutTemporaryClosedInput = {
    id?: string
    organizationName: string
    isDeleted?: boolean
    createdAt?: Date | string
    shop?: OrganizationShopBelongingCreateNestedManyWithoutOrganizationInput
    announce?: AnnounceCreateNestedManyWithoutOrganizationInput
  }

  export type OrganizationUncheckedCreateWithoutTemporaryClosedInput = {
    id?: string
    organizationName: string
    isDeleted?: boolean
    createdAt?: Date | string
    shop?: OrganizationShopBelongingUncheckedCreateNestedManyWithoutOrganizationInput
    announce?: AnnounceUncheckedCreateNestedManyWithoutOrganizationInput
  }

  export type OrganizationCreateOrConnectWithoutTemporaryClosedInput = {
    where: OrganizationWhereUniqueInput
    create: XOR<OrganizationCreateWithoutTemporaryClosedInput, OrganizationUncheckedCreateWithoutTemporaryClosedInput>
  }

  export type ShopCreateWithoutTemporaryClosedInput = {
    id?: string
    shopName: string
    openTime: string
    closeTime: string
    timeUnit: number
    submitFrequency: string
    avatar: string
    useTimeCard: boolean
    isDeleted?: boolean
    createdAt?: Date | string
    organization?: OrganizationShopBelongingCreateNestedManyWithoutShopInput
    user?: ShopUserBelongingCreateNestedManyWithoutShopInput
    operation?: OperationCreateNestedManyWithoutShopInput
    stableShift?: StableShiftCreateNestedManyWithoutShopInput
    unstableShift?: UnstableShiftCreateNestedManyWithoutShopInput
    request?: RequestCreateNestedManyWithoutShopInput
    timeCard?: TimeCardCreateNestedManyWithoutShopInput
    announce?: AnnounceCreateNestedManyWithoutShopInput
    Invitation?: InvitationCreateNestedManyWithoutInvitedByInput
  }

  export type ShopUncheckedCreateWithoutTemporaryClosedInput = {
    id?: string
    shopName: string
    openTime: string
    closeTime: string
    timeUnit: number
    submitFrequency: string
    avatar: string
    useTimeCard: boolean
    isDeleted?: boolean
    createdAt?: Date | string
    organization?: OrganizationShopBelongingUncheckedCreateNestedManyWithoutShopInput
    user?: ShopUserBelongingUncheckedCreateNestedManyWithoutShopInput
    operation?: OperationUncheckedCreateNestedManyWithoutShopInput
    stableShift?: StableShiftUncheckedCreateNestedManyWithoutShopInput
    unstableShift?: UnstableShiftUncheckedCreateNestedManyWithoutShopInput
    request?: RequestUncheckedCreateNestedManyWithoutShopInput
    timeCard?: TimeCardUncheckedCreateNestedManyWithoutShopInput
    announce?: AnnounceUncheckedCreateNestedManyWithoutShopInput
    Invitation?: InvitationUncheckedCreateNestedManyWithoutInvitedByInput
  }

  export type ShopCreateOrConnectWithoutTemporaryClosedInput = {
    where: ShopWhereUniqueInput
    create: XOR<ShopCreateWithoutTemporaryClosedInput, ShopUncheckedCreateWithoutTemporaryClosedInput>
  }

  export type OrganizationUpsertWithoutTemporaryClosedInput = {
    update: XOR<OrganizationUpdateWithoutTemporaryClosedInput, OrganizationUncheckedUpdateWithoutTemporaryClosedInput>
    create: XOR<OrganizationCreateWithoutTemporaryClosedInput, OrganizationUncheckedCreateWithoutTemporaryClosedInput>
    where?: OrganizationWhereInput
  }

  export type OrganizationUpdateToOneWithWhereWithoutTemporaryClosedInput = {
    where?: OrganizationWhereInput
    data: XOR<OrganizationUpdateWithoutTemporaryClosedInput, OrganizationUncheckedUpdateWithoutTemporaryClosedInput>
  }

  export type OrganizationUpdateWithoutTemporaryClosedInput = {
    id?: StringFieldUpdateOperationsInput | string
    organizationName?: StringFieldUpdateOperationsInput | string
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    shop?: OrganizationShopBelongingUpdateManyWithoutOrganizationNestedInput
    announce?: AnnounceUpdateManyWithoutOrganizationNestedInput
  }

  export type OrganizationUncheckedUpdateWithoutTemporaryClosedInput = {
    id?: StringFieldUpdateOperationsInput | string
    organizationName?: StringFieldUpdateOperationsInput | string
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    shop?: OrganizationShopBelongingUncheckedUpdateManyWithoutOrganizationNestedInput
    announce?: AnnounceUncheckedUpdateManyWithoutOrganizationNestedInput
  }

  export type ShopUpsertWithoutTemporaryClosedInput = {
    update: XOR<ShopUpdateWithoutTemporaryClosedInput, ShopUncheckedUpdateWithoutTemporaryClosedInput>
    create: XOR<ShopCreateWithoutTemporaryClosedInput, ShopUncheckedCreateWithoutTemporaryClosedInput>
    where?: ShopWhereInput
  }

  export type ShopUpdateToOneWithWhereWithoutTemporaryClosedInput = {
    where?: ShopWhereInput
    data: XOR<ShopUpdateWithoutTemporaryClosedInput, ShopUncheckedUpdateWithoutTemporaryClosedInput>
  }

  export type ShopUpdateWithoutTemporaryClosedInput = {
    id?: StringFieldUpdateOperationsInput | string
    shopName?: StringFieldUpdateOperationsInput | string
    openTime?: StringFieldUpdateOperationsInput | string
    closeTime?: StringFieldUpdateOperationsInput | string
    timeUnit?: IntFieldUpdateOperationsInput | number
    submitFrequency?: StringFieldUpdateOperationsInput | string
    avatar?: StringFieldUpdateOperationsInput | string
    useTimeCard?: BoolFieldUpdateOperationsInput | boolean
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    organization?: OrganizationShopBelongingUpdateManyWithoutShopNestedInput
    user?: ShopUserBelongingUpdateManyWithoutShopNestedInput
    operation?: OperationUpdateManyWithoutShopNestedInput
    stableShift?: StableShiftUpdateManyWithoutShopNestedInput
    unstableShift?: UnstableShiftUpdateManyWithoutShopNestedInput
    request?: RequestUpdateManyWithoutShopNestedInput
    timeCard?: TimeCardUpdateManyWithoutShopNestedInput
    announce?: AnnounceUpdateManyWithoutShopNestedInput
    Invitation?: InvitationUpdateManyWithoutInvitedByNestedInput
  }

  export type ShopUncheckedUpdateWithoutTemporaryClosedInput = {
    id?: StringFieldUpdateOperationsInput | string
    shopName?: StringFieldUpdateOperationsInput | string
    openTime?: StringFieldUpdateOperationsInput | string
    closeTime?: StringFieldUpdateOperationsInput | string
    timeUnit?: IntFieldUpdateOperationsInput | number
    submitFrequency?: StringFieldUpdateOperationsInput | string
    avatar?: StringFieldUpdateOperationsInput | string
    useTimeCard?: BoolFieldUpdateOperationsInput | boolean
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    organization?: OrganizationShopBelongingUncheckedUpdateManyWithoutShopNestedInput
    user?: ShopUserBelongingUncheckedUpdateManyWithoutShopNestedInput
    operation?: OperationUncheckedUpdateManyWithoutShopNestedInput
    stableShift?: StableShiftUncheckedUpdateManyWithoutShopNestedInput
    unstableShift?: UnstableShiftUncheckedUpdateManyWithoutShopNestedInput
    request?: RequestUncheckedUpdateManyWithoutShopNestedInput
    timeCard?: TimeCardUncheckedUpdateManyWithoutShopNestedInput
    announce?: AnnounceUncheckedUpdateManyWithoutShopNestedInput
    Invitation?: InvitationUncheckedUpdateManyWithoutInvitedByNestedInput
  }

  export type OrganizationCreateWithoutAnnounceInput = {
    id?: string
    organizationName: string
    isDeleted?: boolean
    createdAt?: Date | string
    shop?: OrganizationShopBelongingCreateNestedManyWithoutOrganizationInput
    temporaryClosed?: TemporaryClosedCreateNestedManyWithoutOrganizationInput
  }

  export type OrganizationUncheckedCreateWithoutAnnounceInput = {
    id?: string
    organizationName: string
    isDeleted?: boolean
    createdAt?: Date | string
    shop?: OrganizationShopBelongingUncheckedCreateNestedManyWithoutOrganizationInput
    temporaryClosed?: TemporaryClosedUncheckedCreateNestedManyWithoutOrganizationInput
  }

  export type OrganizationCreateOrConnectWithoutAnnounceInput = {
    where: OrganizationWhereUniqueInput
    create: XOR<OrganizationCreateWithoutAnnounceInput, OrganizationUncheckedCreateWithoutAnnounceInput>
  }

  export type ShopCreateWithoutAnnounceInput = {
    id?: string
    shopName: string
    openTime: string
    closeTime: string
    timeUnit: number
    submitFrequency: string
    avatar: string
    useTimeCard: boolean
    isDeleted?: boolean
    createdAt?: Date | string
    organization?: OrganizationShopBelongingCreateNestedManyWithoutShopInput
    user?: ShopUserBelongingCreateNestedManyWithoutShopInput
    operation?: OperationCreateNestedManyWithoutShopInput
    stableShift?: StableShiftCreateNestedManyWithoutShopInput
    unstableShift?: UnstableShiftCreateNestedManyWithoutShopInput
    request?: RequestCreateNestedManyWithoutShopInput
    timeCard?: TimeCardCreateNestedManyWithoutShopInput
    temporaryClosed?: TemporaryClosedCreateNestedManyWithoutShopInput
    Invitation?: InvitationCreateNestedManyWithoutInvitedByInput
  }

  export type ShopUncheckedCreateWithoutAnnounceInput = {
    id?: string
    shopName: string
    openTime: string
    closeTime: string
    timeUnit: number
    submitFrequency: string
    avatar: string
    useTimeCard: boolean
    isDeleted?: boolean
    createdAt?: Date | string
    organization?: OrganizationShopBelongingUncheckedCreateNestedManyWithoutShopInput
    user?: ShopUserBelongingUncheckedCreateNestedManyWithoutShopInput
    operation?: OperationUncheckedCreateNestedManyWithoutShopInput
    stableShift?: StableShiftUncheckedCreateNestedManyWithoutShopInput
    unstableShift?: UnstableShiftUncheckedCreateNestedManyWithoutShopInput
    request?: RequestUncheckedCreateNestedManyWithoutShopInput
    timeCard?: TimeCardUncheckedCreateNestedManyWithoutShopInput
    temporaryClosed?: TemporaryClosedUncheckedCreateNestedManyWithoutShopInput
    Invitation?: InvitationUncheckedCreateNestedManyWithoutInvitedByInput
  }

  export type ShopCreateOrConnectWithoutAnnounceInput = {
    where: ShopWhereUniqueInput
    create: XOR<ShopCreateWithoutAnnounceInput, ShopUncheckedCreateWithoutAnnounceInput>
  }

  export type OrganizationUpsertWithoutAnnounceInput = {
    update: XOR<OrganizationUpdateWithoutAnnounceInput, OrganizationUncheckedUpdateWithoutAnnounceInput>
    create: XOR<OrganizationCreateWithoutAnnounceInput, OrganizationUncheckedCreateWithoutAnnounceInput>
    where?: OrganizationWhereInput
  }

  export type OrganizationUpdateToOneWithWhereWithoutAnnounceInput = {
    where?: OrganizationWhereInput
    data: XOR<OrganizationUpdateWithoutAnnounceInput, OrganizationUncheckedUpdateWithoutAnnounceInput>
  }

  export type OrganizationUpdateWithoutAnnounceInput = {
    id?: StringFieldUpdateOperationsInput | string
    organizationName?: StringFieldUpdateOperationsInput | string
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    shop?: OrganizationShopBelongingUpdateManyWithoutOrganizationNestedInput
    temporaryClosed?: TemporaryClosedUpdateManyWithoutOrganizationNestedInput
  }

  export type OrganizationUncheckedUpdateWithoutAnnounceInput = {
    id?: StringFieldUpdateOperationsInput | string
    organizationName?: StringFieldUpdateOperationsInput | string
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    shop?: OrganizationShopBelongingUncheckedUpdateManyWithoutOrganizationNestedInput
    temporaryClosed?: TemporaryClosedUncheckedUpdateManyWithoutOrganizationNestedInput
  }

  export type ShopUpsertWithoutAnnounceInput = {
    update: XOR<ShopUpdateWithoutAnnounceInput, ShopUncheckedUpdateWithoutAnnounceInput>
    create: XOR<ShopCreateWithoutAnnounceInput, ShopUncheckedCreateWithoutAnnounceInput>
    where?: ShopWhereInput
  }

  export type ShopUpdateToOneWithWhereWithoutAnnounceInput = {
    where?: ShopWhereInput
    data: XOR<ShopUpdateWithoutAnnounceInput, ShopUncheckedUpdateWithoutAnnounceInput>
  }

  export type ShopUpdateWithoutAnnounceInput = {
    id?: StringFieldUpdateOperationsInput | string
    shopName?: StringFieldUpdateOperationsInput | string
    openTime?: StringFieldUpdateOperationsInput | string
    closeTime?: StringFieldUpdateOperationsInput | string
    timeUnit?: IntFieldUpdateOperationsInput | number
    submitFrequency?: StringFieldUpdateOperationsInput | string
    avatar?: StringFieldUpdateOperationsInput | string
    useTimeCard?: BoolFieldUpdateOperationsInput | boolean
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    organization?: OrganizationShopBelongingUpdateManyWithoutShopNestedInput
    user?: ShopUserBelongingUpdateManyWithoutShopNestedInput
    operation?: OperationUpdateManyWithoutShopNestedInput
    stableShift?: StableShiftUpdateManyWithoutShopNestedInput
    unstableShift?: UnstableShiftUpdateManyWithoutShopNestedInput
    request?: RequestUpdateManyWithoutShopNestedInput
    timeCard?: TimeCardUpdateManyWithoutShopNestedInput
    temporaryClosed?: TemporaryClosedUpdateManyWithoutShopNestedInput
    Invitation?: InvitationUpdateManyWithoutInvitedByNestedInput
  }

  export type ShopUncheckedUpdateWithoutAnnounceInput = {
    id?: StringFieldUpdateOperationsInput | string
    shopName?: StringFieldUpdateOperationsInput | string
    openTime?: StringFieldUpdateOperationsInput | string
    closeTime?: StringFieldUpdateOperationsInput | string
    timeUnit?: IntFieldUpdateOperationsInput | number
    submitFrequency?: StringFieldUpdateOperationsInput | string
    avatar?: StringFieldUpdateOperationsInput | string
    useTimeCard?: BoolFieldUpdateOperationsInput | boolean
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    organization?: OrganizationShopBelongingUncheckedUpdateManyWithoutShopNestedInput
    user?: ShopUserBelongingUncheckedUpdateManyWithoutShopNestedInput
    operation?: OperationUncheckedUpdateManyWithoutShopNestedInput
    stableShift?: StableShiftUncheckedUpdateManyWithoutShopNestedInput
    unstableShift?: UnstableShiftUncheckedUpdateManyWithoutShopNestedInput
    request?: RequestUncheckedUpdateManyWithoutShopNestedInput
    timeCard?: TimeCardUncheckedUpdateManyWithoutShopNestedInput
    temporaryClosed?: TemporaryClosedUncheckedUpdateManyWithoutShopNestedInput
    Invitation?: InvitationUncheckedUpdateManyWithoutInvitedByNestedInput
  }

  export type OrganizationShopBelongingCreateManyOrganizationInput = {
    id?: string
    shopId: string
    isDeleted: boolean
    createdAt?: Date | string
  }

  export type TemporaryClosedCreateManyOrganizationInput = {
    id?: string
    shopId: string
    date: Date | string
    isDeleted?: boolean
    createdAt?: Date | string
  }

  export type AnnounceCreateManyOrganizationInput = {
    id?: string
    shopId: string
    message: string
    isDeleted?: boolean
    createdAt?: Date | string
  }

  export type OrganizationShopBelongingUpdateWithoutOrganizationInput = {
    id?: StringFieldUpdateOperationsInput | string
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    shop?: ShopUpdateOneRequiredWithoutOrganizationNestedInput
  }

  export type OrganizationShopBelongingUncheckedUpdateWithoutOrganizationInput = {
    id?: StringFieldUpdateOperationsInput | string
    shopId?: StringFieldUpdateOperationsInput | string
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OrganizationShopBelongingUncheckedUpdateManyWithoutOrganizationInput = {
    id?: StringFieldUpdateOperationsInput | string
    shopId?: StringFieldUpdateOperationsInput | string
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TemporaryClosedUpdateWithoutOrganizationInput = {
    id?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    shop?: ShopUpdateOneRequiredWithoutTemporaryClosedNestedInput
  }

  export type TemporaryClosedUncheckedUpdateWithoutOrganizationInput = {
    id?: StringFieldUpdateOperationsInput | string
    shopId?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TemporaryClosedUncheckedUpdateManyWithoutOrganizationInput = {
    id?: StringFieldUpdateOperationsInput | string
    shopId?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AnnounceUpdateWithoutOrganizationInput = {
    id?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    shop?: ShopUpdateOneRequiredWithoutAnnounceNestedInput
  }

  export type AnnounceUncheckedUpdateWithoutOrganizationInput = {
    id?: StringFieldUpdateOperationsInput | string
    shopId?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AnnounceUncheckedUpdateManyWithoutOrganizationInput = {
    id?: StringFieldUpdateOperationsInput | string
    shopId?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OrganizationShopBelongingCreateManyShopInput = {
    id?: string
    organizationId: string
    isDeleted: boolean
    createdAt?: Date | string
  }

  export type ShopUserBelongingCreateManyShopInput = {
    id?: string
    userId: string
    isDeleted?: boolean
    createdAt?: Date | string
  }

  export type OperationCreateManyShopInput = {
    id?: string
    operationName: string
    icon: string
    color: string
    isDeleted?: boolean
    createdAt?: Date | string
  }

  export type StableShiftCreateManyShopInput = {
    id?: string
    userId: string
    workFrom: Date | string
    workTo: Date | string
    breakFrom: Date | string
    breakTo: Date | string
    isDeleted?: boolean
    createdAt?: Date | string
  }

  export type UnstableShiftCreateManyShopInput = {
    id?: string
    userId: string
    workFrom: Date | string
    workTo: Date | string
    breakFrom: Date | string
    breakTo: Date | string
    isDeleted?: boolean
    createdAt?: Date | string
  }

  export type RequestCreateManyShopInput = {
    id?: string
    userId: string
    dateFrom: Date | string
    dateTo: Date | string
    done?: boolean
    isDeleted?: boolean
    createdAt?: Date | string
  }

  export type TimeCardCreateManyShopInput = {
    id?: string
    userId: string
    workFrom: Date | string
    workTo: Date | string
    breakFrom: Date | string
    breakTo: Date | string
    isDeleted?: boolean
    createdAt?: Date | string
  }

  export type TemporaryClosedCreateManyShopInput = {
    id?: string
    organizationId: string
    date: Date | string
    isDeleted?: boolean
    createdAt?: Date | string
  }

  export type AnnounceCreateManyShopInput = {
    id?: string
    organizationId: string
    message: string
    isDeleted?: boolean
    createdAt?: Date | string
  }

  export type InvitationCreateManyInvitedByInput = {
    id?: string
    targetUserId: string
    accepted?: boolean
    isDeleted?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type OrganizationShopBelongingUpdateWithoutShopInput = {
    id?: StringFieldUpdateOperationsInput | string
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    organization?: OrganizationUpdateOneRequiredWithoutShopNestedInput
  }

  export type OrganizationShopBelongingUncheckedUpdateWithoutShopInput = {
    id?: StringFieldUpdateOperationsInput | string
    organizationId?: StringFieldUpdateOperationsInput | string
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OrganizationShopBelongingUncheckedUpdateManyWithoutShopInput = {
    id?: StringFieldUpdateOperationsInput | string
    organizationId?: StringFieldUpdateOperationsInput | string
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ShopUserBelongingUpdateWithoutShopInput = {
    id?: StringFieldUpdateOperationsInput | string
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutShopNestedInput
  }

  export type ShopUserBelongingUncheckedUpdateWithoutShopInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ShopUserBelongingUncheckedUpdateManyWithoutShopInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OperationUpdateWithoutShopInput = {
    id?: StringFieldUpdateOperationsInput | string
    operationName?: StringFieldUpdateOperationsInput | string
    icon?: StringFieldUpdateOperationsInput | string
    color?: StringFieldUpdateOperationsInput | string
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OperationUncheckedUpdateWithoutShopInput = {
    id?: StringFieldUpdateOperationsInput | string
    operationName?: StringFieldUpdateOperationsInput | string
    icon?: StringFieldUpdateOperationsInput | string
    color?: StringFieldUpdateOperationsInput | string
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OperationUncheckedUpdateManyWithoutShopInput = {
    id?: StringFieldUpdateOperationsInput | string
    operationName?: StringFieldUpdateOperationsInput | string
    icon?: StringFieldUpdateOperationsInput | string
    color?: StringFieldUpdateOperationsInput | string
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StableShiftUpdateWithoutShopInput = {
    id?: StringFieldUpdateOperationsInput | string
    workFrom?: DateTimeFieldUpdateOperationsInput | Date | string
    workTo?: DateTimeFieldUpdateOperationsInput | Date | string
    breakFrom?: DateTimeFieldUpdateOperationsInput | Date | string
    breakTo?: DateTimeFieldUpdateOperationsInput | Date | string
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutStableShiftNestedInput
  }

  export type StableShiftUncheckedUpdateWithoutShopInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    workFrom?: DateTimeFieldUpdateOperationsInput | Date | string
    workTo?: DateTimeFieldUpdateOperationsInput | Date | string
    breakFrom?: DateTimeFieldUpdateOperationsInput | Date | string
    breakTo?: DateTimeFieldUpdateOperationsInput | Date | string
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StableShiftUncheckedUpdateManyWithoutShopInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    workFrom?: DateTimeFieldUpdateOperationsInput | Date | string
    workTo?: DateTimeFieldUpdateOperationsInput | Date | string
    breakFrom?: DateTimeFieldUpdateOperationsInput | Date | string
    breakTo?: DateTimeFieldUpdateOperationsInput | Date | string
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UnstableShiftUpdateWithoutShopInput = {
    id?: StringFieldUpdateOperationsInput | string
    workFrom?: DateTimeFieldUpdateOperationsInput | Date | string
    workTo?: DateTimeFieldUpdateOperationsInput | Date | string
    breakFrom?: DateTimeFieldUpdateOperationsInput | Date | string
    breakTo?: DateTimeFieldUpdateOperationsInput | Date | string
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutUnstableShiftNestedInput
  }

  export type UnstableShiftUncheckedUpdateWithoutShopInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    workFrom?: DateTimeFieldUpdateOperationsInput | Date | string
    workTo?: DateTimeFieldUpdateOperationsInput | Date | string
    breakFrom?: DateTimeFieldUpdateOperationsInput | Date | string
    breakTo?: DateTimeFieldUpdateOperationsInput | Date | string
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UnstableShiftUncheckedUpdateManyWithoutShopInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    workFrom?: DateTimeFieldUpdateOperationsInput | Date | string
    workTo?: DateTimeFieldUpdateOperationsInput | Date | string
    breakFrom?: DateTimeFieldUpdateOperationsInput | Date | string
    breakTo?: DateTimeFieldUpdateOperationsInput | Date | string
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RequestUpdateWithoutShopInput = {
    id?: StringFieldUpdateOperationsInput | string
    dateFrom?: DateTimeFieldUpdateOperationsInput | Date | string
    dateTo?: DateTimeFieldUpdateOperationsInput | Date | string
    done?: BoolFieldUpdateOperationsInput | boolean
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutRequestNestedInput
  }

  export type RequestUncheckedUpdateWithoutShopInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    dateFrom?: DateTimeFieldUpdateOperationsInput | Date | string
    dateTo?: DateTimeFieldUpdateOperationsInput | Date | string
    done?: BoolFieldUpdateOperationsInput | boolean
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RequestUncheckedUpdateManyWithoutShopInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    dateFrom?: DateTimeFieldUpdateOperationsInput | Date | string
    dateTo?: DateTimeFieldUpdateOperationsInput | Date | string
    done?: BoolFieldUpdateOperationsInput | boolean
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TimeCardUpdateWithoutShopInput = {
    id?: StringFieldUpdateOperationsInput | string
    workFrom?: DateTimeFieldUpdateOperationsInput | Date | string
    workTo?: DateTimeFieldUpdateOperationsInput | Date | string
    breakFrom?: DateTimeFieldUpdateOperationsInput | Date | string
    breakTo?: DateTimeFieldUpdateOperationsInput | Date | string
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutTimeCardNestedInput
  }

  export type TimeCardUncheckedUpdateWithoutShopInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    workFrom?: DateTimeFieldUpdateOperationsInput | Date | string
    workTo?: DateTimeFieldUpdateOperationsInput | Date | string
    breakFrom?: DateTimeFieldUpdateOperationsInput | Date | string
    breakTo?: DateTimeFieldUpdateOperationsInput | Date | string
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TimeCardUncheckedUpdateManyWithoutShopInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    workFrom?: DateTimeFieldUpdateOperationsInput | Date | string
    workTo?: DateTimeFieldUpdateOperationsInput | Date | string
    breakFrom?: DateTimeFieldUpdateOperationsInput | Date | string
    breakTo?: DateTimeFieldUpdateOperationsInput | Date | string
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TemporaryClosedUpdateWithoutShopInput = {
    id?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    organization?: OrganizationUpdateOneRequiredWithoutTemporaryClosedNestedInput
  }

  export type TemporaryClosedUncheckedUpdateWithoutShopInput = {
    id?: StringFieldUpdateOperationsInput | string
    organizationId?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TemporaryClosedUncheckedUpdateManyWithoutShopInput = {
    id?: StringFieldUpdateOperationsInput | string
    organizationId?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AnnounceUpdateWithoutShopInput = {
    id?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    organization?: OrganizationUpdateOneRequiredWithoutAnnounceNestedInput
  }

  export type AnnounceUncheckedUpdateWithoutShopInput = {
    id?: StringFieldUpdateOperationsInput | string
    organizationId?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AnnounceUncheckedUpdateManyWithoutShopInput = {
    id?: StringFieldUpdateOperationsInput | string
    organizationId?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type InvitationUpdateWithoutInvitedByInput = {
    id?: StringFieldUpdateOperationsInput | string
    accepted?: BoolFieldUpdateOperationsInput | boolean
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    targetUser?: UserUpdateOneRequiredWithoutInvitationNestedInput
  }

  export type InvitationUncheckedUpdateWithoutInvitedByInput = {
    id?: StringFieldUpdateOperationsInput | string
    targetUserId?: StringFieldUpdateOperationsInput | string
    accepted?: BoolFieldUpdateOperationsInput | boolean
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type InvitationUncheckedUpdateManyWithoutInvitedByInput = {
    id?: StringFieldUpdateOperationsInput | string
    targetUserId?: StringFieldUpdateOperationsInput | string
    accepted?: BoolFieldUpdateOperationsInput | boolean
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ShopUserBelongingCreateManyUserInput = {
    id?: string
    shopId: string
    isDeleted?: boolean
    createdAt?: Date | string
  }

  export type StableShiftCreateManyUserInput = {
    id?: string
    shopId: string
    workFrom: Date | string
    workTo: Date | string
    breakFrom: Date | string
    breakTo: Date | string
    isDeleted?: boolean
    createdAt?: Date | string
  }

  export type UnstableShiftCreateManyUserInput = {
    id?: string
    shopId: string
    workFrom: Date | string
    workTo: Date | string
    breakFrom: Date | string
    breakTo: Date | string
    isDeleted?: boolean
    createdAt?: Date | string
  }

  export type RequestCreateManyUserInput = {
    id?: string
    shopId: string
    dateFrom: Date | string
    dateTo: Date | string
    done?: boolean
    isDeleted?: boolean
    createdAt?: Date | string
  }

  export type TimeCardCreateManyUserInput = {
    id?: string
    shopId: string
    workFrom: Date | string
    workTo: Date | string
    breakFrom: Date | string
    breakTo: Date | string
    isDeleted?: boolean
    createdAt?: Date | string
  }

  export type InvitationCreateManyTargetUserInput = {
    id?: string
    invitedByShopId: string
    accepted?: boolean
    isDeleted?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ShopUserBelongingUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    shop?: ShopUpdateOneRequiredWithoutUserNestedInput
  }

  export type ShopUserBelongingUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    shopId?: StringFieldUpdateOperationsInput | string
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ShopUserBelongingUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    shopId?: StringFieldUpdateOperationsInput | string
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StableShiftUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    workFrom?: DateTimeFieldUpdateOperationsInput | Date | string
    workTo?: DateTimeFieldUpdateOperationsInput | Date | string
    breakFrom?: DateTimeFieldUpdateOperationsInput | Date | string
    breakTo?: DateTimeFieldUpdateOperationsInput | Date | string
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    shop?: ShopUpdateOneRequiredWithoutStableShiftNestedInput
  }

  export type StableShiftUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    shopId?: StringFieldUpdateOperationsInput | string
    workFrom?: DateTimeFieldUpdateOperationsInput | Date | string
    workTo?: DateTimeFieldUpdateOperationsInput | Date | string
    breakFrom?: DateTimeFieldUpdateOperationsInput | Date | string
    breakTo?: DateTimeFieldUpdateOperationsInput | Date | string
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StableShiftUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    shopId?: StringFieldUpdateOperationsInput | string
    workFrom?: DateTimeFieldUpdateOperationsInput | Date | string
    workTo?: DateTimeFieldUpdateOperationsInput | Date | string
    breakFrom?: DateTimeFieldUpdateOperationsInput | Date | string
    breakTo?: DateTimeFieldUpdateOperationsInput | Date | string
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UnstableShiftUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    workFrom?: DateTimeFieldUpdateOperationsInput | Date | string
    workTo?: DateTimeFieldUpdateOperationsInput | Date | string
    breakFrom?: DateTimeFieldUpdateOperationsInput | Date | string
    breakTo?: DateTimeFieldUpdateOperationsInput | Date | string
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    shop?: ShopUpdateOneRequiredWithoutUnstableShiftNestedInput
  }

  export type UnstableShiftUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    shopId?: StringFieldUpdateOperationsInput | string
    workFrom?: DateTimeFieldUpdateOperationsInput | Date | string
    workTo?: DateTimeFieldUpdateOperationsInput | Date | string
    breakFrom?: DateTimeFieldUpdateOperationsInput | Date | string
    breakTo?: DateTimeFieldUpdateOperationsInput | Date | string
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UnstableShiftUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    shopId?: StringFieldUpdateOperationsInput | string
    workFrom?: DateTimeFieldUpdateOperationsInput | Date | string
    workTo?: DateTimeFieldUpdateOperationsInput | Date | string
    breakFrom?: DateTimeFieldUpdateOperationsInput | Date | string
    breakTo?: DateTimeFieldUpdateOperationsInput | Date | string
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RequestUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    dateFrom?: DateTimeFieldUpdateOperationsInput | Date | string
    dateTo?: DateTimeFieldUpdateOperationsInput | Date | string
    done?: BoolFieldUpdateOperationsInput | boolean
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    shop?: ShopUpdateOneRequiredWithoutRequestNestedInput
  }

  export type RequestUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    shopId?: StringFieldUpdateOperationsInput | string
    dateFrom?: DateTimeFieldUpdateOperationsInput | Date | string
    dateTo?: DateTimeFieldUpdateOperationsInput | Date | string
    done?: BoolFieldUpdateOperationsInput | boolean
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RequestUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    shopId?: StringFieldUpdateOperationsInput | string
    dateFrom?: DateTimeFieldUpdateOperationsInput | Date | string
    dateTo?: DateTimeFieldUpdateOperationsInput | Date | string
    done?: BoolFieldUpdateOperationsInput | boolean
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TimeCardUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    workFrom?: DateTimeFieldUpdateOperationsInput | Date | string
    workTo?: DateTimeFieldUpdateOperationsInput | Date | string
    breakFrom?: DateTimeFieldUpdateOperationsInput | Date | string
    breakTo?: DateTimeFieldUpdateOperationsInput | Date | string
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    shop?: ShopUpdateOneRequiredWithoutTimeCardNestedInput
  }

  export type TimeCardUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    shopId?: StringFieldUpdateOperationsInput | string
    workFrom?: DateTimeFieldUpdateOperationsInput | Date | string
    workTo?: DateTimeFieldUpdateOperationsInput | Date | string
    breakFrom?: DateTimeFieldUpdateOperationsInput | Date | string
    breakTo?: DateTimeFieldUpdateOperationsInput | Date | string
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TimeCardUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    shopId?: StringFieldUpdateOperationsInput | string
    workFrom?: DateTimeFieldUpdateOperationsInput | Date | string
    workTo?: DateTimeFieldUpdateOperationsInput | Date | string
    breakFrom?: DateTimeFieldUpdateOperationsInput | Date | string
    breakTo?: DateTimeFieldUpdateOperationsInput | Date | string
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type InvitationUpdateWithoutTargetUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    accepted?: BoolFieldUpdateOperationsInput | boolean
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    invitedBy?: ShopUpdateOneRequiredWithoutInvitationNestedInput
  }

  export type InvitationUncheckedUpdateWithoutTargetUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    invitedByShopId?: StringFieldUpdateOperationsInput | string
    accepted?: BoolFieldUpdateOperationsInput | boolean
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type InvitationUncheckedUpdateManyWithoutTargetUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    invitedByShopId?: StringFieldUpdateOperationsInput | string
    accepted?: BoolFieldUpdateOperationsInput | boolean
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}