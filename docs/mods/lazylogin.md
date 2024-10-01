# LazyLogin
https://www.mcmod.cn/class/16519.html

服务器使用的登录兼白名单修复 mod。

提供的功能：

- 玩家在进入服务器的时候必须使用 `/register` 命令注册账号，或者使用 `/login` 登录已注册的用户名。未登录时玩家处于无敌状态（基于 [login](javascript:void(0);)）。

- 玩家可以通过 `/password change` 更改密码，拥有 op 权限的玩家还可以：

  - 使用 `/password reset` 重置一名玩家的密码；
  - 使用 `/password reload` 重新加载 `registered-players.json`；
  - 使用 `/password list` 列出所有已注册的玩家，并显示在白名单却未注册的玩家。

- 服务器根据玩家的用户名，把密码的 SHA-256 记录在 `registered-players.json` 中（更安全）；

- 服务器通过用户名来识别玩家，并以此实现档案存储和白名单管理（而不是 UUID）；

这个 mod 可以让玩家们在 TTB 中安全地游戏。
