# LazyLogin
https://www.mcmod.cn/class/16519.html

服务器使用的登录兼白名单修复 mod。

## 提供的功能

- 玩家在进入服务器的时候必须使用 `/register` 命令注册账号，或者使用 `/login` 登录已注册的用户名。未登录时玩家处于无敌状态。
- 玩家可以通过 `/password change` 更改密码。
- 拥有 `op` 权限（权限等级至少为 `3`）的玩家还可以：
  - 使用 `/password reset` 重置一名玩家的密码（恢复为未注册状态）
  - 使用 `/password reload` 重新加载 `registered-players.json`
  - 使用 `/password list` 列出所有已注册的玩家，并显示在白名单却未注册的玩家
- 服务器根据玩家的用户名，把密码的 SHA-256 记录在 `registered-players.json` 中（而不是明文，更安全）
- 服务器通过识别玩家的**用户名**来实现白名单和玩家数据管理（而不是 UUID）
- 可以通过修改 `.jar` 内 `\assets\lazylogin\lang.json` 自定义文本，或者翻译成其他语言

### 1.3.0 及以上版本

增加或修改了以下需要 `op` 权限的命令：

- `/password reset`，现在不需要验证执行者的密码；命令的执行目标的密码会被重置为一个随机密码，而不是恢复为未注册状态
- `/whitelist safe-add`，使用的时候先以一个初始随机密码注册，再加入白名单。初始密码会打印在服务器控制台上，也会发送给命令执行者

