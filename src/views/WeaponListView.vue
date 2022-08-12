<template>
  <div></div>
</template>

<script>
import { useQuery } from '@vue/apollo-composable';
import gql from 'graphql-tag';

export default {
  setup() {
    const { result, loading, error } = useQuery(gql``);
    return {
      weaponsData: result,
      weaponsLoading: loading,
      weaponsError: error,
    };
  },
};
</script>

<style>
</style>
