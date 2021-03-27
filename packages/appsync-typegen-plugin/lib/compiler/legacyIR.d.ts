import { GraphQLSchema, GraphQLType, GraphQLObjectType, GraphQLCompositeType, DocumentNode } from 'graphql';
import '../utilities/array';
import Maybe from 'graphql/tsutils/Maybe';
export interface CompilerOptions {
  addTypename?: boolean;
  mergeInFieldsFromFragmentSpreads?: boolean;
  passthroughCustomScalars?: boolean;
  customScalarsPrefix?: string;
  namespace?: string;
  generateOperationIds?: boolean;
}
export interface LegacyCompilerContext {
  schema: GraphQLSchema;
  operations: {
    [operationName: string]: LegacyOperation;
  };
  fragments: {
    [fragmentName: string]: LegacyFragment;
  };
  typesUsed: GraphQLType[];
  options: CompilerOptions;
}
export interface LegacyOperation {
  filePath?: string;
  operationName: string;
  operationId?: string;
  operationType: string;
  rootType: GraphQLObjectType;
  variables: {
    name: string;
    type: GraphQLType;
  }[];
  source: string;
  sourceWithFragments?: string;
  fields: LegacyField[];
  fragmentSpreads?: string[];
  inlineFragments?: LegacyInlineFragment[];
  fragmentsReferenced: string[];
}
export interface LegacyFragment {
  filePath?: string;
  fragmentName: string;
  source: string;
  typeCondition: GraphQLCompositeType;
  possibleTypes: GraphQLObjectType[];
  fields: LegacyField[];
  fragmentSpreads: string[];
  inlineFragments: LegacyInlineFragment[];
}
export interface LegacyInlineFragment {
  typeCondition: GraphQLObjectType;
  possibleTypes: GraphQLObjectType[];
  fields: LegacyField[];
  fragmentSpreads: string[];
}
export interface LegacyField {
  responseName: string;
  fieldName: string;
  args?: Argument[];
  type: GraphQLType;
  description?: Maybe<string>;
  isConditional?: boolean;
  conditions?: BooleanCondition[];
  isDeprecated?: boolean;
  deprecationReason?: string;
  fields?: LegacyField[];
  fragmentSpreads?: string[];
  inlineFragments?: LegacyInlineFragment[];
}
export interface BooleanCondition {
  variableName: string;
  inverted: boolean;
}
export interface Argument {
  name: string;
  value: any;
}
export declare function compileToLegacyIR(schema: GraphQLSchema, document: DocumentNode, options?: CompilerOptions): LegacyCompilerContext;
//# sourceMappingURL=legacyIR.d.ts.map
