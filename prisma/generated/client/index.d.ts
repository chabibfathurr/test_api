
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
 * Model murid
 * This model or at least one of its fields has comments in the database, and requires an additional setup for migrations: Read more: https://pris.ly/d/database-comments
 */
export type murid = $Result.DefaultSelection<Prisma.$muridPayload>
/**
 * Model sekolah
 * This model or at least one of its fields has comments in the database, and requires an additional setup for migrations: Read more: https://pris.ly/d/database-comments
 */
export type sekolah = $Result.DefaultSelection<Prisma.$sekolahPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Murids
 * const murids = await prisma.murid.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  const U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
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
   * // Fetch zero or more Murids
   * const murids = await prisma.murid.findMany()
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
   * `prisma.murid`: Exposes CRUD operations for the **murid** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Murids
    * const murids = await prisma.murid.findMany()
    * ```
    */
  get murid(): Prisma.muridDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.sekolah`: Exposes CRUD operations for the **sekolah** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Sekolahs
    * const sekolahs = await prisma.sekolah.findMany()
    * ```
    */
  get sekolah(): Prisma.sekolahDelegate<ExtArgs, ClientOptions>;
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
   * Prisma Client JS version: 6.16.3
   * Query Engine version: bb420e667c1820a8c05a38023385f6cc7ef8e83a
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
    murid: 'murid',
    sekolah: 'sekolah'
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
      modelProps: "murid" | "sekolah"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      murid: {
        payload: Prisma.$muridPayload<ExtArgs>
        fields: Prisma.muridFieldRefs
        operations: {
          findUnique: {
            args: Prisma.muridFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$muridPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.muridFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$muridPayload>
          }
          findFirst: {
            args: Prisma.muridFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$muridPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.muridFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$muridPayload>
          }
          findMany: {
            args: Prisma.muridFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$muridPayload>[]
          }
          create: {
            args: Prisma.muridCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$muridPayload>
          }
          createMany: {
            args: Prisma.muridCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.muridDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$muridPayload>
          }
          update: {
            args: Prisma.muridUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$muridPayload>
          }
          deleteMany: {
            args: Prisma.muridDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.muridUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.muridUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$muridPayload>
          }
          aggregate: {
            args: Prisma.MuridAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateMurid>
          }
          groupBy: {
            args: Prisma.muridGroupByArgs<ExtArgs>
            result: $Utils.Optional<MuridGroupByOutputType>[]
          }
          count: {
            args: Prisma.muridCountArgs<ExtArgs>
            result: $Utils.Optional<MuridCountAggregateOutputType> | number
          }
        }
      }
      sekolah: {
        payload: Prisma.$sekolahPayload<ExtArgs>
        fields: Prisma.sekolahFieldRefs
        operations: {
          findUnique: {
            args: Prisma.sekolahFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$sekolahPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.sekolahFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$sekolahPayload>
          }
          findFirst: {
            args: Prisma.sekolahFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$sekolahPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.sekolahFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$sekolahPayload>
          }
          findMany: {
            args: Prisma.sekolahFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$sekolahPayload>[]
          }
          create: {
            args: Prisma.sekolahCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$sekolahPayload>
          }
          createMany: {
            args: Prisma.sekolahCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.sekolahDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$sekolahPayload>
          }
          update: {
            args: Prisma.sekolahUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$sekolahPayload>
          }
          deleteMany: {
            args: Prisma.sekolahDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.sekolahUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.sekolahUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$sekolahPayload>
          }
          aggregate: {
            args: Prisma.SekolahAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSekolah>
          }
          groupBy: {
            args: Prisma.sekolahGroupByArgs<ExtArgs>
            result: $Utils.Optional<SekolahGroupByOutputType>[]
          }
          count: {
            args: Prisma.sekolahCountArgs<ExtArgs>
            result: $Utils.Optional<SekolahCountAggregateOutputType> | number
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
     * // Shorthand for `emit: 'stdout'`
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events only
     * log: [
     *   { emit: 'event', level: 'query' },
     *   { emit: 'event', level: 'info' },
     *   { emit: 'event', level: 'warn' }
     *   { emit: 'event', level: 'error' }
     * ]
     * 
     * / Emit as events and log to stdout
     * og: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * 
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
     * Instance of a Driver Adapter, e.g., like one provided by `@prisma/adapter-planetscale`
     */
    adapter?: runtime.SqlDriverAdapterFactory | null
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
    murid?: muridOmit
    sekolah?: sekolahOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;

  export type GetLogType<T> = CheckIsLogLevel<
    T extends LogDefinition ? T['level'] : T
  >;

  export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[number]>
    : never;

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
   * Count Type SekolahCountOutputType
   */

  export type SekolahCountOutputType = {
    murid: number
  }

  export type SekolahCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    murid?: boolean | SekolahCountOutputTypeCountMuridArgs
  }

  // Custom InputTypes
  /**
   * SekolahCountOutputType without action
   */
  export type SekolahCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SekolahCountOutputType
     */
    select?: SekolahCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * SekolahCountOutputType without action
   */
  export type SekolahCountOutputTypeCountMuridArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: muridWhereInput
  }


  /**
   * Models
   */

  /**
   * Model murid
   */

  export type AggregateMurid = {
    _count: MuridCountAggregateOutputType | null
    _avg: MuridAvgAggregateOutputType | null
    _sum: MuridSumAggregateOutputType | null
    _min: MuridMinAggregateOutputType | null
    _max: MuridMaxAggregateOutputType | null
  }

  export type MuridAvgAggregateOutputType = {
    id: number | null
    id_sekolah: number | null
    status: number | null
  }

  export type MuridSumAggregateOutputType = {
    id: number | null
    id_sekolah: number | null
    status: number | null
  }

  export type MuridMinAggregateOutputType = {
    id: number | null
    id_sekolah: number | null
    nama: string | null
    email: string | null
    alamat: string | null
    no_telp: string | null
    status: number | null
    created_at: Date | null
    updated_at: Date | null
    created_by: string | null
    updated_by: string | null
    deleted_by: Date | null
  }

  export type MuridMaxAggregateOutputType = {
    id: number | null
    id_sekolah: number | null
    nama: string | null
    email: string | null
    alamat: string | null
    no_telp: string | null
    status: number | null
    created_at: Date | null
    updated_at: Date | null
    created_by: string | null
    updated_by: string | null
    deleted_by: Date | null
  }

  export type MuridCountAggregateOutputType = {
    id: number
    id_sekolah: number
    nama: number
    email: number
    alamat: number
    no_telp: number
    status: number
    created_at: number
    updated_at: number
    created_by: number
    updated_by: number
    deleted_by: number
    _all: number
  }


  export type MuridAvgAggregateInputType = {
    id?: true
    id_sekolah?: true
    status?: true
  }

  export type MuridSumAggregateInputType = {
    id?: true
    id_sekolah?: true
    status?: true
  }

  export type MuridMinAggregateInputType = {
    id?: true
    id_sekolah?: true
    nama?: true
    email?: true
    alamat?: true
    no_telp?: true
    status?: true
    created_at?: true
    updated_at?: true
    created_by?: true
    updated_by?: true
    deleted_by?: true
  }

  export type MuridMaxAggregateInputType = {
    id?: true
    id_sekolah?: true
    nama?: true
    email?: true
    alamat?: true
    no_telp?: true
    status?: true
    created_at?: true
    updated_at?: true
    created_by?: true
    updated_by?: true
    deleted_by?: true
  }

  export type MuridCountAggregateInputType = {
    id?: true
    id_sekolah?: true
    nama?: true
    email?: true
    alamat?: true
    no_telp?: true
    status?: true
    created_at?: true
    updated_at?: true
    created_by?: true
    updated_by?: true
    deleted_by?: true
    _all?: true
  }

  export type MuridAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which murid to aggregate.
     */
    where?: muridWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of murids to fetch.
     */
    orderBy?: muridOrderByWithRelationInput | muridOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: muridWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` murids from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` murids.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned murids
    **/
    _count?: true | MuridCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: MuridAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: MuridSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: MuridMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: MuridMaxAggregateInputType
  }

  export type GetMuridAggregateType<T extends MuridAggregateArgs> = {
        [P in keyof T & keyof AggregateMurid]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMurid[P]>
      : GetScalarType<T[P], AggregateMurid[P]>
  }




  export type muridGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: muridWhereInput
    orderBy?: muridOrderByWithAggregationInput | muridOrderByWithAggregationInput[]
    by: MuridScalarFieldEnum[] | MuridScalarFieldEnum
    having?: muridScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MuridCountAggregateInputType | true
    _avg?: MuridAvgAggregateInputType
    _sum?: MuridSumAggregateInputType
    _min?: MuridMinAggregateInputType
    _max?: MuridMaxAggregateInputType
  }

  export type MuridGroupByOutputType = {
    id: number
    id_sekolah: number
    nama: string
    email: string
    alamat: string
    no_telp: string
    status: number
    created_at: Date | null
    updated_at: Date | null
    created_by: string | null
    updated_by: string | null
    deleted_by: Date | null
    _count: MuridCountAggregateOutputType | null
    _avg: MuridAvgAggregateOutputType | null
    _sum: MuridSumAggregateOutputType | null
    _min: MuridMinAggregateOutputType | null
    _max: MuridMaxAggregateOutputType | null
  }

  type GetMuridGroupByPayload<T extends muridGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<MuridGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof MuridGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MuridGroupByOutputType[P]>
            : GetScalarType<T[P], MuridGroupByOutputType[P]>
        }
      >
    >


  export type muridSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    id_sekolah?: boolean
    nama?: boolean
    email?: boolean
    alamat?: boolean
    no_telp?: boolean
    status?: boolean
    created_at?: boolean
    updated_at?: boolean
    created_by?: boolean
    updated_by?: boolean
    deleted_by?: boolean
    sekolah?: boolean | sekolahDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["murid"]>



  export type muridSelectScalar = {
    id?: boolean
    id_sekolah?: boolean
    nama?: boolean
    email?: boolean
    alamat?: boolean
    no_telp?: boolean
    status?: boolean
    created_at?: boolean
    updated_at?: boolean
    created_by?: boolean
    updated_by?: boolean
    deleted_by?: boolean
  }

  export type muridOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "id_sekolah" | "nama" | "email" | "alamat" | "no_telp" | "status" | "created_at" | "updated_at" | "created_by" | "updated_by" | "deleted_by", ExtArgs["result"]["murid"]>
  export type muridInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    sekolah?: boolean | sekolahDefaultArgs<ExtArgs>
  }

  export type $muridPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "murid"
    objects: {
      sekolah: Prisma.$sekolahPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      id_sekolah: number
      nama: string
      email: string
      alamat: string
      no_telp: string
      status: number
      created_at: Date | null
      updated_at: Date | null
      created_by: string | null
      updated_by: string | null
      deleted_by: Date | null
    }, ExtArgs["result"]["murid"]>
    composites: {}
  }

  type muridGetPayload<S extends boolean | null | undefined | muridDefaultArgs> = $Result.GetResult<Prisma.$muridPayload, S>

  type muridCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<muridFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: MuridCountAggregateInputType | true
    }

  export interface muridDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['murid'], meta: { name: 'murid' } }
    /**
     * Find zero or one Murid that matches the filter.
     * @param {muridFindUniqueArgs} args - Arguments to find a Murid
     * @example
     * // Get one Murid
     * const murid = await prisma.murid.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends muridFindUniqueArgs>(args: SelectSubset<T, muridFindUniqueArgs<ExtArgs>>): Prisma__muridClient<$Result.GetResult<Prisma.$muridPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Murid that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {muridFindUniqueOrThrowArgs} args - Arguments to find a Murid
     * @example
     * // Get one Murid
     * const murid = await prisma.murid.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends muridFindUniqueOrThrowArgs>(args: SelectSubset<T, muridFindUniqueOrThrowArgs<ExtArgs>>): Prisma__muridClient<$Result.GetResult<Prisma.$muridPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Murid that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {muridFindFirstArgs} args - Arguments to find a Murid
     * @example
     * // Get one Murid
     * const murid = await prisma.murid.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends muridFindFirstArgs>(args?: SelectSubset<T, muridFindFirstArgs<ExtArgs>>): Prisma__muridClient<$Result.GetResult<Prisma.$muridPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Murid that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {muridFindFirstOrThrowArgs} args - Arguments to find a Murid
     * @example
     * // Get one Murid
     * const murid = await prisma.murid.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends muridFindFirstOrThrowArgs>(args?: SelectSubset<T, muridFindFirstOrThrowArgs<ExtArgs>>): Prisma__muridClient<$Result.GetResult<Prisma.$muridPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Murids that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {muridFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Murids
     * const murids = await prisma.murid.findMany()
     * 
     * // Get first 10 Murids
     * const murids = await prisma.murid.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const muridWithIdOnly = await prisma.murid.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends muridFindManyArgs>(args?: SelectSubset<T, muridFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$muridPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Murid.
     * @param {muridCreateArgs} args - Arguments to create a Murid.
     * @example
     * // Create one Murid
     * const Murid = await prisma.murid.create({
     *   data: {
     *     // ... data to create a Murid
     *   }
     * })
     * 
     */
    create<T extends muridCreateArgs>(args: SelectSubset<T, muridCreateArgs<ExtArgs>>): Prisma__muridClient<$Result.GetResult<Prisma.$muridPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Murids.
     * @param {muridCreateManyArgs} args - Arguments to create many Murids.
     * @example
     * // Create many Murids
     * const murid = await prisma.murid.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends muridCreateManyArgs>(args?: SelectSubset<T, muridCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Murid.
     * @param {muridDeleteArgs} args - Arguments to delete one Murid.
     * @example
     * // Delete one Murid
     * const Murid = await prisma.murid.delete({
     *   where: {
     *     // ... filter to delete one Murid
     *   }
     * })
     * 
     */
    delete<T extends muridDeleteArgs>(args: SelectSubset<T, muridDeleteArgs<ExtArgs>>): Prisma__muridClient<$Result.GetResult<Prisma.$muridPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Murid.
     * @param {muridUpdateArgs} args - Arguments to update one Murid.
     * @example
     * // Update one Murid
     * const murid = await prisma.murid.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends muridUpdateArgs>(args: SelectSubset<T, muridUpdateArgs<ExtArgs>>): Prisma__muridClient<$Result.GetResult<Prisma.$muridPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Murids.
     * @param {muridDeleteManyArgs} args - Arguments to filter Murids to delete.
     * @example
     * // Delete a few Murids
     * const { count } = await prisma.murid.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends muridDeleteManyArgs>(args?: SelectSubset<T, muridDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Murids.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {muridUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Murids
     * const murid = await prisma.murid.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends muridUpdateManyArgs>(args: SelectSubset<T, muridUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Murid.
     * @param {muridUpsertArgs} args - Arguments to update or create a Murid.
     * @example
     * // Update or create a Murid
     * const murid = await prisma.murid.upsert({
     *   create: {
     *     // ... data to create a Murid
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Murid we want to update
     *   }
     * })
     */
    upsert<T extends muridUpsertArgs>(args: SelectSubset<T, muridUpsertArgs<ExtArgs>>): Prisma__muridClient<$Result.GetResult<Prisma.$muridPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Murids.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {muridCountArgs} args - Arguments to filter Murids to count.
     * @example
     * // Count the number of Murids
     * const count = await prisma.murid.count({
     *   where: {
     *     // ... the filter for the Murids we want to count
     *   }
     * })
    **/
    count<T extends muridCountArgs>(
      args?: Subset<T, muridCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MuridCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Murid.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MuridAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends MuridAggregateArgs>(args: Subset<T, MuridAggregateArgs>): Prisma.PrismaPromise<GetMuridAggregateType<T>>

    /**
     * Group by Murid.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {muridGroupByArgs} args - Group by arguments.
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
      T extends muridGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: muridGroupByArgs['orderBy'] }
        : { orderBy?: muridGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, muridGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMuridGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the murid model
   */
  readonly fields: muridFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for murid.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__muridClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    sekolah<T extends sekolahDefaultArgs<ExtArgs> = {}>(args?: Subset<T, sekolahDefaultArgs<ExtArgs>>): Prisma__sekolahClient<$Result.GetResult<Prisma.$sekolahPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the murid model
   */
  interface muridFieldRefs {
    readonly id: FieldRef<"murid", 'Int'>
    readonly id_sekolah: FieldRef<"murid", 'Int'>
    readonly nama: FieldRef<"murid", 'String'>
    readonly email: FieldRef<"murid", 'String'>
    readonly alamat: FieldRef<"murid", 'String'>
    readonly no_telp: FieldRef<"murid", 'String'>
    readonly status: FieldRef<"murid", 'Int'>
    readonly created_at: FieldRef<"murid", 'DateTime'>
    readonly updated_at: FieldRef<"murid", 'DateTime'>
    readonly created_by: FieldRef<"murid", 'String'>
    readonly updated_by: FieldRef<"murid", 'String'>
    readonly deleted_by: FieldRef<"murid", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * murid findUnique
   */
  export type muridFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the murid
     */
    select?: muridSelect<ExtArgs> | null
    /**
     * Omit specific fields from the murid
     */
    omit?: muridOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: muridInclude<ExtArgs> | null
    /**
     * Filter, which murid to fetch.
     */
    where: muridWhereUniqueInput
  }

  /**
   * murid findUniqueOrThrow
   */
  export type muridFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the murid
     */
    select?: muridSelect<ExtArgs> | null
    /**
     * Omit specific fields from the murid
     */
    omit?: muridOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: muridInclude<ExtArgs> | null
    /**
     * Filter, which murid to fetch.
     */
    where: muridWhereUniqueInput
  }

  /**
   * murid findFirst
   */
  export type muridFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the murid
     */
    select?: muridSelect<ExtArgs> | null
    /**
     * Omit specific fields from the murid
     */
    omit?: muridOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: muridInclude<ExtArgs> | null
    /**
     * Filter, which murid to fetch.
     */
    where?: muridWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of murids to fetch.
     */
    orderBy?: muridOrderByWithRelationInput | muridOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for murids.
     */
    cursor?: muridWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` murids from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` murids.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of murids.
     */
    distinct?: MuridScalarFieldEnum | MuridScalarFieldEnum[]
  }

  /**
   * murid findFirstOrThrow
   */
  export type muridFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the murid
     */
    select?: muridSelect<ExtArgs> | null
    /**
     * Omit specific fields from the murid
     */
    omit?: muridOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: muridInclude<ExtArgs> | null
    /**
     * Filter, which murid to fetch.
     */
    where?: muridWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of murids to fetch.
     */
    orderBy?: muridOrderByWithRelationInput | muridOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for murids.
     */
    cursor?: muridWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` murids from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` murids.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of murids.
     */
    distinct?: MuridScalarFieldEnum | MuridScalarFieldEnum[]
  }

  /**
   * murid findMany
   */
  export type muridFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the murid
     */
    select?: muridSelect<ExtArgs> | null
    /**
     * Omit specific fields from the murid
     */
    omit?: muridOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: muridInclude<ExtArgs> | null
    /**
     * Filter, which murids to fetch.
     */
    where?: muridWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of murids to fetch.
     */
    orderBy?: muridOrderByWithRelationInput | muridOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing murids.
     */
    cursor?: muridWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` murids from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` murids.
     */
    skip?: number
    distinct?: MuridScalarFieldEnum | MuridScalarFieldEnum[]
  }

  /**
   * murid create
   */
  export type muridCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the murid
     */
    select?: muridSelect<ExtArgs> | null
    /**
     * Omit specific fields from the murid
     */
    omit?: muridOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: muridInclude<ExtArgs> | null
    /**
     * The data needed to create a murid.
     */
    data: XOR<muridCreateInput, muridUncheckedCreateInput>
  }

  /**
   * murid createMany
   */
  export type muridCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many murids.
     */
    data: muridCreateManyInput | muridCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * murid update
   */
  export type muridUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the murid
     */
    select?: muridSelect<ExtArgs> | null
    /**
     * Omit specific fields from the murid
     */
    omit?: muridOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: muridInclude<ExtArgs> | null
    /**
     * The data needed to update a murid.
     */
    data: XOR<muridUpdateInput, muridUncheckedUpdateInput>
    /**
     * Choose, which murid to update.
     */
    where: muridWhereUniqueInput
  }

  /**
   * murid updateMany
   */
  export type muridUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update murids.
     */
    data: XOR<muridUpdateManyMutationInput, muridUncheckedUpdateManyInput>
    /**
     * Filter which murids to update
     */
    where?: muridWhereInput
    /**
     * Limit how many murids to update.
     */
    limit?: number
  }

  /**
   * murid upsert
   */
  export type muridUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the murid
     */
    select?: muridSelect<ExtArgs> | null
    /**
     * Omit specific fields from the murid
     */
    omit?: muridOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: muridInclude<ExtArgs> | null
    /**
     * The filter to search for the murid to update in case it exists.
     */
    where: muridWhereUniqueInput
    /**
     * In case the murid found by the `where` argument doesn't exist, create a new murid with this data.
     */
    create: XOR<muridCreateInput, muridUncheckedCreateInput>
    /**
     * In case the murid was found with the provided `where` argument, update it with this data.
     */
    update: XOR<muridUpdateInput, muridUncheckedUpdateInput>
  }

  /**
   * murid delete
   */
  export type muridDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the murid
     */
    select?: muridSelect<ExtArgs> | null
    /**
     * Omit specific fields from the murid
     */
    omit?: muridOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: muridInclude<ExtArgs> | null
    /**
     * Filter which murid to delete.
     */
    where: muridWhereUniqueInput
  }

  /**
   * murid deleteMany
   */
  export type muridDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which murids to delete
     */
    where?: muridWhereInput
    /**
     * Limit how many murids to delete.
     */
    limit?: number
  }

  /**
   * murid without action
   */
  export type muridDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the murid
     */
    select?: muridSelect<ExtArgs> | null
    /**
     * Omit specific fields from the murid
     */
    omit?: muridOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: muridInclude<ExtArgs> | null
  }


  /**
   * Model sekolah
   */

  export type AggregateSekolah = {
    _count: SekolahCountAggregateOutputType | null
    _avg: SekolahAvgAggregateOutputType | null
    _sum: SekolahSumAggregateOutputType | null
    _min: SekolahMinAggregateOutputType | null
    _max: SekolahMaxAggregateOutputType | null
  }

  export type SekolahAvgAggregateOutputType = {
    id: number | null
    status: number | null
  }

  export type SekolahSumAggregateOutputType = {
    id: number | null
    status: number | null
  }

  export type SekolahMinAggregateOutputType = {
    id: number | null
    nama: string | null
    email: string | null
    alamat: string | null
    no_telp: string | null
    status: number | null
    created_at: Date | null
    updated_at: Date | null
    created_by: string | null
    updated_by: string | null
    deleted_by: Date | null
  }

  export type SekolahMaxAggregateOutputType = {
    id: number | null
    nama: string | null
    email: string | null
    alamat: string | null
    no_telp: string | null
    status: number | null
    created_at: Date | null
    updated_at: Date | null
    created_by: string | null
    updated_by: string | null
    deleted_by: Date | null
  }

  export type SekolahCountAggregateOutputType = {
    id: number
    nama: number
    email: number
    alamat: number
    no_telp: number
    status: number
    created_at: number
    updated_at: number
    created_by: number
    updated_by: number
    deleted_by: number
    _all: number
  }


  export type SekolahAvgAggregateInputType = {
    id?: true
    status?: true
  }

  export type SekolahSumAggregateInputType = {
    id?: true
    status?: true
  }

  export type SekolahMinAggregateInputType = {
    id?: true
    nama?: true
    email?: true
    alamat?: true
    no_telp?: true
    status?: true
    created_at?: true
    updated_at?: true
    created_by?: true
    updated_by?: true
    deleted_by?: true
  }

  export type SekolahMaxAggregateInputType = {
    id?: true
    nama?: true
    email?: true
    alamat?: true
    no_telp?: true
    status?: true
    created_at?: true
    updated_at?: true
    created_by?: true
    updated_by?: true
    deleted_by?: true
  }

  export type SekolahCountAggregateInputType = {
    id?: true
    nama?: true
    email?: true
    alamat?: true
    no_telp?: true
    status?: true
    created_at?: true
    updated_at?: true
    created_by?: true
    updated_by?: true
    deleted_by?: true
    _all?: true
  }

  export type SekolahAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which sekolah to aggregate.
     */
    where?: sekolahWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of sekolahs to fetch.
     */
    orderBy?: sekolahOrderByWithRelationInput | sekolahOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: sekolahWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` sekolahs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` sekolahs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned sekolahs
    **/
    _count?: true | SekolahCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: SekolahAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: SekolahSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SekolahMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SekolahMaxAggregateInputType
  }

  export type GetSekolahAggregateType<T extends SekolahAggregateArgs> = {
        [P in keyof T & keyof AggregateSekolah]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSekolah[P]>
      : GetScalarType<T[P], AggregateSekolah[P]>
  }




  export type sekolahGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: sekolahWhereInput
    orderBy?: sekolahOrderByWithAggregationInput | sekolahOrderByWithAggregationInput[]
    by: SekolahScalarFieldEnum[] | SekolahScalarFieldEnum
    having?: sekolahScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SekolahCountAggregateInputType | true
    _avg?: SekolahAvgAggregateInputType
    _sum?: SekolahSumAggregateInputType
    _min?: SekolahMinAggregateInputType
    _max?: SekolahMaxAggregateInputType
  }

  export type SekolahGroupByOutputType = {
    id: number
    nama: string
    email: string
    alamat: string
    no_telp: string
    status: number
    created_at: Date | null
    updated_at: Date | null
    created_by: string | null
    updated_by: string | null
    deleted_by: Date | null
    _count: SekolahCountAggregateOutputType | null
    _avg: SekolahAvgAggregateOutputType | null
    _sum: SekolahSumAggregateOutputType | null
    _min: SekolahMinAggregateOutputType | null
    _max: SekolahMaxAggregateOutputType | null
  }

  type GetSekolahGroupByPayload<T extends sekolahGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SekolahGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SekolahGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SekolahGroupByOutputType[P]>
            : GetScalarType<T[P], SekolahGroupByOutputType[P]>
        }
      >
    >


  export type sekolahSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nama?: boolean
    email?: boolean
    alamat?: boolean
    no_telp?: boolean
    status?: boolean
    created_at?: boolean
    updated_at?: boolean
    created_by?: boolean
    updated_by?: boolean
    deleted_by?: boolean
    murid?: boolean | sekolah$muridArgs<ExtArgs>
    _count?: boolean | SekolahCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["sekolah"]>



  export type sekolahSelectScalar = {
    id?: boolean
    nama?: boolean
    email?: boolean
    alamat?: boolean
    no_telp?: boolean
    status?: boolean
    created_at?: boolean
    updated_at?: boolean
    created_by?: boolean
    updated_by?: boolean
    deleted_by?: boolean
  }

  export type sekolahOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "nama" | "email" | "alamat" | "no_telp" | "status" | "created_at" | "updated_at" | "created_by" | "updated_by" | "deleted_by", ExtArgs["result"]["sekolah"]>
  export type sekolahInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    murid?: boolean | sekolah$muridArgs<ExtArgs>
    _count?: boolean | SekolahCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $sekolahPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "sekolah"
    objects: {
      murid: Prisma.$muridPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      nama: string
      email: string
      alamat: string
      no_telp: string
      status: number
      created_at: Date | null
      updated_at: Date | null
      created_by: string | null
      updated_by: string | null
      deleted_by: Date | null
    }, ExtArgs["result"]["sekolah"]>
    composites: {}
  }

  type sekolahGetPayload<S extends boolean | null | undefined | sekolahDefaultArgs> = $Result.GetResult<Prisma.$sekolahPayload, S>

  type sekolahCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<sekolahFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SekolahCountAggregateInputType | true
    }

  export interface sekolahDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['sekolah'], meta: { name: 'sekolah' } }
    /**
     * Find zero or one Sekolah that matches the filter.
     * @param {sekolahFindUniqueArgs} args - Arguments to find a Sekolah
     * @example
     * // Get one Sekolah
     * const sekolah = await prisma.sekolah.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends sekolahFindUniqueArgs>(args: SelectSubset<T, sekolahFindUniqueArgs<ExtArgs>>): Prisma__sekolahClient<$Result.GetResult<Prisma.$sekolahPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Sekolah that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {sekolahFindUniqueOrThrowArgs} args - Arguments to find a Sekolah
     * @example
     * // Get one Sekolah
     * const sekolah = await prisma.sekolah.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends sekolahFindUniqueOrThrowArgs>(args: SelectSubset<T, sekolahFindUniqueOrThrowArgs<ExtArgs>>): Prisma__sekolahClient<$Result.GetResult<Prisma.$sekolahPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Sekolah that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {sekolahFindFirstArgs} args - Arguments to find a Sekolah
     * @example
     * // Get one Sekolah
     * const sekolah = await prisma.sekolah.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends sekolahFindFirstArgs>(args?: SelectSubset<T, sekolahFindFirstArgs<ExtArgs>>): Prisma__sekolahClient<$Result.GetResult<Prisma.$sekolahPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Sekolah that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {sekolahFindFirstOrThrowArgs} args - Arguments to find a Sekolah
     * @example
     * // Get one Sekolah
     * const sekolah = await prisma.sekolah.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends sekolahFindFirstOrThrowArgs>(args?: SelectSubset<T, sekolahFindFirstOrThrowArgs<ExtArgs>>): Prisma__sekolahClient<$Result.GetResult<Prisma.$sekolahPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Sekolahs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {sekolahFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Sekolahs
     * const sekolahs = await prisma.sekolah.findMany()
     * 
     * // Get first 10 Sekolahs
     * const sekolahs = await prisma.sekolah.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const sekolahWithIdOnly = await prisma.sekolah.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends sekolahFindManyArgs>(args?: SelectSubset<T, sekolahFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$sekolahPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Sekolah.
     * @param {sekolahCreateArgs} args - Arguments to create a Sekolah.
     * @example
     * // Create one Sekolah
     * const Sekolah = await prisma.sekolah.create({
     *   data: {
     *     // ... data to create a Sekolah
     *   }
     * })
     * 
     */
    create<T extends sekolahCreateArgs>(args: SelectSubset<T, sekolahCreateArgs<ExtArgs>>): Prisma__sekolahClient<$Result.GetResult<Prisma.$sekolahPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Sekolahs.
     * @param {sekolahCreateManyArgs} args - Arguments to create many Sekolahs.
     * @example
     * // Create many Sekolahs
     * const sekolah = await prisma.sekolah.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends sekolahCreateManyArgs>(args?: SelectSubset<T, sekolahCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Sekolah.
     * @param {sekolahDeleteArgs} args - Arguments to delete one Sekolah.
     * @example
     * // Delete one Sekolah
     * const Sekolah = await prisma.sekolah.delete({
     *   where: {
     *     // ... filter to delete one Sekolah
     *   }
     * })
     * 
     */
    delete<T extends sekolahDeleteArgs>(args: SelectSubset<T, sekolahDeleteArgs<ExtArgs>>): Prisma__sekolahClient<$Result.GetResult<Prisma.$sekolahPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Sekolah.
     * @param {sekolahUpdateArgs} args - Arguments to update one Sekolah.
     * @example
     * // Update one Sekolah
     * const sekolah = await prisma.sekolah.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends sekolahUpdateArgs>(args: SelectSubset<T, sekolahUpdateArgs<ExtArgs>>): Prisma__sekolahClient<$Result.GetResult<Prisma.$sekolahPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Sekolahs.
     * @param {sekolahDeleteManyArgs} args - Arguments to filter Sekolahs to delete.
     * @example
     * // Delete a few Sekolahs
     * const { count } = await prisma.sekolah.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends sekolahDeleteManyArgs>(args?: SelectSubset<T, sekolahDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Sekolahs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {sekolahUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Sekolahs
     * const sekolah = await prisma.sekolah.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends sekolahUpdateManyArgs>(args: SelectSubset<T, sekolahUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Sekolah.
     * @param {sekolahUpsertArgs} args - Arguments to update or create a Sekolah.
     * @example
     * // Update or create a Sekolah
     * const sekolah = await prisma.sekolah.upsert({
     *   create: {
     *     // ... data to create a Sekolah
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Sekolah we want to update
     *   }
     * })
     */
    upsert<T extends sekolahUpsertArgs>(args: SelectSubset<T, sekolahUpsertArgs<ExtArgs>>): Prisma__sekolahClient<$Result.GetResult<Prisma.$sekolahPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Sekolahs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {sekolahCountArgs} args - Arguments to filter Sekolahs to count.
     * @example
     * // Count the number of Sekolahs
     * const count = await prisma.sekolah.count({
     *   where: {
     *     // ... the filter for the Sekolahs we want to count
     *   }
     * })
    **/
    count<T extends sekolahCountArgs>(
      args?: Subset<T, sekolahCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SekolahCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Sekolah.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SekolahAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends SekolahAggregateArgs>(args: Subset<T, SekolahAggregateArgs>): Prisma.PrismaPromise<GetSekolahAggregateType<T>>

    /**
     * Group by Sekolah.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {sekolahGroupByArgs} args - Group by arguments.
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
      T extends sekolahGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: sekolahGroupByArgs['orderBy'] }
        : { orderBy?: sekolahGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, sekolahGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSekolahGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the sekolah model
   */
  readonly fields: sekolahFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for sekolah.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__sekolahClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    murid<T extends sekolah$muridArgs<ExtArgs> = {}>(args?: Subset<T, sekolah$muridArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$muridPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the sekolah model
   */
  interface sekolahFieldRefs {
    readonly id: FieldRef<"sekolah", 'Int'>
    readonly nama: FieldRef<"sekolah", 'String'>
    readonly email: FieldRef<"sekolah", 'String'>
    readonly alamat: FieldRef<"sekolah", 'String'>
    readonly no_telp: FieldRef<"sekolah", 'String'>
    readonly status: FieldRef<"sekolah", 'Int'>
    readonly created_at: FieldRef<"sekolah", 'DateTime'>
    readonly updated_at: FieldRef<"sekolah", 'DateTime'>
    readonly created_by: FieldRef<"sekolah", 'String'>
    readonly updated_by: FieldRef<"sekolah", 'String'>
    readonly deleted_by: FieldRef<"sekolah", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * sekolah findUnique
   */
  export type sekolahFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the sekolah
     */
    select?: sekolahSelect<ExtArgs> | null
    /**
     * Omit specific fields from the sekolah
     */
    omit?: sekolahOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: sekolahInclude<ExtArgs> | null
    /**
     * Filter, which sekolah to fetch.
     */
    where: sekolahWhereUniqueInput
  }

  /**
   * sekolah findUniqueOrThrow
   */
  export type sekolahFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the sekolah
     */
    select?: sekolahSelect<ExtArgs> | null
    /**
     * Omit specific fields from the sekolah
     */
    omit?: sekolahOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: sekolahInclude<ExtArgs> | null
    /**
     * Filter, which sekolah to fetch.
     */
    where: sekolahWhereUniqueInput
  }

  /**
   * sekolah findFirst
   */
  export type sekolahFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the sekolah
     */
    select?: sekolahSelect<ExtArgs> | null
    /**
     * Omit specific fields from the sekolah
     */
    omit?: sekolahOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: sekolahInclude<ExtArgs> | null
    /**
     * Filter, which sekolah to fetch.
     */
    where?: sekolahWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of sekolahs to fetch.
     */
    orderBy?: sekolahOrderByWithRelationInput | sekolahOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for sekolahs.
     */
    cursor?: sekolahWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` sekolahs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` sekolahs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of sekolahs.
     */
    distinct?: SekolahScalarFieldEnum | SekolahScalarFieldEnum[]
  }

  /**
   * sekolah findFirstOrThrow
   */
  export type sekolahFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the sekolah
     */
    select?: sekolahSelect<ExtArgs> | null
    /**
     * Omit specific fields from the sekolah
     */
    omit?: sekolahOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: sekolahInclude<ExtArgs> | null
    /**
     * Filter, which sekolah to fetch.
     */
    where?: sekolahWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of sekolahs to fetch.
     */
    orderBy?: sekolahOrderByWithRelationInput | sekolahOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for sekolahs.
     */
    cursor?: sekolahWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` sekolahs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` sekolahs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of sekolahs.
     */
    distinct?: SekolahScalarFieldEnum | SekolahScalarFieldEnum[]
  }

  /**
   * sekolah findMany
   */
  export type sekolahFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the sekolah
     */
    select?: sekolahSelect<ExtArgs> | null
    /**
     * Omit specific fields from the sekolah
     */
    omit?: sekolahOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: sekolahInclude<ExtArgs> | null
    /**
     * Filter, which sekolahs to fetch.
     */
    where?: sekolahWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of sekolahs to fetch.
     */
    orderBy?: sekolahOrderByWithRelationInput | sekolahOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing sekolahs.
     */
    cursor?: sekolahWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` sekolahs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` sekolahs.
     */
    skip?: number
    distinct?: SekolahScalarFieldEnum | SekolahScalarFieldEnum[]
  }

  /**
   * sekolah create
   */
  export type sekolahCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the sekolah
     */
    select?: sekolahSelect<ExtArgs> | null
    /**
     * Omit specific fields from the sekolah
     */
    omit?: sekolahOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: sekolahInclude<ExtArgs> | null
    /**
     * The data needed to create a sekolah.
     */
    data: XOR<sekolahCreateInput, sekolahUncheckedCreateInput>
  }

  /**
   * sekolah createMany
   */
  export type sekolahCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many sekolahs.
     */
    data: sekolahCreateManyInput | sekolahCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * sekolah update
   */
  export type sekolahUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the sekolah
     */
    select?: sekolahSelect<ExtArgs> | null
    /**
     * Omit specific fields from the sekolah
     */
    omit?: sekolahOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: sekolahInclude<ExtArgs> | null
    /**
     * The data needed to update a sekolah.
     */
    data: XOR<sekolahUpdateInput, sekolahUncheckedUpdateInput>
    /**
     * Choose, which sekolah to update.
     */
    where: sekolahWhereUniqueInput
  }

  /**
   * sekolah updateMany
   */
  export type sekolahUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update sekolahs.
     */
    data: XOR<sekolahUpdateManyMutationInput, sekolahUncheckedUpdateManyInput>
    /**
     * Filter which sekolahs to update
     */
    where?: sekolahWhereInput
    /**
     * Limit how many sekolahs to update.
     */
    limit?: number
  }

  /**
   * sekolah upsert
   */
  export type sekolahUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the sekolah
     */
    select?: sekolahSelect<ExtArgs> | null
    /**
     * Omit specific fields from the sekolah
     */
    omit?: sekolahOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: sekolahInclude<ExtArgs> | null
    /**
     * The filter to search for the sekolah to update in case it exists.
     */
    where: sekolahWhereUniqueInput
    /**
     * In case the sekolah found by the `where` argument doesn't exist, create a new sekolah with this data.
     */
    create: XOR<sekolahCreateInput, sekolahUncheckedCreateInput>
    /**
     * In case the sekolah was found with the provided `where` argument, update it with this data.
     */
    update: XOR<sekolahUpdateInput, sekolahUncheckedUpdateInput>
  }

  /**
   * sekolah delete
   */
  export type sekolahDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the sekolah
     */
    select?: sekolahSelect<ExtArgs> | null
    /**
     * Omit specific fields from the sekolah
     */
    omit?: sekolahOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: sekolahInclude<ExtArgs> | null
    /**
     * Filter which sekolah to delete.
     */
    where: sekolahWhereUniqueInput
  }

  /**
   * sekolah deleteMany
   */
  export type sekolahDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which sekolahs to delete
     */
    where?: sekolahWhereInput
    /**
     * Limit how many sekolahs to delete.
     */
    limit?: number
  }

  /**
   * sekolah.murid
   */
  export type sekolah$muridArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the murid
     */
    select?: muridSelect<ExtArgs> | null
    /**
     * Omit specific fields from the murid
     */
    omit?: muridOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: muridInclude<ExtArgs> | null
    where?: muridWhereInput
    orderBy?: muridOrderByWithRelationInput | muridOrderByWithRelationInput[]
    cursor?: muridWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MuridScalarFieldEnum | MuridScalarFieldEnum[]
  }

  /**
   * sekolah without action
   */
  export type sekolahDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the sekolah
     */
    select?: sekolahSelect<ExtArgs> | null
    /**
     * Omit specific fields from the sekolah
     */
    omit?: sekolahOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: sekolahInclude<ExtArgs> | null
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


  export const MuridScalarFieldEnum: {
    id: 'id',
    id_sekolah: 'id_sekolah',
    nama: 'nama',
    email: 'email',
    alamat: 'alamat',
    no_telp: 'no_telp',
    status: 'status',
    created_at: 'created_at',
    updated_at: 'updated_at',
    created_by: 'created_by',
    updated_by: 'updated_by',
    deleted_by: 'deleted_by'
  };

  export type MuridScalarFieldEnum = (typeof MuridScalarFieldEnum)[keyof typeof MuridScalarFieldEnum]


  export const SekolahScalarFieldEnum: {
    id: 'id',
    nama: 'nama',
    email: 'email',
    alamat: 'alamat',
    no_telp: 'no_telp',
    status: 'status',
    created_at: 'created_at',
    updated_at: 'updated_at',
    created_by: 'created_by',
    updated_by: 'updated_by',
    deleted_by: 'deleted_by'
  };

  export type SekolahScalarFieldEnum = (typeof SekolahScalarFieldEnum)[keyof typeof SekolahScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  export const muridOrderByRelevanceFieldEnum: {
    nama: 'nama',
    email: 'email',
    alamat: 'alamat',
    no_telp: 'no_telp',
    created_by: 'created_by',
    updated_by: 'updated_by'
  };

  export type muridOrderByRelevanceFieldEnum = (typeof muridOrderByRelevanceFieldEnum)[keyof typeof muridOrderByRelevanceFieldEnum]


  export const sekolahOrderByRelevanceFieldEnum: {
    nama: 'nama',
    email: 'email',
    alamat: 'alamat',
    no_telp: 'no_telp',
    created_by: 'created_by',
    updated_by: 'updated_by'
  };

  export type sekolahOrderByRelevanceFieldEnum = (typeof sekolahOrderByRelevanceFieldEnum)[keyof typeof sekolahOrderByRelevanceFieldEnum]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    
  /**
   * Deep Input Types
   */


  export type muridWhereInput = {
    AND?: muridWhereInput | muridWhereInput[]
    OR?: muridWhereInput[]
    NOT?: muridWhereInput | muridWhereInput[]
    id?: IntFilter<"murid"> | number
    id_sekolah?: IntFilter<"murid"> | number
    nama?: StringFilter<"murid"> | string
    email?: StringFilter<"murid"> | string
    alamat?: StringFilter<"murid"> | string
    no_telp?: StringFilter<"murid"> | string
    status?: IntFilter<"murid"> | number
    created_at?: DateTimeNullableFilter<"murid"> | Date | string | null
    updated_at?: DateTimeNullableFilter<"murid"> | Date | string | null
    created_by?: StringNullableFilter<"murid"> | string | null
    updated_by?: StringNullableFilter<"murid"> | string | null
    deleted_by?: DateTimeNullableFilter<"murid"> | Date | string | null
    sekolah?: XOR<SekolahScalarRelationFilter, sekolahWhereInput>
  }

  export type muridOrderByWithRelationInput = {
    id?: SortOrder
    id_sekolah?: SortOrder
    nama?: SortOrder
    email?: SortOrder
    alamat?: SortOrder
    no_telp?: SortOrder
    status?: SortOrder
    created_at?: SortOrderInput | SortOrder
    updated_at?: SortOrderInput | SortOrder
    created_by?: SortOrderInput | SortOrder
    updated_by?: SortOrderInput | SortOrder
    deleted_by?: SortOrderInput | SortOrder
    sekolah?: sekolahOrderByWithRelationInput
    _relevance?: muridOrderByRelevanceInput
  }

  export type muridWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    nama?: string
    email?: string
    AND?: muridWhereInput | muridWhereInput[]
    OR?: muridWhereInput[]
    NOT?: muridWhereInput | muridWhereInput[]
    id_sekolah?: IntFilter<"murid"> | number
    alamat?: StringFilter<"murid"> | string
    no_telp?: StringFilter<"murid"> | string
    status?: IntFilter<"murid"> | number
    created_at?: DateTimeNullableFilter<"murid"> | Date | string | null
    updated_at?: DateTimeNullableFilter<"murid"> | Date | string | null
    created_by?: StringNullableFilter<"murid"> | string | null
    updated_by?: StringNullableFilter<"murid"> | string | null
    deleted_by?: DateTimeNullableFilter<"murid"> | Date | string | null
    sekolah?: XOR<SekolahScalarRelationFilter, sekolahWhereInput>
  }, "id" | "nama" | "email">

  export type muridOrderByWithAggregationInput = {
    id?: SortOrder
    id_sekolah?: SortOrder
    nama?: SortOrder
    email?: SortOrder
    alamat?: SortOrder
    no_telp?: SortOrder
    status?: SortOrder
    created_at?: SortOrderInput | SortOrder
    updated_at?: SortOrderInput | SortOrder
    created_by?: SortOrderInput | SortOrder
    updated_by?: SortOrderInput | SortOrder
    deleted_by?: SortOrderInput | SortOrder
    _count?: muridCountOrderByAggregateInput
    _avg?: muridAvgOrderByAggregateInput
    _max?: muridMaxOrderByAggregateInput
    _min?: muridMinOrderByAggregateInput
    _sum?: muridSumOrderByAggregateInput
  }

  export type muridScalarWhereWithAggregatesInput = {
    AND?: muridScalarWhereWithAggregatesInput | muridScalarWhereWithAggregatesInput[]
    OR?: muridScalarWhereWithAggregatesInput[]
    NOT?: muridScalarWhereWithAggregatesInput | muridScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"murid"> | number
    id_sekolah?: IntWithAggregatesFilter<"murid"> | number
    nama?: StringWithAggregatesFilter<"murid"> | string
    email?: StringWithAggregatesFilter<"murid"> | string
    alamat?: StringWithAggregatesFilter<"murid"> | string
    no_telp?: StringWithAggregatesFilter<"murid"> | string
    status?: IntWithAggregatesFilter<"murid"> | number
    created_at?: DateTimeNullableWithAggregatesFilter<"murid"> | Date | string | null
    updated_at?: DateTimeNullableWithAggregatesFilter<"murid"> | Date | string | null
    created_by?: StringNullableWithAggregatesFilter<"murid"> | string | null
    updated_by?: StringNullableWithAggregatesFilter<"murid"> | string | null
    deleted_by?: DateTimeNullableWithAggregatesFilter<"murid"> | Date | string | null
  }

  export type sekolahWhereInput = {
    AND?: sekolahWhereInput | sekolahWhereInput[]
    OR?: sekolahWhereInput[]
    NOT?: sekolahWhereInput | sekolahWhereInput[]
    id?: IntFilter<"sekolah"> | number
    nama?: StringFilter<"sekolah"> | string
    email?: StringFilter<"sekolah"> | string
    alamat?: StringFilter<"sekolah"> | string
    no_telp?: StringFilter<"sekolah"> | string
    status?: IntFilter<"sekolah"> | number
    created_at?: DateTimeNullableFilter<"sekolah"> | Date | string | null
    updated_at?: DateTimeNullableFilter<"sekolah"> | Date | string | null
    created_by?: StringNullableFilter<"sekolah"> | string | null
    updated_by?: StringNullableFilter<"sekolah"> | string | null
    deleted_by?: DateTimeNullableFilter<"sekolah"> | Date | string | null
    murid?: MuridListRelationFilter
  }

  export type sekolahOrderByWithRelationInput = {
    id?: SortOrder
    nama?: SortOrder
    email?: SortOrder
    alamat?: SortOrder
    no_telp?: SortOrder
    status?: SortOrder
    created_at?: SortOrderInput | SortOrder
    updated_at?: SortOrderInput | SortOrder
    created_by?: SortOrderInput | SortOrder
    updated_by?: SortOrderInput | SortOrder
    deleted_by?: SortOrderInput | SortOrder
    murid?: muridOrderByRelationAggregateInput
    _relevance?: sekolahOrderByRelevanceInput
  }

  export type sekolahWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    nama?: string
    email?: string
    no_telp?: string
    AND?: sekolahWhereInput | sekolahWhereInput[]
    OR?: sekolahWhereInput[]
    NOT?: sekolahWhereInput | sekolahWhereInput[]
    alamat?: StringFilter<"sekolah"> | string
    status?: IntFilter<"sekolah"> | number
    created_at?: DateTimeNullableFilter<"sekolah"> | Date | string | null
    updated_at?: DateTimeNullableFilter<"sekolah"> | Date | string | null
    created_by?: StringNullableFilter<"sekolah"> | string | null
    updated_by?: StringNullableFilter<"sekolah"> | string | null
    deleted_by?: DateTimeNullableFilter<"sekolah"> | Date | string | null
    murid?: MuridListRelationFilter
  }, "id" | "nama" | "email" | "no_telp">

  export type sekolahOrderByWithAggregationInput = {
    id?: SortOrder
    nama?: SortOrder
    email?: SortOrder
    alamat?: SortOrder
    no_telp?: SortOrder
    status?: SortOrder
    created_at?: SortOrderInput | SortOrder
    updated_at?: SortOrderInput | SortOrder
    created_by?: SortOrderInput | SortOrder
    updated_by?: SortOrderInput | SortOrder
    deleted_by?: SortOrderInput | SortOrder
    _count?: sekolahCountOrderByAggregateInput
    _avg?: sekolahAvgOrderByAggregateInput
    _max?: sekolahMaxOrderByAggregateInput
    _min?: sekolahMinOrderByAggregateInput
    _sum?: sekolahSumOrderByAggregateInput
  }

  export type sekolahScalarWhereWithAggregatesInput = {
    AND?: sekolahScalarWhereWithAggregatesInput | sekolahScalarWhereWithAggregatesInput[]
    OR?: sekolahScalarWhereWithAggregatesInput[]
    NOT?: sekolahScalarWhereWithAggregatesInput | sekolahScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"sekolah"> | number
    nama?: StringWithAggregatesFilter<"sekolah"> | string
    email?: StringWithAggregatesFilter<"sekolah"> | string
    alamat?: StringWithAggregatesFilter<"sekolah"> | string
    no_telp?: StringWithAggregatesFilter<"sekolah"> | string
    status?: IntWithAggregatesFilter<"sekolah"> | number
    created_at?: DateTimeNullableWithAggregatesFilter<"sekolah"> | Date | string | null
    updated_at?: DateTimeNullableWithAggregatesFilter<"sekolah"> | Date | string | null
    created_by?: StringNullableWithAggregatesFilter<"sekolah"> | string | null
    updated_by?: StringNullableWithAggregatesFilter<"sekolah"> | string | null
    deleted_by?: DateTimeNullableWithAggregatesFilter<"sekolah"> | Date | string | null
  }

  export type muridCreateInput = {
    nama: string
    email: string
    alamat: string
    no_telp: string
    status: number
    created_at?: Date | string | null
    updated_at?: Date | string | null
    created_by?: string | null
    updated_by?: string | null
    deleted_by?: Date | string | null
    sekolah: sekolahCreateNestedOneWithoutMuridInput
  }

  export type muridUncheckedCreateInput = {
    id?: number
    id_sekolah: number
    nama: string
    email: string
    alamat: string
    no_telp: string
    status: number
    created_at?: Date | string | null
    updated_at?: Date | string | null
    created_by?: string | null
    updated_by?: string | null
    deleted_by?: Date | string | null
  }

  export type muridUpdateInput = {
    nama?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    alamat?: StringFieldUpdateOperationsInput | string
    no_telp?: StringFieldUpdateOperationsInput | string
    status?: IntFieldUpdateOperationsInput | number
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_by?: NullableStringFieldUpdateOperationsInput | string | null
    updated_by?: NullableStringFieldUpdateOperationsInput | string | null
    deleted_by?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    sekolah?: sekolahUpdateOneRequiredWithoutMuridNestedInput
  }

  export type muridUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    id_sekolah?: IntFieldUpdateOperationsInput | number
    nama?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    alamat?: StringFieldUpdateOperationsInput | string
    no_telp?: StringFieldUpdateOperationsInput | string
    status?: IntFieldUpdateOperationsInput | number
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_by?: NullableStringFieldUpdateOperationsInput | string | null
    updated_by?: NullableStringFieldUpdateOperationsInput | string | null
    deleted_by?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type muridCreateManyInput = {
    id?: number
    id_sekolah: number
    nama: string
    email: string
    alamat: string
    no_telp: string
    status: number
    created_at?: Date | string | null
    updated_at?: Date | string | null
    created_by?: string | null
    updated_by?: string | null
    deleted_by?: Date | string | null
  }

  export type muridUpdateManyMutationInput = {
    nama?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    alamat?: StringFieldUpdateOperationsInput | string
    no_telp?: StringFieldUpdateOperationsInput | string
    status?: IntFieldUpdateOperationsInput | number
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_by?: NullableStringFieldUpdateOperationsInput | string | null
    updated_by?: NullableStringFieldUpdateOperationsInput | string | null
    deleted_by?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type muridUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    id_sekolah?: IntFieldUpdateOperationsInput | number
    nama?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    alamat?: StringFieldUpdateOperationsInput | string
    no_telp?: StringFieldUpdateOperationsInput | string
    status?: IntFieldUpdateOperationsInput | number
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_by?: NullableStringFieldUpdateOperationsInput | string | null
    updated_by?: NullableStringFieldUpdateOperationsInput | string | null
    deleted_by?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type sekolahCreateInput = {
    nama: string
    email: string
    alamat: string
    no_telp: string
    status?: number
    created_at?: Date | string | null
    updated_at?: Date | string | null
    created_by?: string | null
    updated_by?: string | null
    deleted_by?: Date | string | null
    murid?: muridCreateNestedManyWithoutSekolahInput
  }

  export type sekolahUncheckedCreateInput = {
    id?: number
    nama: string
    email: string
    alamat: string
    no_telp: string
    status?: number
    created_at?: Date | string | null
    updated_at?: Date | string | null
    created_by?: string | null
    updated_by?: string | null
    deleted_by?: Date | string | null
    murid?: muridUncheckedCreateNestedManyWithoutSekolahInput
  }

  export type sekolahUpdateInput = {
    nama?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    alamat?: StringFieldUpdateOperationsInput | string
    no_telp?: StringFieldUpdateOperationsInput | string
    status?: IntFieldUpdateOperationsInput | number
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_by?: NullableStringFieldUpdateOperationsInput | string | null
    updated_by?: NullableStringFieldUpdateOperationsInput | string | null
    deleted_by?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    murid?: muridUpdateManyWithoutSekolahNestedInput
  }

  export type sekolahUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    nama?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    alamat?: StringFieldUpdateOperationsInput | string
    no_telp?: StringFieldUpdateOperationsInput | string
    status?: IntFieldUpdateOperationsInput | number
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_by?: NullableStringFieldUpdateOperationsInput | string | null
    updated_by?: NullableStringFieldUpdateOperationsInput | string | null
    deleted_by?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    murid?: muridUncheckedUpdateManyWithoutSekolahNestedInput
  }

  export type sekolahCreateManyInput = {
    id?: number
    nama: string
    email: string
    alamat: string
    no_telp: string
    status?: number
    created_at?: Date | string | null
    updated_at?: Date | string | null
    created_by?: string | null
    updated_by?: string | null
    deleted_by?: Date | string | null
  }

  export type sekolahUpdateManyMutationInput = {
    nama?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    alamat?: StringFieldUpdateOperationsInput | string
    no_telp?: StringFieldUpdateOperationsInput | string
    status?: IntFieldUpdateOperationsInput | number
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_by?: NullableStringFieldUpdateOperationsInput | string | null
    updated_by?: NullableStringFieldUpdateOperationsInput | string | null
    deleted_by?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type sekolahUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    nama?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    alamat?: StringFieldUpdateOperationsInput | string
    no_telp?: StringFieldUpdateOperationsInput | string
    status?: IntFieldUpdateOperationsInput | number
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_by?: NullableStringFieldUpdateOperationsInput | string | null
    updated_by?: NullableStringFieldUpdateOperationsInput | string | null
    deleted_by?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type SekolahScalarRelationFilter = {
    is?: sekolahWhereInput
    isNot?: sekolahWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type muridOrderByRelevanceInput = {
    fields: muridOrderByRelevanceFieldEnum | muridOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type muridCountOrderByAggregateInput = {
    id?: SortOrder
    id_sekolah?: SortOrder
    nama?: SortOrder
    email?: SortOrder
    alamat?: SortOrder
    no_telp?: SortOrder
    status?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    created_by?: SortOrder
    updated_by?: SortOrder
    deleted_by?: SortOrder
  }

  export type muridAvgOrderByAggregateInput = {
    id?: SortOrder
    id_sekolah?: SortOrder
    status?: SortOrder
  }

  export type muridMaxOrderByAggregateInput = {
    id?: SortOrder
    id_sekolah?: SortOrder
    nama?: SortOrder
    email?: SortOrder
    alamat?: SortOrder
    no_telp?: SortOrder
    status?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    created_by?: SortOrder
    updated_by?: SortOrder
    deleted_by?: SortOrder
  }

  export type muridMinOrderByAggregateInput = {
    id?: SortOrder
    id_sekolah?: SortOrder
    nama?: SortOrder
    email?: SortOrder
    alamat?: SortOrder
    no_telp?: SortOrder
    status?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    created_by?: SortOrder
    updated_by?: SortOrder
    deleted_by?: SortOrder
  }

  export type muridSumOrderByAggregateInput = {
    id?: SortOrder
    id_sekolah?: SortOrder
    status?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
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

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type MuridListRelationFilter = {
    every?: muridWhereInput
    some?: muridWhereInput
    none?: muridWhereInput
  }

  export type muridOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type sekolahOrderByRelevanceInput = {
    fields: sekolahOrderByRelevanceFieldEnum | sekolahOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type sekolahCountOrderByAggregateInput = {
    id?: SortOrder
    nama?: SortOrder
    email?: SortOrder
    alamat?: SortOrder
    no_telp?: SortOrder
    status?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    created_by?: SortOrder
    updated_by?: SortOrder
    deleted_by?: SortOrder
  }

  export type sekolahAvgOrderByAggregateInput = {
    id?: SortOrder
    status?: SortOrder
  }

  export type sekolahMaxOrderByAggregateInput = {
    id?: SortOrder
    nama?: SortOrder
    email?: SortOrder
    alamat?: SortOrder
    no_telp?: SortOrder
    status?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    created_by?: SortOrder
    updated_by?: SortOrder
    deleted_by?: SortOrder
  }

  export type sekolahMinOrderByAggregateInput = {
    id?: SortOrder
    nama?: SortOrder
    email?: SortOrder
    alamat?: SortOrder
    no_telp?: SortOrder
    status?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    created_by?: SortOrder
    updated_by?: SortOrder
    deleted_by?: SortOrder
  }

  export type sekolahSumOrderByAggregateInput = {
    id?: SortOrder
    status?: SortOrder
  }

  export type sekolahCreateNestedOneWithoutMuridInput = {
    create?: XOR<sekolahCreateWithoutMuridInput, sekolahUncheckedCreateWithoutMuridInput>
    connectOrCreate?: sekolahCreateOrConnectWithoutMuridInput
    connect?: sekolahWhereUniqueInput
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type sekolahUpdateOneRequiredWithoutMuridNestedInput = {
    create?: XOR<sekolahCreateWithoutMuridInput, sekolahUncheckedCreateWithoutMuridInput>
    connectOrCreate?: sekolahCreateOrConnectWithoutMuridInput
    upsert?: sekolahUpsertWithoutMuridInput
    connect?: sekolahWhereUniqueInput
    update?: XOR<XOR<sekolahUpdateToOneWithWhereWithoutMuridInput, sekolahUpdateWithoutMuridInput>, sekolahUncheckedUpdateWithoutMuridInput>
  }

  export type muridCreateNestedManyWithoutSekolahInput = {
    create?: XOR<muridCreateWithoutSekolahInput, muridUncheckedCreateWithoutSekolahInput> | muridCreateWithoutSekolahInput[] | muridUncheckedCreateWithoutSekolahInput[]
    connectOrCreate?: muridCreateOrConnectWithoutSekolahInput | muridCreateOrConnectWithoutSekolahInput[]
    createMany?: muridCreateManySekolahInputEnvelope
    connect?: muridWhereUniqueInput | muridWhereUniqueInput[]
  }

  export type muridUncheckedCreateNestedManyWithoutSekolahInput = {
    create?: XOR<muridCreateWithoutSekolahInput, muridUncheckedCreateWithoutSekolahInput> | muridCreateWithoutSekolahInput[] | muridUncheckedCreateWithoutSekolahInput[]
    connectOrCreate?: muridCreateOrConnectWithoutSekolahInput | muridCreateOrConnectWithoutSekolahInput[]
    createMany?: muridCreateManySekolahInputEnvelope
    connect?: muridWhereUniqueInput | muridWhereUniqueInput[]
  }

  export type muridUpdateManyWithoutSekolahNestedInput = {
    create?: XOR<muridCreateWithoutSekolahInput, muridUncheckedCreateWithoutSekolahInput> | muridCreateWithoutSekolahInput[] | muridUncheckedCreateWithoutSekolahInput[]
    connectOrCreate?: muridCreateOrConnectWithoutSekolahInput | muridCreateOrConnectWithoutSekolahInput[]
    upsert?: muridUpsertWithWhereUniqueWithoutSekolahInput | muridUpsertWithWhereUniqueWithoutSekolahInput[]
    createMany?: muridCreateManySekolahInputEnvelope
    set?: muridWhereUniqueInput | muridWhereUniqueInput[]
    disconnect?: muridWhereUniqueInput | muridWhereUniqueInput[]
    delete?: muridWhereUniqueInput | muridWhereUniqueInput[]
    connect?: muridWhereUniqueInput | muridWhereUniqueInput[]
    update?: muridUpdateWithWhereUniqueWithoutSekolahInput | muridUpdateWithWhereUniqueWithoutSekolahInput[]
    updateMany?: muridUpdateManyWithWhereWithoutSekolahInput | muridUpdateManyWithWhereWithoutSekolahInput[]
    deleteMany?: muridScalarWhereInput | muridScalarWhereInput[]
  }

  export type muridUncheckedUpdateManyWithoutSekolahNestedInput = {
    create?: XOR<muridCreateWithoutSekolahInput, muridUncheckedCreateWithoutSekolahInput> | muridCreateWithoutSekolahInput[] | muridUncheckedCreateWithoutSekolahInput[]
    connectOrCreate?: muridCreateOrConnectWithoutSekolahInput | muridCreateOrConnectWithoutSekolahInput[]
    upsert?: muridUpsertWithWhereUniqueWithoutSekolahInput | muridUpsertWithWhereUniqueWithoutSekolahInput[]
    createMany?: muridCreateManySekolahInputEnvelope
    set?: muridWhereUniqueInput | muridWhereUniqueInput[]
    disconnect?: muridWhereUniqueInput | muridWhereUniqueInput[]
    delete?: muridWhereUniqueInput | muridWhereUniqueInput[]
    connect?: muridWhereUniqueInput | muridWhereUniqueInput[]
    update?: muridUpdateWithWhereUniqueWithoutSekolahInput | muridUpdateWithWhereUniqueWithoutSekolahInput[]
    updateMany?: muridUpdateManyWithWhereWithoutSekolahInput | muridUpdateManyWithWhereWithoutSekolahInput[]
    deleteMany?: muridScalarWhereInput | muridScalarWhereInput[]
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
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
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type sekolahCreateWithoutMuridInput = {
    nama: string
    email: string
    alamat: string
    no_telp: string
    status?: number
    created_at?: Date | string | null
    updated_at?: Date | string | null
    created_by?: string | null
    updated_by?: string | null
    deleted_by?: Date | string | null
  }

  export type sekolahUncheckedCreateWithoutMuridInput = {
    id?: number
    nama: string
    email: string
    alamat: string
    no_telp: string
    status?: number
    created_at?: Date | string | null
    updated_at?: Date | string | null
    created_by?: string | null
    updated_by?: string | null
    deleted_by?: Date | string | null
  }

  export type sekolahCreateOrConnectWithoutMuridInput = {
    where: sekolahWhereUniqueInput
    create: XOR<sekolahCreateWithoutMuridInput, sekolahUncheckedCreateWithoutMuridInput>
  }

  export type sekolahUpsertWithoutMuridInput = {
    update: XOR<sekolahUpdateWithoutMuridInput, sekolahUncheckedUpdateWithoutMuridInput>
    create: XOR<sekolahCreateWithoutMuridInput, sekolahUncheckedCreateWithoutMuridInput>
    where?: sekolahWhereInput
  }

  export type sekolahUpdateToOneWithWhereWithoutMuridInput = {
    where?: sekolahWhereInput
    data: XOR<sekolahUpdateWithoutMuridInput, sekolahUncheckedUpdateWithoutMuridInput>
  }

  export type sekolahUpdateWithoutMuridInput = {
    nama?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    alamat?: StringFieldUpdateOperationsInput | string
    no_telp?: StringFieldUpdateOperationsInput | string
    status?: IntFieldUpdateOperationsInput | number
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_by?: NullableStringFieldUpdateOperationsInput | string | null
    updated_by?: NullableStringFieldUpdateOperationsInput | string | null
    deleted_by?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type sekolahUncheckedUpdateWithoutMuridInput = {
    id?: IntFieldUpdateOperationsInput | number
    nama?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    alamat?: StringFieldUpdateOperationsInput | string
    no_telp?: StringFieldUpdateOperationsInput | string
    status?: IntFieldUpdateOperationsInput | number
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_by?: NullableStringFieldUpdateOperationsInput | string | null
    updated_by?: NullableStringFieldUpdateOperationsInput | string | null
    deleted_by?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type muridCreateWithoutSekolahInput = {
    nama: string
    email: string
    alamat: string
    no_telp: string
    status: number
    created_at?: Date | string | null
    updated_at?: Date | string | null
    created_by?: string | null
    updated_by?: string | null
    deleted_by?: Date | string | null
  }

  export type muridUncheckedCreateWithoutSekolahInput = {
    id?: number
    nama: string
    email: string
    alamat: string
    no_telp: string
    status: number
    created_at?: Date | string | null
    updated_at?: Date | string | null
    created_by?: string | null
    updated_by?: string | null
    deleted_by?: Date | string | null
  }

  export type muridCreateOrConnectWithoutSekolahInput = {
    where: muridWhereUniqueInput
    create: XOR<muridCreateWithoutSekolahInput, muridUncheckedCreateWithoutSekolahInput>
  }

  export type muridCreateManySekolahInputEnvelope = {
    data: muridCreateManySekolahInput | muridCreateManySekolahInput[]
    skipDuplicates?: boolean
  }

  export type muridUpsertWithWhereUniqueWithoutSekolahInput = {
    where: muridWhereUniqueInput
    update: XOR<muridUpdateWithoutSekolahInput, muridUncheckedUpdateWithoutSekolahInput>
    create: XOR<muridCreateWithoutSekolahInput, muridUncheckedCreateWithoutSekolahInput>
  }

  export type muridUpdateWithWhereUniqueWithoutSekolahInput = {
    where: muridWhereUniqueInput
    data: XOR<muridUpdateWithoutSekolahInput, muridUncheckedUpdateWithoutSekolahInput>
  }

  export type muridUpdateManyWithWhereWithoutSekolahInput = {
    where: muridScalarWhereInput
    data: XOR<muridUpdateManyMutationInput, muridUncheckedUpdateManyWithoutSekolahInput>
  }

  export type muridScalarWhereInput = {
    AND?: muridScalarWhereInput | muridScalarWhereInput[]
    OR?: muridScalarWhereInput[]
    NOT?: muridScalarWhereInput | muridScalarWhereInput[]
    id?: IntFilter<"murid"> | number
    id_sekolah?: IntFilter<"murid"> | number
    nama?: StringFilter<"murid"> | string
    email?: StringFilter<"murid"> | string
    alamat?: StringFilter<"murid"> | string
    no_telp?: StringFilter<"murid"> | string
    status?: IntFilter<"murid"> | number
    created_at?: DateTimeNullableFilter<"murid"> | Date | string | null
    updated_at?: DateTimeNullableFilter<"murid"> | Date | string | null
    created_by?: StringNullableFilter<"murid"> | string | null
    updated_by?: StringNullableFilter<"murid"> | string | null
    deleted_by?: DateTimeNullableFilter<"murid"> | Date | string | null
  }

  export type muridCreateManySekolahInput = {
    id?: number
    nama: string
    email: string
    alamat: string
    no_telp: string
    status: number
    created_at?: Date | string | null
    updated_at?: Date | string | null
    created_by?: string | null
    updated_by?: string | null
    deleted_by?: Date | string | null
  }

  export type muridUpdateWithoutSekolahInput = {
    nama?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    alamat?: StringFieldUpdateOperationsInput | string
    no_telp?: StringFieldUpdateOperationsInput | string
    status?: IntFieldUpdateOperationsInput | number
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_by?: NullableStringFieldUpdateOperationsInput | string | null
    updated_by?: NullableStringFieldUpdateOperationsInput | string | null
    deleted_by?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type muridUncheckedUpdateWithoutSekolahInput = {
    id?: IntFieldUpdateOperationsInput | number
    nama?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    alamat?: StringFieldUpdateOperationsInput | string
    no_telp?: StringFieldUpdateOperationsInput | string
    status?: IntFieldUpdateOperationsInput | number
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_by?: NullableStringFieldUpdateOperationsInput | string | null
    updated_by?: NullableStringFieldUpdateOperationsInput | string | null
    deleted_by?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type muridUncheckedUpdateManyWithoutSekolahInput = {
    id?: IntFieldUpdateOperationsInput | number
    nama?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    alamat?: StringFieldUpdateOperationsInput | string
    no_telp?: StringFieldUpdateOperationsInput | string
    status?: IntFieldUpdateOperationsInput | number
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_by?: NullableStringFieldUpdateOperationsInput | string | null
    updated_by?: NullableStringFieldUpdateOperationsInput | string | null
    deleted_by?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
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