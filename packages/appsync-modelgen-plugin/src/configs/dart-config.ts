export const LOADER_CLASS_NAME = 'ModelProvider';
export const FLUTTER_DATASTORE_PLUGIN_INTERFACE_IMPORT = 'package:amplify_datastore_plugin_interface/amplify_datastore_plugin_interface';
export const FLUTTER_AMPLIFY_CORE_IMPORT = 'package:amplify_core/amplify_core';
export const BASE_IMPORT_PACKAGES = ['package:flutter/foundation.dart'];
export const COLLECTION_PACKAGE = 'package:collection/collection.dart';

export const CUSTOM_LINTS_MESSAGE = `// NOTE: This file is generated and may not follow lint rules defined in your app
// Generated files can be excluded from analysis in analysis_options.yaml
// For more info, see: https://dart.dev/guides/language/analysis-options#excluding-code-from-analysis`;

export const IGNORE_FOR_FILE =
         '// ignore_for_file: public_member_api_docs, annotate_overrides, dead_code, dead_codepublic_member_api_docs, depend_on_referenced_packages, file_names, library_private_types_in_public_api, no_leading_underscores_for_library_prefixes, no_leading_underscores_for_local_identifiers, non_constant_identifier_names, null_check_on_nullable_type_parameter, prefer_adjacent_string_concatenation, prefer_const_constructors, prefer_if_null_operators, prefer_interpolation_to_compose_strings, slash_for_doc_comments, sort_child_properties_last, unnecessary_const, unnecessary_constructor_name, unnecessary_late, unnecessary_new, unnecessary_null_aware_assignments, unnecessary_nullable_for_final_variable_declarations, unnecessary_string_interpolations, use_build_context_synchronously';

export const typeToEnumMap: Record<string, string> = {
  String: '.string',
  Int: '.int',
  Float: '.double',
  Boolean: '.bool',
  AWSDate: '.date',
  AWSDateTime: '.dateTime',
  AWSTime: '.time',
  AWSTimestamp: '.timestamp',
  AWSEmail: '.string',
  AWSJSON: '.string',
  AWSURL: '.string',
  AWSPhone: '.string',
  AWSIPAddress: '.string',
};

export const DART_RESERVED_KEYWORDS = [
  'abstract',
  'as',
  'assert',
  'async',
  'await',
  'break',
  'case',
  'catch',
  'class',
  'const',
  'continue',
  'covariant',
  'default',
  'deferred',
  'do',
  'dynamic',
  'else',
  'enum',
  'export',
  'extends',
  'extension',
  'external',
  'factory',
  'false',
  'final',
  'finally',
  'for',
  'Function',
  'get',
  'hide',
  'if',
  'implements',
  'import',
  'in',
  'interface',
  'is',
  'library',
  'mixin',
  'new',
  'null',
  'on',
  'operator',
  'part',
  'rethrow',
  'return',
  'set',
  'show',
  'static',
  'super',
  'switch',
  'sync',
  'this',
  'throw',
  'true',
  'try',
  'typedef',
  'var',
  'void',
  'while',
  'with',
  'yield',
];
