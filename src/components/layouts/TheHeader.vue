<template>
  <header>
    <div class="container">
      <div class="row">
        <div class="clo-12">
          <div class="logo d-flex">
            <h1><img src="../../assets/logo.png" alt="vue" class="mr-2" /><span>Portal</span></h1>
          </div>
        </div>
      </div>
    </div>
  </header>
</template>

<style lang="scss" scoped>
header {
  padding: 15px 0;
  background-color: rgba(0, 0, 0, 0.6);
  transition: all 0.5s ease-in-out;
  text-shadow: rgb(0 0 0 / 40%) 0 1px 1px;
  color: #fff;
  display: flex;
  justify-content: space-between;
}

img {
  width: 35px;
  margin-bottom: 6px;
}
</style>
